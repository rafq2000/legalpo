# Instrucciones de Configuración - Innovakids Landing Page

## 1. Ejecutar Scripts SQL (IMPORTANTE - HACER PRIMERO)

Antes de que funcione la descarga del Kit y los pagos, debes ejecutar estos scripts en orden:

### Paso 1: Crear tabla de leads
1. Ve a la pestaña **Scripts** en v0
2. Ejecuta el script: `create-leads-table.sql`
3. Esto creará la tabla para guardar los emails de los padres

### Paso 2: Crear tabla de almacenamiento del Kit
1. Ejecuta el script: `create-kit-storage-table.sql`
2. Esto creará la tabla para guardar la URL del PDF

### Paso 3: Crear tabla de pagos
1. Ejecuta el script: `create-payments-table.sql`
2. Esto creará la tabla para guardar las transacciones de Mercado Pago

## 2. Subir el PDF del Kit del Padre Moderno

1. Ve a la URL: `/admin/upload-kit` en tu navegador
2. Selecciona tu archivo PDF
3. Haz clic en "Subir Kit"
4. El sistema automáticamente:
   - Subirá el PDF a Vercel Blob
   - Guardará la URL en Supabase
   - Activará la descarga automática

## 3. Configurar Mercado Pago

### Obtener tus credenciales:
1. Ve a: https://www.mercadopago.cl/developers/panel
2. Inicia sesión con tu cuenta de Mercado Pago
3. Ve a "Tus integraciones" → "Credenciales"
4. Copia tu **Access Token** (usa el de prueba primero)

### Agregar variables de entorno en Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega estas variables:
   - `MERCADOPAGO_ACCESS_TOKEN` = tu Access Token
   - `NEXT_PUBLIC_APP_URL` = la URL de tu app (ej: https://innovakids.vercel.app)

### Configurar Webhook (después de desplegar):
1. En el panel de Mercado Pago, ve a "Webhooks"
2. Agrega esta URL: `https://tu-dominio.vercel.app/api/webhooks/mercadopago`
3. Selecciona el evento: "Pagos"
4. Guarda

## 4. Probar el Sistema

### Probar descarga del Kit:
1. Ve a tu landing page
2. Completa el formulario del Kit
3. Deberías recibir el PDF automáticamente

### Probar pagos:
1. Haz clic en "Inscribir Ahora"
2. Completa el formulario de pago
3. Usa una tarjeta de prueba de Mercado Pago:
   - Tarjeta: 5031 7557 3453 0604
   - Vencimiento: 11/25
   - CVV: 123
   - Nombre: APRO (para aprobar)

## 5. Ir a Producción

Cuando todo funcione en pruebas:
1. Cambia el Access Token de prueba por el de producción
2. Actualiza la variable de entorno en Vercel
3. Actualiza la URL del webhook en Mercado Pago

## Soporte

Si tienes problemas:
1. Revisa los logs en Vercel
2. Verifica que todas las variables de entorno estén configuradas
3. Asegúrate de haber ejecutado todos los scripts SQL
