-- Función para crear la tabla de sesiones si no existe
CREATE OR REPLACE FUNCTION create_sessions_table_if_not_exists()
RETURNS void AS $$
BEGIN
  -- Verificar si la tabla existe
  IF NOT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'sessions'
  ) THEN
    -- Crear la tabla de sesiones
    CREATE TABLE public.sessions (
      id UUID PRIMARY KEY,
      user_id UUID NOT NULL,
      is_authenticated BOOLEAN DEFAULT false,
      user_agent TEXT,
      ip_address TEXT,
      started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      ended_at TIMESTAMP WITH TIME ZONE,
      duration_seconds INTEGER,
      is_active BOOLEAN DEFAULT true,
      referrer TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Crear índices
    CREATE INDEX idx_sessions_user_id ON public.sessions(user_id);
    CREATE INDEX idx_sessions_started_at ON public.sessions(started_at);
    CREATE INDEX idx_sessions_is_active ON public.sessions(is_active);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para crear la tabla de vistas de página si no existe
CREATE OR REPLACE FUNCTION create_page_views_table_if_not_exists()
RETURNS void AS $$
BEGIN
  -- Verificar si la tabla existe
  IF NOT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'page_views'
  ) THEN
    -- Crear la tabla de vistas de página
    CREATE TABLE public.page_views (
      id UUID PRIMARY KEY,
      session_id UUID NOT NULL REFERENCES public.sessions(id),
      user_id UUID NOT NULL,
      page_path TEXT NOT NULL,
      query_params JSONB,
      started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      ended_at TIMESTAMP WITH TIME ZONE,
      duration_seconds INTEGER,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Crear índices
    CREATE INDEX idx_page_views_session_id ON public.page_views(session_id);
    CREATE INDEX idx_page_views_user_id ON public.page_views(user_id);
    CREATE INDEX idx_page_views_page_path ON public.page_views(page_path);
    CREATE INDEX idx_page_views_started_at ON public.page_views(started_at);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para crear la tabla de mensajes de chat si no existe
CREATE OR REPLACE FUNCTION create_chat_messages_table_if_not_exists()
RETURNS void AS $$
BEGIN
  -- Verificar si la tabla existe
  IF NOT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'chat_messages'
  ) THEN
    -- Crear la tabla de mensajes de chat
    CREATE TABLE public.chat_messages (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      session_id UUID NOT NULL,
      user_id UUID NOT NULL,
      message TEXT NOT NULL,
      is_user_message BOOLEAN DEFAULT true,
      document_id UUID,
      metadata JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Crear índices
    CREATE INDEX idx_chat_messages_session_id ON public.chat_messages(session_id);
    CREATE INDEX idx_chat_messages_user_id ON public.chat_messages(user_id);
    CREATE INDEX idx_chat_messages_created_at ON public.chat_messages(created_at);
    CREATE INDEX idx_chat_messages_document_id ON public.chat_messages(document_id);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
