-- Esquema para el sistema de análisis de usuarios

-- Tabla de usuarios (complementa la tabla auth.users)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT, -- directo, orgánico, referido
  referrer TEXT, -- URL de referencia si aplica
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  user_agent TEXT,
  is_opted_out BOOLEAN DEFAULT FALSE -- Para cumplimiento GDPR
);

-- Tabla de sesiones de usuario
CREATE TABLE IF NOT EXISTS user_sessions (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  ip_address TEXT,
  user_agent TEXT,
  device_type TEXT, -- móvil, tablet, escritorio
  browser TEXT,
  os TEXT,
  country TEXT,
  region TEXT
);

-- Tabla de eventos de usuario
CREATE TABLE IF NOT EXISTS user_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  anonymous_id TEXT, -- Para usuarios no autenticados
  session_id TEXT REFERENCES user_sessions(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  page_path TEXT,
  component_id TEXT, -- ID del componente que generó el evento
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb, -- Datos adicionales del evento
  client_timestamp BIGINT -- Timestamp del cliente para ordenar eventos
);

-- Tabla de páginas visitadas
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  anonymous_id TEXT, -- Para usuarios no autenticados
  session_id TEXT REFERENCES user_sessions(id) ON DELETE SET NULL,
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  time_on_page INTEGER, -- en segundos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  exit_at TIMESTAMP WITH TIME ZONE,
  is_bounce BOOLEAN DEFAULT FALSE
);

-- Tabla de documentos analizados
CREATE TABLE IF NOT EXISTS document_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT REFERENCES user_sessions(id) ON DELETE SET NULL,
  document_type TEXT, -- pdf, imagen, texto
  document_name TEXT,
  document_size INTEGER, -- en bytes
  processing_time INTEGER, -- en milisegundos
  success BOOLEAN DEFAULT TRUE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de consultas a abogados
CREATE TABLE IF NOT EXISTS lawyer_queries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT REFERENCES user_sessions(id) ON DELETE SET NULL,
  query_text TEXT,
  document_id UUID REFERENCES document_analyses(id) ON DELETE SET NULL,
  response_time INTEGER, -- en milisegundos
  was_helpful BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de estadísticas diarias (para cálculos rápidos)
CREATE TABLE IF NOT EXISTS daily_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL UNIQUE,
  total_users INTEGER DEFAULT 0,
  new_users INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  total_sessions INTEGER DEFAULT 0,
  avg_session_duration FLOAT DEFAULT 0,
  total_page_views INTEGER DEFAULT 0,
  total_document_analyses INTEGER DEFAULT 0,
  total_lawyer_queries INTEGER DEFAULT 0,
  bounce_rate FLOAT DEFAULT 0,
  page_views JSONB DEFAULT '{}'::jsonb -- Conteo por página
);

-- Tabla de configuración de alertas
CREATE TABLE IF NOT EXISTS alert_configs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  alert_type TEXT NOT NULL, -- traffic_spike, activity_drop, error_rate
  threshold FLOAT NOT NULL, -- Umbral para disparar la alerta
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de historial de alertas
CREATE TABLE IF NOT EXISTS alert_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alert_config_id UUID REFERENCES alert_configs(id) ON DELETE CASCADE,
  value FLOAT NOT NULL, -- Valor que disparó la alerta
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_resolved BOOLEAN DEFAULT FALSE,
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Tabla de consentimiento de cookies
CREATE TABLE IF NOT EXISTS cookie_consents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  anonymous_id TEXT, -- Para usuarios no autenticados
  necessary BOOLEAN DEFAULT TRUE,
  preferences BOOLEAN DEFAULT FALSE,
  statistics BOOLEAN DEFAULT FALSE,
  marketing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT
);

-- Índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_session_id ON user_events(session_id);
CREATE INDEX IF NOT EXISTS idx_user_events_event_type ON user_events(event_type);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at);

CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);

CREATE INDEX IF NOT EXISTS idx_document_analyses_user_id ON document_analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_document_analyses_created_at ON document_analyses(created_at);

