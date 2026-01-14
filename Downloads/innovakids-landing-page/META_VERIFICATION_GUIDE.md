# Guía de Verificación con Meta (Facebook)

Esta guía te ayudará a verificar tu dominio con Meta Business para usar Facebook Ads y Meta Pixel.

## 📋 Requisitos Completados

Tu sitio ya está listo con todo lo necesario:

✅ **Política de Privacidad** - Disponible en `/privacidad`
✅ **Términos y Condiciones** - Disponible en `/terminos`
✅ **Información de Contacto** - Visible en footer y página de contacto
✅ **Dirección Física** - Diagonal Oriente 1620, Providencia, Chile
✅ **Meta Tags correctos** - Open Graph configurado en layout.tsx
✅ **Verificación de Google** - Archivo de verificación incluido

## 🔧 Paso 1: Obtener tu Facebook Pixel ID

1. Ve a [Meta Business Suite](https://business.facebook.com)
2. Ve a **Configuración de Negocio** > **Fuentes de Datos** > **Píxeles**
3. Crea un nuevo Pixel si no tienes uno, o copia el ID del existente
4. El ID tiene este formato: `123456789012345`

## 🔧 Paso 2: Agregar tu Pixel ID al Sitio

En el archivo `app/layout.tsx`, reemplaza `TU_PIXEL_ID_AQUI` con tu Pixel ID real en dos lugares:

```javascript
fbq('init', 'TU_PIXEL_ID_AQUI'); // <- Reemplaza aquí
```

y en el noscript:

```html
src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
```

## 🔧 Paso 3: Verificar el Dominio en Meta

### Opción A: Verificación con HTML (Recomendado)

1. En Meta Business Manager, ve a **Configuración de Negocio** > **Seguridad de la Marca** > **Dominios**
2. Haz clic en **Agregar Dominios**
3. Ingresa `innovakidslatam.com`
4. Selecciona **Agregar etiqueta meta al HTML**
5. Meta te dará una etiqueta como: `<meta name="facebook-domain-verification" content="abc123xyz..." />`
6. Copia el código `abc123xyz...`
7. Ve al archivo `app/layout.tsx` y agrega en la sección `verification`:

```typescript
verification: {
  google: "5DUPn39I0nG06dUypWPbuuaNnTp5tTH7GqaLxwCjv2A",
  facebook: "abc123xyz...", // <- Agrega aquí el código
},
```

### Opción B: Verificación con archivo HTML

Si prefieres esta opción, Meta te dará un archivo HTML que debes colocar en la carpeta `public/`

## 🔧 Paso 4: Probar el Pixel

1. Instala la extensión [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visita tu sitio web
3. La extensión debe mostrar que el pixel se está cargando correctamente

## 📱 URLs Importantes para Meta

Estos son los links que Meta necesitará verificar:

- **Sitio principal**: https://www.innovakidslatam.com
- **Política de Privacidad**: https://www.innovakidslatam.com/privacidad
- **Términos y Condiciones**: https://www.innovakidslatam.com/terminos
- **Página de Contacto**: https://www.innovakidslatam.com/#contacto

## ✅ Checklist de Verificación

Antes de solicitar verificación en Meta, confirma que:

- [ ] Tu Pixel ID está correctamente configurado en layout.tsx
- [ ] El Meta Pixel Helper detecta el pixel en tu sitio
- [ ] La página de Política de Privacidad es accesible y menciona uso de cookies/tracking
- [ ] La página de Términos y Condiciones está completa
- [ ] Tu información de contacto es visible (email, teléfono, dirección)
- [ ] El dominio está verificado en Meta Business Manager

## 🎯 Información del Negocio para Meta

**Nombre del Negocio**: Innovakids LATAM

**Categoría**: Educación / Servicios Educativos

**Descripción**: Cursos de Inteligencia Artificial para niños de 8 a 14 años en toda Latinoamérica. Clases online en vivo con grupos reducidos de máximo 5 alumnos.

**Dirección Física**: 
- Calle: Diagonal Oriente 1620
- Ciudad: Providencia
- País: Chile

**Contacto**:
- Email: innovakidslatam@gmail.com
- Teléfono: +56 9 6475 4219
- WhatsApp: +56 9 6475 4219

**Sitio Web**: https://www.innovakidslatam.com

**Redes Sociales**: 
- Instagram: @innovakidslatam

## 🚀 Eventos que el Pixel Rastreará

El pixel ya está configurado para rastrear:

1. **PageView** - Visitas a cualquier página
2. **ViewContent** - Cuando alguien ve el programa
3. **AddToCart** - Cuando alguien inicia proceso de pago
4. **InitiateCheckout** - Cuando llega a página de pago
5. **Purchase** - Cuando completa una compra
6. **Lead** - Cuando completa formulario de contacto

## 📝 Notas Importantes

- Meta puede tardar 24-72 horas en verificar tu dominio
- Asegúrate de que tu sitio esté publicado y accesible públicamente
- La verificación del dominio es necesaria antes de poder usar muchas funciones de Meta Ads
- Guarda todos los códigos y credenciales en un lugar seguro

## 🆘 Soporte

Si necesitas ayuda con la verificación, contacta al equipo de soporte de Meta Business:
https://www.facebook.com/business/help

---

Una vez completados todos los pasos, tu sitio estará completamente verificado y listo para usar Facebook Ads y todas las herramientas de Meta Business.
