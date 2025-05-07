-- Vista para fuentes de tráfico
CREATE OR REPLACE VIEW vw_traffic_sources AS
SELECT
  COALESCE(source, 'Directo') AS source,
  COUNT(*) AS count
FROM
  user_sessions
WHERE
  started_at >= NOW() - INTERVAL '90 days'
GROUP BY
  source
ORDER BY
  count DESC;

-- Vista para páginas más visitadas
CREATE OR REPLACE VIEW vw_pages AS
SELECT
  page_path AS path,
  COUNT(*) AS views
FROM
  page_views
WHERE
  created_at >= NOW() - INTERVAL '90 days'
GROUP BY
  page_path
ORDER BY
  views DESC;

-- Vista para análisis de documentos por día
CREATE OR REPLACE VIEW vw_document_analyses AS
SELECT
  DATE(created_at) AS date,
  COUNT(*) AS count
FROM
  document_analyses
WHERE
  created_at >= NOW() - INTERVAL '90 days'
GROUP BY
  DATE(created_at)
ORDER BY
  date;

-- Vista para consultas a abogados por día
CREATE OR REPLACE VIEW vw_lawyer_queries AS
SELECT
  DATE(created_at) AS date,
  COUNT(*) AS count
FROM
  lawyer_queries
WHERE
  created_at >= NOW() - INTERVAL '90 days'
GROUP BY
  DATE(created_at)
ORDER BY
  date;

-- Vista para estadísticas diarias mejorada
CREATE OR REPLACE VIEW vw_daily_stats AS
WITH dates AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '90 days',
    CURRENT_DATE,
    '1 day'::interval
  )::date AS date
),
sessions AS (
  SELECT
    DATE(started_at) AS date,
    COUNT(*) AS session_count,
    COUNT(DISTINCT user_id) FILTER (WHERE user_id IS NOT NULL) AS active_users,
    AVG(duration_seconds) AS avg_duration
  FROM
    user_sessions
  WHERE
    started_at >= NOW() - INTERVAL '90 days'
  GROUP BY
    DATE(started_at)
),
new_users AS (
  SELECT
    DATE(created_at) AS date,
    COUNT(*) AS count
  FROM
    auth.users
  WHERE
    created_at >= NOW() - INTERVAL '90 days'
  GROUP BY
    DATE(created_at)
)
SELECT
  d.date,
  COALESCE(s.active_users, 0) AS active_users,
  COALESCE(n.count, 0) AS new_users,
  COALESCE(s.session_count, 0) AS total_sessions,
  COALESCE(s.avg_duration, 0) AS avg_session_duration,
  -- Usar LEFT JOIN para page_views en lugar de 0
  COALESCE(p.views, 0) AS total_page_views,
  -- Usar LEFT JOIN para document_analyses en lugar de 0
  COALESCE(da.count, 0) AS total_document_analyses,
  -- Usar LEFT JOIN para lawyer_queries en lugar de 0
  COALESCE(lq.count, 0) AS total_lawyer_queries,
  -- Calcular bounce_rate basado en sesiones de una sola página
  CASE
    WHEN COALESCE(s.session_count, 0) > 0 THEN
      (SELECT COUNT(*) FROM user_sessions us
       LEFT JOIN page_views pv ON us.id = pv.session_id
       WHERE DATE(us.started_at) = d.date
       GROUP BY us.id
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
  vw_pages p ON d.date = p.date
LEFT JOIN
  vw_document_analyses da ON d.date = da.date
LEFT JOIN
  vw_lawyer_queries lq ON d.date = lq.date
ORDER BY
  d.date DESC;
