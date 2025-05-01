-- Crear tabla de sesiones si no existe
CREATE TABLE IF NOT EXISTS public.sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  duration_seconds INTEGER,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Crear tabla de vistas de página si no existe
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES public.sessions(id),
  user_id UUID REFERENCES auth.users(id),
  path TEXT NOT NULL,
  title TEXT,
  referrer TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Crear tabla de análisis de documentos si no existe
CREATE TABLE IF NOT EXISTS public.document_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  document_name TEXT,
  document_type TEXT,
  status TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Crear tabla de consultas a abogados si no existe
CREATE TABLE IF NOT EXISTS public.lawyer_queries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  query TEXT,
  status TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Crear tabla de fuentes de tráfico si no existe
CREATE TABLE IF NOT EXISTS public.traffic_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Crear o reemplazar vista de fuentes de tráfico
CREATE OR REPLACE VIEW public.vw_traffic_sources AS
SELECT
  COALESCE(source, 'Directo') AS source,
  COUNT(*) AS count
FROM
  public.sessions
GROUP BY
  source
ORDER BY
  count DESC;

-- Crear o reemplazar vista de páginas más visitadas
CREATE OR REPLACE VIEW public.vw_pages AS
SELECT
  path,
  COUNT(*) AS views
FROM
  public.page_views
GROUP BY
  path
ORDER BY
  views DESC;

-- Crear o reemplazar vista de estadísticas de usuario
CREATE OR REPLACE VIEW public.vw_user_stats AS
SELECT
  u.id,
  u.email,
  u.created_at,
  MAX(s.ended_at) AS last_active,
  MIN(s.source) AS source,
  COUNT(DISTINCT s.id) AS session_count,
  SUM(s.duration_seconds) / 60 AS total_time_minutes,
  COUNT(DISTINCT da.id) AS document_count,
  COUNT(DISTINCT lq.id) AS query_count
FROM
  auth.users u
LEFT JOIN
  public.sessions s ON u.id = s.user_id
LEFT JOIN
  public.document_analyses da ON u.id = da.user_id
LEFT JOIN
  public.lawyer_queries lq ON u.id = lq.user_id
GROUP BY
  u.id, u.email, u.created_at;

-- Crear o reemplazar vista de estadísticas diarias
CREATE OR REPLACE VIEW public.vw_daily_stats AS
WITH dates AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '90 days',
    CURRENT_DATE,
    '1 day'::interval
  )::date AS date
),
sessions AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS session_count,
    COUNT(DISTINCT user_id) FILTER (WHERE user_id IS NOT NULL) AS active_users,
    AVG(duration_seconds) AS avg_duration
  FROM
    public.sessions
  GROUP BY
    DATE(created_at)
),
new_users AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS count
  FROM
    auth.users
  GROUP BY
    DATE(created_at)
),
page_views AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS count
  FROM
    public.page_views
  GROUP BY
    DATE(created_at)
),
doc_analyses AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS count
  FROM
    public.document_analyses
  GROUP BY
    DATE(created_at)
),
lawyer_queries AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS count
  FROM
    public.lawyer_queries
  GROUP BY
    DATE(created_at)
)
SELECT
  d.date,
  COALESCE(s.active_users, 0) AS active_users,
  COALESCE(n.count, 0) AS new_users,
  COALESCE(s.session_count, 0) AS total_sessions,
  COALESCE(s.avg_duration, 0) AS avg_session_duration,
  COALESCE(p.count, 0) AS total_page_views,
  COALESCE(da.count, 0) AS total_document_analyses,
  COALESCE(lq.count, 0) AS total_lawyer_queries,
  CASE
    WHEN COALESCE(s.session_count, 0) > 0 THEN
      (SELECT COUNT(*) FROM public.sessions ss
       LEFT JOIN public.page_views pv ON ss.id = pv.session_id
       WHERE DATE(ss.created_at) = d.date
       GROUP BY ss.id
       HAVING COUNT(pv.id) = 1) * 100.0 / s.session_count
    ELSE 0
  END AS bounce_rate
FROM
  dates d
LEFT JOIN
  sessions s ON d.date = s.date
LEFT JOIN
  new_users n ON d.date = n.date
LEFT JOIN
  page_views p ON d.date = p.date
LEFT JOIN
  doc_analyses da ON d.date = da.date
LEFT JOIN
  lawyer_queries lq ON d.date = lq.date
ORDER BY
  d.date DESC;
