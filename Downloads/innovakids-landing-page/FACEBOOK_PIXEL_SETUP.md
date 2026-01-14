# Configuración de Facebook Pixel

## Paso 1: Obtener tu Pixel ID

1. Ve a **Facebook Business Manager**: https://business.facebook.com
2. Haz clic en **Configuración de la empresa** (ícono de engranaje)
3. En el menú lateral, selecciona **Orígenes de datos** → **Píxeles**
4. Si no tienes un píxel, haz clic en **Agregar** y sigue los pasos
5. Copia tu **ID de píxel** (es un número de 15-16 dígitos)

## Paso 2: Agregar el Pixel ID como Variable de Entorno

En v0, ve a la sección **Vars** en el sidebar izquierdo y agrega:

```
Variable: NEXT_PUBLIC_FACEBOOK_PIXEL_ID
Valor: TU_PIXEL_ID_AQUI (ejemplo: 1234567890123456)
```

El código ya está configurado para usar esta variable automáticamente. No necesitas editar ningún archivo.

## Paso 3: Verificar que Funciona

1. Instala la extensión **Facebook Pixel Helper** en Chrome
2. Visita tu sitio: https://innovakidslatam.com
3. Haz clic en el ícono de la extensión
4. Deberías ver tu píxel activo con el evento "PageView"

## Eventos que Estamos Rastreando

### 1. PageView (Automático)
Se dispara cada vez que alguien visita cualquier página.

### 2. Purchase (Cuando completan el pago)
Se dispara cuando un usuario completa un pago exitoso con PayPal o Mercado Pago.

**Datos enviados:**
- Valor de la compra (amount)
- Moneda (USD)
- Nombre del producto (Innovakids - reserve/remaining/full)

### 3. Eventos Personalizados Sugeridos

Puedes agregar más eventos para optimizar tus campañas:

#### InitiateCheckout (Cuando llegan a la página de pago)
```typescript
// Agregar en app/pagar/page.tsx
useEffect(() => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: details.price,
      currency: 'USD',
      content_name: details.title,
    })
  }
}, [])
```

#### Lead (Cuando agendan una sesión gratis)
```typescript
// Agregar en components/calendly-section.tsx
window.fbq('track', 'Lead', {
  content_name: 'Free Session Booking',
})
```

#### ViewContent (Cuando ven la sección de precios)
```typescript
// Agregar en components/pricing-section.tsx
window.fbq('track', 'ViewContent', {
  content_name: 'Pricing Section',
})
```

## Paso 4: Crear Audiencias Personalizadas

Una vez que el píxel esté activo por 24-48 horas:

1. Ve a **Administrador de anuncios** → **Audiencias**
2. Crea estas audiencias:

### Audiencia 1: Visitantes del Sitio
- **Nombre:** Visitantes Innovakids (30 días)
- **Fuente:** Tu píxel
- **Evento:** PageView
- **Período:** Últimos 30 días

### Audiencia 2: Iniciaron Checkout pero No Compraron
- **Nombre:** Carritos Abandonados
- **Fuente:** Tu píxel
- **Incluir:** InitiateCheckout (últimos 7 días)
- **Excluir:** Purchase (últimos 7 días)

### Audiencia 3: Compradores
- **Nombre:** Clientes Innovakids
- **Fuente:** Tu píxel
- **Evento:** Purchase
- **Período:** Últimos 180 días

## Paso 5: Crear Campañas de Retargeting

### Campaña 1: Recuperar Carritos Abandonados
- **Audiencia:** Carritos Abandonados
- **Mensaje:** "¡Espera! Tu lugar en Innovakids te está esperando. Completa tu inscripción ahora y obtén 10% extra de descuento."
- **Presupuesto:** $5-10 USD/día
- **Objetivo:** Conversiones

### Campaña 2: Upsell a Compradores
- **Audiencia:** Clientes Innovakids
- **Mensaje:** "¿Quieres que tu hijo aprenda 3x más rápido? Agrega Mentoría 1:1 por solo $50 USD."
- **Presupuesto:** $3-5 USD/día
- **Objetivo:** Conversiones

### Campaña 3: Lookalike de Compradores
- **Audiencia:** Lookalike 1% de Clientes Innovakids
- **Mensaje:** Anuncio principal de Innovakids
- **Presupuesto:** $10-20 USD/día
- **Objetivo:** Conversiones

## Métricas Clave a Monitorear

1. **Costo por Compra (CPP):** Debe ser < $20 USD
2. **ROAS (Return on Ad Spend):** Debe ser > 3x (por cada $1 invertido, ganar $3)
3. **Tasa de Conversión:** Debe ser > 2%
4. **CTR (Click-Through Rate):** Debe ser > 1.5%

## Troubleshooting

### El píxel no aparece en Pixel Helper
- Verifica que reemplazaste `TU_PIXEL_ID_AQUI` con tu ID real
- Limpia el caché del navegador
- Verifica que el código esté en `app/layout.tsx`

### Los eventos no se registran
- Abre la consola del navegador (F12)
- Busca errores relacionados con `fbq`
- Verifica que el píxel esté activo en Facebook Business Manager

### Las conversiones no coinciden
- Facebook puede tardar 24-48 horas en procesar eventos
- Algunos usuarios usan bloqueadores de anuncios que impiden el tracking
- Considera usar **Conversions API** para tracking server-side (más avanzado)

## Próximos Pasos

1. Deja el píxel activo por 7 días para recopilar datos
2. Crea tus primeras audiencias personalizadas
3. Lanza una campaña de retargeting con $5/día
4. Monitorea resultados y optimiza

¡Con esto tendrás un sistema completo de tracking y retargeting funcionando! 🚀
