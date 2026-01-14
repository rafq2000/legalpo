# Configuración de Mercado Pago para Innovakids

## Paso 1: Crear cuenta en Mercado Pago

1. Ve a [https://www.mercadopago.cl/developers](https://www.mercadopago.cl/developers)
2. Crea una cuenta o inicia sesión
3. Acepta los términos como vendedor

## Paso 2: Obtener credenciales

1. En el panel de desarrolladores, ve a **"Tus integraciones"**
2. Crea una nueva aplicación llamada "Innovakids"
3. Copia tus credenciales:
   - **Access Token de Prueba** (para testing)
   - **Access Token de Producción** (para pagos reales)

## Paso 3: Configurar variables de entorno

En tu proyecto de Vercel, agrega estas variables de entorno:

```
MERCADOPAGO_ACCESS_TOKEN=tu_access_token_aqui
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

**Importante:** 
- Usa el Access Token de **Prueba** primero para hacer tests
- Cuando todo funcione, cámbialo por el de **Producción**

## Paso 4: Configurar Webhooks

1. En Mercado Pago, ve a **"Webhooks"**
2. Agrega esta URL: `https://tu-dominio.vercel.app/api/webhooks/mercadopago`
3. Selecciona el evento: **"Pagos"**
4. Guarda la configuración

## Paso 5: Ejecutar script SQL

1. En v0, ve a la pestaña **Scripts**
2. Ejecuta `create-payments-table.sql`
3. Esto creará la tabla para almacenar los pagos

## Paso 6: Probar el sistema

1. Ve a `/pagar` en tu sitio
2. Completa el formulario
3. Usa estas tarjetas de prueba:

**Tarjeta aprobada:**
- Número: 5031 7557 3453 0604
- CVV: 123
- Fecha: 11/25

**Tarjeta rechazada:**
- Número: 5031 4332 1540 6351
- CVV: 123
- Fecha: 11/25

## Países soportados

Mercado Pago acepta pagos de:
- 🇨🇱 Chile
- 🇦🇷 Argentina
- 🇧🇷 Brasil
- 🇲🇽 México
- 🇵🇪 Perú
- 🇨🇴 Colombia
- 🇺🇾 Uruguay

## Comisiones

- Chile: 3.99% + IVA por transacción
- Argentina: 4.99% + IVA por transacción
- Otros países: Consultar en Mercado Pago

## Soporte

Si tienes problemas:
1. Revisa la consola de Mercado Pago
2. Verifica que las credenciales sean correctas
3. Asegúrate de que los webhooks estén configurados
4. Contacta soporte de Mercado Pago: [https://www.mercadopago.cl/ayuda](https://www.mercadopago.cl/ayuda)
