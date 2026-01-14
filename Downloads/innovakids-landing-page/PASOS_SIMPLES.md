# Cómo Configurar la Descarga del PDF

## Opción 1: Crear la tabla manualmente (Recomendado)

1. Ve a tu dashboard de Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto
3. Ve a "SQL Editor" en el menú lateral
4. Copia y pega este código:

```sql
CREATE TABLE IF NOT EXISTS kit_storage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  blob_url TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_kit_storage_active ON kit_storage(is_active);
```

5. Haz clic en "Run" para ejecutar
6. Listo, la tabla está creada

## Opción 2: Subir directamente (más simple)

1. Ve a `/admin/upload-kit` en tu navegador
2. Selecciona tu PDF
3. Haz clic en "SUBIR PDF"
4. El sistema intentará crear la tabla automáticamente

## Probar la descarga

1. Ve a tu landing page
2. Completa el formulario con tu email
3. El PDF debería descargarse automáticamente

## Solución de problemas

Si ves el mensaje "El Kit aún no está disponible":
- Asegúrate de haber creado la tabla en Supabase (Opción 1)
- Verifica que el PDF se haya subido correctamente
- Revisa que el archivo aparezca en Vercel Blob Storage
