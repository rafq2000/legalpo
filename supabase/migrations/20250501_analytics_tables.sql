-- Tabla de usuarios (complementa la tabla auth.users de Supabase)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB
);

-- Tabla de sesiones
CREATE TABLE IF NOT EXISTS public.sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  source TEXT,
  user_agent TEXT,
  ip_address TEXT
);

-- Tabla de vistas de página
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES public.sessions(id),
  user_id UUID REFERENCES auth.users(id),
  path TEXT NOT NULL,
  title TEXT,
  referrer TEXT,
  time_on_page INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Tabla de consultas a abogados
CREATE TABLE IF NOT EXISTS public.lawyer_queries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  query TEXT NOT NULL,
  response TEXT,
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Tabla de análisis de documentos
CREATE TABLE IF NOT EXISTS public.document_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  document_name TEXT,
  document_type TEXT,
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Tabla de actividades generales
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  type TEXT NOT NULL,
  description TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Tabla para datos de Google Analytics
CREATE TABLE IF NOT EXISTS public.analytics (
  id SERIAL PRIMARY KEY,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  users INTEGER NOT NULL DEFAULT 0,
  views INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vista para estadísticas diarias
CREATE OR REPLACE VIEW public.daily_stats AS
WITH dates AS (
  SELECT generate_series(
    (CURRENT_DATE - INTERVAL '30 days')::date,
    CURRENT_DATE::date,
    '1 day'::interval
  )::date AS date
),
session_counts AS (
  SELECT 
    DATE(started_at) AS date,
    COUNT(DISTINCT id) AS total_sessions,
    COUNT(DISTINCT user_id) AS active_users,
    AVG(duration_seconds) AS avg_session_duration
  FROM sessions
  WHERE started_at >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY DATE(started_at)
),
new_users AS (
  SELECT 
    DATE(created_at) AS date,
    COUNT(*) AS new_users
  FROM users
  WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY DATE(created_at)
),
page_view_stats AS (
  SELECT 
    DATE(created_at) AS date,
    COUNT(*) AS total_page_views
  FROM page_views
  WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY DATE(created_at)
)
SELECT 
  d.date,
  COALESCE(s.active_users, 0) AS active_users,
  COALESCE(n.new_users, 0) AS new_users,
  COALESCE(s.total_sessions, 0) AS total_sessions,
  COALESCE(s.avg_session_duration, 0) AS avg_session_duration,
  COALESCE(p.total_page_views, 0) AS total_page_views,
  0.0 AS bounce_rate
FROM dates d
LEFT JOIN session_counts s ON d.date = s.date
LEFT JOIN new_users n ON d.date = n.date
LEFT JOIN page_view_stats p ON d.date = p.date
ORDER BY d.date;

-- Vista para estadísticas semanales
CREATE OR REPLACE VIEW public.weekly_stats AS
SELECT 
  date_trunc('week', s.started_at) AS week_start,
  COUNT(DISTINCT s.id) AS total_sessions,
  COUNT(DISTINCT s.user_id) AS active_users,
  AVG(s.duration_seconds) AS avg_session_duration,
  COUNT(DISTINCT u.id) AS new_users,
  COUNT(p.id) AS total_page_views
FROM sessions s
LEFT JOIN users u ON date_trunc('week', u.created_at) = date_trunc('week', s.started_at)
LEFT JOIN page_views p ON date_trunc('week', p.created_at) = date_trunc('week', s.started_at)
WHERE s.started_at >= CURRENT_DATE - INTERVAL '12 weeks'
GROUP BY date_trunc('week', s.started_at)
ORDER BY week_start;

-- Vista para estadísticas mensuales
CREATE OR REPLACE VIEW public.monthly_stats AS
SELECT 
  date_trunc('month', s.started_at) AS month_start,
  COUNT(DISTINCT s.id) AS total_sessions,
  COUNT(DISTINCT s.user_id) AS active_users,
  AVG(s.duration_seconds) AS avg_session_duration,
  COUNT(DISTINCT u.id) AS new_users,
  COUNT(p.id) AS total_page_views
FROM sessions s
LEFT JOIN users u ON date_trunc('month', u.created_at) = date_trunc('month', s.started_at)
LEFT JOIN page_views p ON date_trunc('month', p.created_at) = date_trunc('month', s.started_at)
WHERE s.started_at >= CURRENT_DATE - INTERVAL '12 months'
GROUP BY date_trunc('month', s.started_at)
ORDER BY month_start;