CREATE INDEX IF NOT EXISTS idx_lawyer_queries_user_id ON lawyer_queries(user_id);
CREATE INDEX IF NOT EXISTS idx_lawyer_queries_created_at ON lawyer_queries(created_at);

-- Función para calcular estadísticas diarias
CREATE OR REPLACE FUNCTION calculate_daily_stats(target_date DATE)
RETURNS VOID AS $$
DECLARE
  total_users_count INTEGER;
  new_users_count INTEGER;
  active_users_count INTEGER;
  sessions_count INTEGER;
  avg_duration FLOAT;
  page_views_count INTEGER;
  doc_analyses_count INTEGER;
  lawyer_queries_count INTEGER;
  bounce_count INTEGER;
  total_sessions_with_views INTEGER;
  page_views_json JSONB;
BEGIN
  -- Contar usuarios totales hasta la fecha
  SELECT COUNT(*) INTO total_users_count FROM auth.users 
  WHERE created_at <= (target_date + INTERVAL '1 day');
  
  -- Contar nuevos usuarios del día
  SELECT COUNT(*) INTO new_users_count FROM auth.users 
  WHERE created_at::DATE = target_date;
  
  -- Contar usuarios activos del día
  SELECT COUNT(DISTINCT user_id) INTO active_users_count FROM user_events 
  WHERE created_at::DATE = target_date AND user_id IS NOT NULL;
  
  -- Contar sesiones del día
  SELECT COUNT(*) INTO sessions_count FROM user_sessions 
  WHERE started_at::DATE = target_date;
  
  -- Calcular duración promedio de sesión
  SELECT COALESCE(AVG(duration_seconds), 0) INTO avg_duration FROM user_sessions 
  WHERE started_at::DATE = target_date AND duration_seconds IS NOT NULL;
  
  -- Contar vistas de página
  SELECT COUNT(*) INTO page_views_count FROM page_views 
  WHERE created_at::DATE = target_date;
  
  -- Contar análisis de documentos
  SELECT COUNT(*) INTO doc_analyses_count FROM document_analyses 
  WHERE created_at::DATE = target_date;
  
  -- Contar consultas a abogados
  SELECT COUNT(*) INTO lawyer_queries_count FROM lawyer_queries 
  WHERE created_at::DATE = target_date;
  
  -- Calcular tasa de rebote (sesiones con una sola página vista)
  SELECT COUNT(*) INTO bounce_count FROM user_sessions s
  WHERE s.started_at::DATE = target_date
  AND (SELECT COUNT(*) FROM page_views p WHERE p.session_id = s.id) = 1;
  
  SELECT COUNT(*) INTO total_sessions_with_views FROM user_sessions s
  WHERE s.started_at::DATE = target_date
  AND EXISTS (SELECT 1 FROM page_views p WHERE p.session_id = s.id);
  
  -- Calcular vistas por página
  SELECT jsonb_object_agg(page_path, count) INTO page_views_json
  FROM (
    SELECT page_path, COUNT(*) as count
    FROM page_views
    WHERE created_at::DATE = target_date
    GROUP BY page_path
    ORDER BY COUNT(*) DESC
    LIMIT 100
  ) as page_counts;
  
  -- Insertar o actualizar estadísticas diarias
  INSERT INTO daily_stats (
    date, total_users, new_users, active_users, total_sessions, 
    avg_session_duration, total_page_views, total_document_analyses, 
    total_lawyer_queries, bounce_rate, page_views
  ) VALUES (
    target_date, total_users_count, new_users_count, active_users_count, 
    sessions_count, avg_duration, page_views_count, doc_analyses_count, 
    lawyer_queries_count, 
    CASE WHEN total_sessions_with_views > 0 THEN bounce_count::FLOAT / total_sessions_with_views ELSE 0 END,
    COALESCE(page_views_json, '{}'::jsonb)
  )
  ON CONFLICT (date) DO UPDATE SET
    total_users = EXCLUDED.total_users,
    new_users = EXCLUDED.new_users,
    active_users = EXCLUDED.active_users,
    total_sessions = EXCLUDED.total_sessions,
    avg_session_duration = EXCLUDED.avg_session_duration,
    total_page_views = EXCLUDED.total_page_views,
    total_document_analyses = EXCLUDED.total_document_analyses,
    total_lawyer_queries = EXCLUDED.total_lawyer_queries,
    bounce_rate = EXCLUDED.bounce_rate,
    page_views = EXCLUDED.page_views;
