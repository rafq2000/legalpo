-- Tabla para eventos de usuario
CREATE TABLE IF NOT EXISTS user_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  page_path TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  session_id TEXT
);

-- Tabla para sesiones de usuario
CREATE TABLE IF NOT EXISTS user_sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  is_active BOOLEAN DEFAULT TRUE
);

-- Tabla para estadísticas diarias (agregadas)
CREATE TABLE IF NOT EXISTS daily_stats (
  date DATE PRIMARY KEY,
  total_users INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  new_users INTEGER DEFAULT 0,
  total_sessions INTEGER DEFAULT 0,
  avg_session_duration FLOAT DEFAULT 0,
  page_views JSONB DEFAULT '{}'::jsonb
);

-- Tabla para configuración de alertas
CREATE TABLE IF NOT EXISTS alert_configs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alert_type TEXT NOT NULL,
  threshold FLOAT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  notification_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para registro de alertas disparadas
CREATE TABLE IF NOT EXISTS alert_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alert_config_id UUID REFERENCES alert_configs(id),
  triggered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  value FLOAT,
  message TEXT
);

-- Índices para consultas eficientes
CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_event_type ON user_events(event_type);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_started_at ON user_sessions(started_at);

-- Función para calcular estadísticas diarias
CREATE OR REPLACE FUNCTION calculate_daily_stats(target_date DATE)
RETURNS VOID AS $$
DECLARE
  start_timestamp TIMESTAMP;
  end_timestamp TIMESTAMP;
BEGIN
  start_timestamp := target_date::TIMESTAMP;
  end_timestamp := (target_date + INTERVAL '1 day')::TIMESTAMP;
  
  -- Insertar o actualizar estadísticas diarias
  INSERT INTO daily_stats (
    date,
    total_users,
    active_users,
    new_users,
    total_sessions,
    avg_session_duration
  )
  SELECT
    target_date,
    (SELECT COUNT(DISTINCT user_id) FROM auth.users),
    (SELECT COUNT(DISTINCT user_id) FROM user_events WHERE created_at BETWEEN start_timestamp AND end_timestamp),
    (SELECT COUNT(*) FROM auth.users WHERE created_at BETWEEN start_timestamp AND end_timestamp),
    (SELECT COUNT(*) FROM user_sessions WHERE started_at BETWEEN start_timestamp AND end_timestamp),
    (SELECT COALESCE(AVG(duration_seconds), 0) FROM user_sessions WHERE started_at BETWEEN start_timestamp AND end_timestamp)
  ON CONFLICT (date)
  DO UPDATE SET
    total_users = EXCLUDED.total_users,
    active_users = EXCLUDED.active_users,
    new_users = EXCLUDED.new_users,
    total_sessions = EXCLUDED.total_sessions,
    avg_session_duration = EXCLUDED.avg_session_duration;
END;
$$ LANGUAGE plpgsql;

-- Función para actualizar páginas más visitadas
CREATE OR REPLACE FUNCTION update_page_views(target_date DATE)
RETURNS VOID AS $$
DECLARE
  start_timestamp TIMESTAMP;
  end_timestamp TIMESTAMP;
  page_views_json JSONB;
BEGIN
  start_timestamp := target_date::TIMESTAMP;
  end_timestamp := (target_date + INTERVAL '1 day')::TIMESTAMP;
  
  -- Calcular páginas más visitadas
  SELECT jsonb_object_agg(page_path, count)
  INTO page_views_json
  FROM (
    SELECT page_path, COUNT(*) as count
    FROM user_events
    WHERE 
      created_at BETWEEN start_timestamp AND end_timestamp
      AND page_path IS NOT NULL
    GROUP BY page_path
    ORDER BY count DESC
    LIMIT 20
  ) as top_pages;
  
  -- Actualizar estadísticas diarias
  UPDATE daily_stats
  SET page_views = page_views_json
  WHERE date = target_date;
END;
$$ LANGUAGE plpgsql;

-- Crear políticas de seguridad RLS
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE alert_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE alert_history ENABLE ROW LEVEL SECURITY;

-- Política para administradores
CREATE POLICY admin_policy ON user_events
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admin_users));

CREATE POLICY admin_policy ON user_sessions
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admin_users));

CREATE POLICY admin_policy ON daily_stats
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admin_users));

CREATE POLICY admin_policy ON alert_configs
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admin_users));

CREATE POLICY admin_policy ON alert_history
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Tabla para administradores
CREATE TABLE IF NOT EXISTS admin_users (
  user_id TEXT PRIMARY KEY,
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  added_by TEXT
);
