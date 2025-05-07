-- Función para calcular la duración promedio de sesión
CREATE OR REPLACE FUNCTION get_average_session_duration(start_date timestamp, end_date timestamp)
RETURNS float
LANGUAGE plpgsql
AS $$
DECLARE
  avg_duration float;
BEGIN
  SELECT AVG(duration_seconds)
  INTO avg_duration
  FROM sessions
  WHERE started_at >= start_date
  AND started_at <= end_date
  AND duration_seconds IS NOT NULL;
  
  RETURN avg_duration;
END;
$$;

-- Función para obtener el tiempo total de sesión por usuario
CREATE OR REPLACE FUNCTION get_total_session_time(user_id_param uuid)
RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
  total_time integer;
BEGIN
  SELECT COALESCE(SUM(duration_seconds), 0)
  INTO total_time
  FROM sessions
  WHERE user_id = user_id_param
  AND duration_seconds IS NOT NULL;
  
  RETURN total_time;
END;
$$;
