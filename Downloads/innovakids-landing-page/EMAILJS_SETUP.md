# Configuración de EmailJS para Formulario de Contacto

## Estado Actual
✅ EmailJS ya está configurado en tu cuenta con Gmail (service_h4fvb9n)

## Pasos para Completar la Integración

### 1. Crear el Template en EmailJS (2 minutos)

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com)
2. En el menú izquierdo → **"Email Templates"**
3. Click en **"Create New Template"**
4. Configura:

**Template Name:** `contacto_innovakids`

**Service:** Selecciona `Gmail (service_h4fvb9n)`

**Subject:** `Nueva consulta de {{name}} - Innovakids`

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: #0a1628; padding: 20px; border-radius: 10px 10px 0 0;">
    <h2 style="color: #4DD0E1; margin: 0;">Nueva Consulta - Innovakids</h2>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
    <h3 style="color: #0a1628; margin-top: 0;">Información del Contacto</h3>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">{{name}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">{{email}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">{{phone}}</td>
      </tr>
    </table>
    
    <h3 style="color: #0a1628; margin-top: 30px;">Mensaje:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4DD0E1; border-radius: 5px;">
      <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
    
    <p style="color: #666; font-size: 12px; text-align: center; margin: 0;">
      Enviado desde <a href="https://innovakidslatam.com" style="color: #4DD0E1;">innovakidslatam.com</a>
    </p>
  </div>
</div>
```

5. **Guarda** el template
6. **Copia el Template ID** (ejemplo: `template_abc123xyz`)

### 2. Obtener tus Claves de EmailJS (1 minuto)

1. En EmailJS Dashboard → **"Account"** (menú izquierdo abajo)
2. Ve a la sección **"General"**
3. Copia estas 3 claves:

| Clave | Dónde encontrarla | Ejemplo |
|-------|-------------------|---------|
| **Public Key** | Account → General → Public Key | `user_abc123xyz` |
| **Service ID** | Ya lo tienes | `service_h4fvb9n` |
| **Template ID** | Del paso anterior | `template_abc123xyz` |

### 3. Agregar Variables de Entorno en v0 (1 minuto)

1. En v0.dev → Abre tu proyecto
2. Click en el ícono de la barra lateral izquierda
3. Ve a **"Vars"** (Variables de entorno)
4. Agrega estas 3 variables (SIN el prefijo NEXT_PUBLIC_ para mayor seguridad):

```
EMAILJS_SERVICE_ID=service_h4fvb9n
EMAILJS_TEMPLATE_ID=template_abc123xyz
EMAILJS_PUBLIC_KEY=user_abc123xyz
```

**Importante:** 
- Reemplaza los valores de ejemplo con tus claves reales
- NO uses el prefijo `NEXT_PUBLIC_` - estas variables solo se usan en el servidor
- Esto mantiene tus claves seguras y privadas

5. **Guarda** y espera a que el proyecto se redeploy automáticamente

### 4. Probar el Formulario (30 segundos)

1. Ve a tu sitio: `https://innovakidslatam.com/contacto`
2. Llena el formulario:
   - **Nombre:** Tu nombre
   - **Email:** Tu email
   - **Teléfono:** Tu teléfono (opcional)
   - **Mensaje:** "Prueba del formulario de contacto"
3. Click en **"Enviar mensaje"**
4. Deberías ver: **"¡Mensaje enviado exitosamente!"**
5. Revisa tu Gmail (innovakidslatam@gmail.com) → El email debe llegar en menos de 10 segundos

## Límites del Plan Gratuito

- **200 emails/mes gratis**
- Sin tarjeta de crédito requerida
- Perfecto para empezar

## Solución de Problemas

### Error: "Email service not configured"
- Verifica que las 3 variables de entorno estén agregadas correctamente en v0
- Asegúrate de que NO tengan el prefijo `NEXT_PUBLIC_`
- Asegúrate de que no haya espacios extra al copiar las claves

### Error: "Failed to send email"
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté asociado al servicio Gmail correcto
- Revisa que el servicio Gmail esté activo en EmailJS

### No llega el email
- Revisa la carpeta de Spam en Gmail
- Verifica que el email `innovakidslatam@gmail.com` esté configurado correctamente en EmailJS
- Revisa los logs en EmailJS Dashboard → Email History

## Ventajas de EmailJS

✅ Sin backend complejo  
✅ Sin servidor SMTP  
✅ 200 emails/mes gratis  
✅ Configuración en 5 minutos  
✅ Templates HTML personalizables  
✅ Tracking de emails enviados  
✅ Claves seguras en el servidor

## Próximos Pasos (Opcional)

Una vez que funcione el formulario básico, puedes:

1. **Agregar auto-respuesta:** Crear un segundo template que se envíe automáticamente al usuario confirmando que recibiste su mensaje
2. **Personalizar el diseño:** Mejorar el template HTML con tu branding
3. **Agregar más campos:** Edad del niño, nivel de interés, etc.
4. **Integrar con CRM:** Conectar EmailJS con Zapier para enviar leads a tu CRM

¿Necesitas ayuda con alguno de estos pasos? ¡Avísame!
