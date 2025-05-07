-- Tabla para perfiles de usuario
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  provider TEXT NOT NULL,
  provider_id TEXT,
  role TEXT DEFAULT 'user',
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'direct'
);

-- Índice para búsquedas por email
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);

-- Índice para búsquedas por provider y provider_id
CREATE INDEX IF NOT EXISTS idx_user_profiles_provider ON user_profiles(provider, provider_id);

-- Función para actualizar last_active
CREATE OR REPLACE FUNCTION update_last_active()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_active = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar last_active en cada actualización
CREATE TRIGGER update_last_active_trigger
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_last_active();
