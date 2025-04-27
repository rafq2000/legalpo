-- Crear tabla para caché de respuestas
CREATE TABLE IF NOT EXISTS response_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  query TEXT NOT NULL,
  normalized_query TEXT NOT NULL,
  response TEXT NOT NULL,
  provider VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Índice para búsquedas rápidas
  CONSTRAINT unique_normalized_query UNIQUE (normalized_query)
);

-- Crear índice para búsquedas por fecha
CREATE INDEX IF NOT EXISTS idx_response_cache_created_at ON response_cache (created_at);

-- Comentarios para documentación
COMMENT ON TABLE response_cache IS 'Almacena respuestas de IA para reutilización';
COMMENT ON COLUMN response_cache.query IS 'Consulta original del usuario';
COMMENT ON COLUMN response_cache.normalized_query IS 'Consulta normalizada para búsqueda (minúsculas, sin espacios extra)';
COMMENT ON COLUMN response_cache.response IS 'Respuesta generada por el proveedor de IA';
COMMENT ON COLUMN response_cache.provider IS 'Proveedor que generó la respuesta (vertex_ai, openai, etc.)';
