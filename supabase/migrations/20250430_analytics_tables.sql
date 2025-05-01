-- Tablas necesarias para el sistema de analítica completo

-- Tabla para sesiones de usuario
CREATE TABLE IF NOT EXISTS user_sessions (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  anonymous_id TEXT,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  user_agent TEXT,
  ip_address TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  country TEXT,
  region TEXT
);

-- Tabla para eventos de usuario
CREATE TABLE IF NOT EXISTS user_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  anonymous_id TEXT,
  session_id TEXT REFERENCES user_sessions(id),
  event_type TEXT NOT NULL,
  page_path TEXT,
  component_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  client_timestamp BIGINT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para vistas de página
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  anonymous_id TEXT,
  session_id TEXT REFERENCES user_sessions(id),
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  time_on_page INTEGER,
  exit_at TIMESTAMP WITH TIME ZONE,
  is_bounce BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para análisis de documentos
CREATE TABLE IF NOT EXISTS document_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT REFERENCES user_sessions(id),
  document_type TEXT NOT NULL,
  document_name TEXT NOT NULL,
  document_size INTEGER NOT NULL,
  processing_time INTEGER NOT NULL,
  success BOOLEAN NOT NULL,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para consultas a abogados
CREATE TABLE IF NOT EXISTS lawyer_queries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT REFERENCES user_sessions(id),
  query_text TEXT NOT NULL,
  document_id UUID REFERENCES document_analyses(id),
  response_time INTEGER,
  was_helpful BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para estadísticas diarias
CREATE TABLE IF NOT EXISTS daily_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL UNIQUE,
  total_users INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  new_users INTEGER DEFAULT 0,
  total_sessions INTEGER DEFAULT 0,
  avg_session_duration FLOAT DEFAULT 0,
  total_page_views INTEGER DEFAULT 0,
  total_document_analyses INTEGER DEFAULT 0,
  total_lawyer_queries INTEGER DEFAULT 0,
  bounce_rate FLOAT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Función para calcular tiempo total de sesión
CREATE OR REPLACE FUNCTION get_total_session_time(user_id_param UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN COALESCE(
    (SELECT SUM(duration_seconds)
     FROM user_sessions
     WHERE user_id = user_id_param),
    0
  );
END;
$$ LANGUAGE plpgsql;

-- Función para obtener páginas más visitadas
CREATE OR REPLACE FUNCTION get_most_visited_pages(limit_param INTEGER)
RETURNS TABLE (
  path TEXT,
  views BIGINT,
  percentage FLOAT
) AS $$
DECLARE
  total_views BIGINT;
BEGIN
  -- Obtener total de vistas
  SELECT COUNT(*) INTO total_views FROM page_views;
  
  -- Retornar páginas más visitadas con porcentaje
  RETURN QUERY
  SELECT 
    page_path,
    COUNT(*) as views,
    CASE 
      WHEN total_views > 0 THEN (COUNT(*) * 100.0 / total_views)
      ELSE 0
    END as percentage
  FROM page_views
  GROUP BY page_path
  ORDER BY views DESC
  LIMIT limit_param;
END;
$$ LANGUAGE plpgsql;

-- Función para actualizar estadísticas diarias
CREATE OR REPLACE FUNCTION update_daily_stats()
RETURNS TRIGGER AS $$
DECLARE
  today_date DATE := CURRENT_DATE;
  total_users_count INTEGER;
  active_users_count INTEGER;
  new_users_count INTEGER;
  sessions_count INTEGER;
  avg_duration FLOAT;
  page_views_count INTEGER;
  doc_analyses_count INTEGER;
  lawyer_queries_count INTEGER;
  bounce_rate_value FLOAT;
BEGIN
  -- Contar usuarios totales
  SELECT COUNT(DISTINCT id) INTO total_users_count FROM auth.users;
  
  -- Contar usuarios activos hoy
  SELECT COUNT(DISTINCT user_id) INTO active_users_count 
  FROM user_events 
  WHERE DATE(created_at) = today_date AND user_id IS NOT NULL;
  
  -- Contar nuevos usuarios hoy
  SELECT COUNT(*) INTO new_users_count 
  FROM auth.users 
  WHERE DATE(created_at) = today_date;
  
  -- Contar sesiones de hoy
  SELECT COUNT(*) INTO sessions_count 
  FROM user_sessions 
  WHERE DATE(started_at) = today_date;
  
  -- Calcular duración promedio de sesiones
  SELECT COALESCE(AVG(duration_seconds), 0) INTO avg_duration 
  FROM user_sessions 
  WHERE DATE(started_at) = today_date AND duration_seconds IS NOT NULL;
  
  -- Contar vistas de página
  SELECT COUNT(*) INTO page_views_count 
  FROM page_views 
  WHERE DATE(created_at) = today_date;
  
  -- Contar análisis de documentos
  SELECT COUNT(*) INTO doc_analyses_count 
  FROM document_analyses 
  WHERE DATE(created_at) = today_date;
  
  -- Contar consultas a abogados
  SELECT COUNT(*) INTO lawyer_queries_count 
  FROM lawyer_queries 
  WHERE DATE(created_at) = today_date;
  
  -- Calcular tasa de rebote (sesiones con una sola página vista)
  SELECT COALESCE(
    (SELECT COUNT(*) FROM (
      SELECT session_id
      FROM page_views
      WHERE DATE(created_at) = today_date
      GROUP BY session_id
      HAVING COUNT(*) = 1
    ) AS single_page_sessions) * 100.0 / 
    NULLIF(sessions_count, 0),
    0
  ) INTO bounce_rate_value;
  
  -- Insertar o actualizar estadísticas diarias
  INSERT INTO daily_stats (
    date, 
    total_users, 
    active_users, 
    new_users, 
    total_sessions, 
    avg_session_duration, 
    total_page_views, 
    total_document_analyses, 
    total_lawyer_queries, 
    bounce_rate
  ) VALUES (
    today_date,
    total_users_count,
    active_users_count,
    new_users_count,
    sessions_count,
    avg_duration,
    page_views_count,
    doc_analyses_count,
    lawyer_queries_count,
    bounce_rate_value
  )
  ON CONFLICT (date) DO UPDATE SET
    total_users = EXCLUDED.total_users,
    active_users = EXCLUDED.active_users,
    new_users = EXCLUDED.new_users,
    total_sessions = EXCLUDED.total_sessions,
    avg_session_duration = EXCLUDED.avg_session_duration,
    total_page_views = EXCLUDED.total_page_views,
    total_document_analyses = EXCLUDED.total_document_analyses,
    total_lawyer_queries = EXCLUDED.total_lawyer_queries,
    bounce_rate = EXCLUDED.bounce_rate;
    
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar estadísticas diarias
CREATE OR REPLACE TRIGGER update_daily_stats_trigger
AFTER INSERT OR UPDATE ON user_events
FOR EACH STATEMENT
EXECUTE FUNCTION update_daily_stats();

-- Trigger para actualizar estadísticas diarias cuando se registra un análisis de documento
CREATE OR REPLACE TRIGGER update_stats_on_document_analysis
AFTER INSERT ON document_analyses
FOR EACH STATEMENT
EXECUTE FUNCTION update_daily_stats();

-- Trigger para actualizar estadísticas diarias cuando se registra una consulta a abogado
CREATE OR REPLACE TRIGGER update_stats_on_lawyer_query
AFTER INSERT ON lawyer_queries
FOR EACH STATEMENT
EXECUTE FUNCTION update_daily_stats();