END;
$$ LANGUAGE plpgsql;

-- Función para obtener tiempo total de sesión por usuario
CREATE OR REPLACE FUNCTION get_total_session_time(user_id_param UUID)
RETURNS INTEGER AS $$
DECLARE
  total_time INTEGER;
BEGIN
  SELECT COALESCE(SUM(duration_seconds), 0) INTO total_time
  FROM user_sessions
  WHERE user_id = user_id_param AND duration_seconds IS NOT NULL;
  
  RETURN total_time;
END;
$$ LANGUAGE plpgsql;

-- Función para obtener páginas más visitadas
CREATE OR REPLACE FUNCTION get_most_visited_pages(limit_param INTEGER)
RETURNS TABLE(path TEXT, views BIGINT, percentage NUMERIC) AS $$
DECLARE
  total_views BIGINT;
BEGIN
  -- Obtener total de vistas
  SELECT COUNT(*) INTO total_views FROM page_views;
  
  -- Retornar páginas más visitadas con porcentaje
  RETURN QUERY
  SELECT 
    page_path as path,
    COUNT(*) as views,
    CASE WHEN total_views > 0 THEN 
      ROUND((COUNT(*)::NUMERIC / total_views) * 100, 1)
    ELSE 0 END as percentage
  FROM page_views
  GROUP BY page_path
  ORDER BY COUNT(*) DESC
  LIMIT limit_param;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar estadísticas diarias automáticamente
CREATE OR REPLACE FUNCTION update_daily_stats()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM calculate_daily_stats(NEW.created_at::DATE);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear triggers para actualizar estadísticas cuando se insertan nuevos registros
CREATE TRIGGER trigger_user_events_stats
AFTER INSERT ON user_events
FOR EACH ROW
EXECUTE FUNCTION update_daily_stats();

CREATE TRIGGER trigger_page_views_stats
AFTER INSERT ON page_views
FOR EACH ROW
EXECUTE FUNCTION update_daily_stats();

CREATE TRIGGER trigger_document_analyses_stats
AFTER INSERT ON document_analyses
FOR EACH ROW
EXECUTE FUNCTION update_daily_stats();

CREATE TRIGGER trigger_lawyer_queries_stats
AFTER INSERT ON lawyer_queries
FOR EACH ROW
EXECUTE FUNCTION update_daily_stats();

-- Políticas de seguridad RLS (Row Level Security)
-- Habilitar RLS en todas las tablas
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lawyer_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE alert_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE alert_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE cookie_consents ENABLE ROW LEVEL SECURITY;

-- Política para administradores (acceso completo)
CREATE POLICY admin_all_access ON user_profiles 
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM auth.users 
      WHERE email IN (SELECT UNNEST(string_to_array(current_setting('app.admin_emails', true), ',')) as email)
    )
  );

-- Repetir para todas las tablas
CREATE POLICY admin_all_access ON user_sessions FOR ALL USING (
  auth.uid() IN (
    SELECT id FROM auth.users 
    WHERE email IN (SELECT UNNEST(string_to_array(current_setting('app.admin_emails', true), ',')) as email)
  )
);

-- Y así sucesivamente para las demás tablas...

-- Política para usuarios (solo ver sus propios datos)
CREATE POLICY user_own_data ON user_profiles 
  FOR ALL USING (auth.uid() = id);

CREATE POLICY user_own_sessions ON user_sessions 
  FOR ALL USING (auth.uid() = user_id);

-- Y así sucesivamente para las demás tablas...

-- Función para establecer los correos de administradores
CREATE OR REPLACE FUNCTION set_admin_emails(admin_emails TEXT)
RETURNS VOID AS $$
BEGIN
  PERFORM set_config('app.admin_emails', admin_emails, false);
END;
$$ LANGUAGE plpgsql;
