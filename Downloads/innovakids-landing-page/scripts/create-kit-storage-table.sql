-- Create table to store the Kit PDF URL from Vercel Blob
CREATE TABLE IF NOT EXISTS kit_storage (
  id SERIAL PRIMARY KEY,
  file_name TEXT NOT NULL,
  blob_url TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_kit_storage_active ON kit_storage(is_active);

-- Insert a placeholder row (will be updated when you upload the real PDF)
INSERT INTO kit_storage (file_name, blob_url, is_active) 
VALUES ('kit-padre-moderno.pdf', '', true)
ON CONFLICT DO NOTHING;
