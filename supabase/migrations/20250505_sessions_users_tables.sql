-- Crear tabla de usuarios si no existe
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

-- Crear tabla de sesiones si no existe
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ip_address TEXT,
  user_agent TEXT,
  path TEXT,
  referrer TEXT,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  is_active BOOLEAN DEFAULT TRUE
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_started_at ON sessions(started_at);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_last_active ON users(last_active);

-- Crear vista para análisis de usuarios
CREATE OR REPLACE VIEW user_analytics AS
SELECT
  u.id,
  u.email,
  u.name,
  u.created_at,
  u.last_active,
  COUNT(s.id) AS session_count,
  MAX(s.started_at) AS last_session,
  SUM(s.duration_seconds) AS total_time_seconds
FROM
  users u
LEFT JOIN
  sessions s ON u.id = s.user_id
GROUP BY
  u.id, u.email, u.name, u.created_at, u.last_active;

-- Crear vista para resumen de tráfico
CREATE OR REPLACE VIEW traffic_overview AS
SELECT
  DATE_TRUNC('day', started_at) AS date,
  COUNT(DISTINCT ip_address) AS unique_visitors,
  COUNT(*) AS total_sessions,
  AVG(duration_seconds) AS avg_duration_seconds,
  COUNT(DISTINCT user_id) AS logged_in_users,
  COUNT(DISTINCT CASE WHEN user_id IS NULL THEN ip_address END) AS anonymous_users
FROM
  sessions
GROUP BY
  DATE_TRUNC('day', started_at)
ORDER BY
  date DESC;
