# Configuración de EmailJS - Innovakids

## Estado Actual
✅ Servicio de Gmail ya creado: `service_h4fvb9n`
✅ Conectado a: innovakidslatam@gmail.com
✅ Sistema configurado con server action (más seguro)

## Pasos para Completar (5 minutos)

### 1. Crear Template en EmailJS (2 minutos)

1. Ve a https://dashboard.emailjs.com/admin
2. En el menú izquierdo → **"Email Templates"**
3. Click en **"Create New Template"**
4. Configura así:

**Template Name:** `contacto_innovakids`

**Service:** Selecciona `Gmail (service_h4fvb9n)`

**Subject:** `Nueva consulta de {{name}} - Innovakids`

**Content (HTML):**
```html
<h2>Nueva consulta desde innovakidslatam.com</h2>

<p><strong>Nombre:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>WhatsApp:</strong> {{whatsapp}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #666; font-size: 12px;">
  Enviado desde el formulario de contacto de 
  <a href="https://innovakidslatam.com">innovakidslatam.com</a>
</p>
```

5. **Guarda** y copia el **Template ID** (ejemplo: `template_abc123xyz`)

---

### 2. Obtener tus 3 Claves (1 minuto)

Ve a **"Account"** (menú izquierdo abajo) → **"General"**

Copia estas 3 claves:

| Clave | Dónde encontrarla | Ejemplo |
|-------|-------------------|---------|
| **Public Key** | Account → General → Public Key | `user_abc123xyz` |
| **Service ID** | Ya lo tienes | `service_h4fvb9n` |
| **Template ID** | Del paso anterior | `template_abc123xyz` |

---

### 3. Agregar Variables de Entorno en v0 (2 minutos)

**IMPORTANTE:** Ahora usamos variables SIN el prefijo `NEXT_PUBLIC_` para mayor seguridad.

En v0.dev:

1. Abre el **sidebar izquierdo** → **"Vars"**
2. Click en **"Add Variable"**
3. Agrega estas 3 variables (SIN NEXT_PUBLIC_):

```
EMAILJS_SERVICE_ID=service_h4fvb9n
EMAILJS_TEMPLATE_ID=template_abc123xyz
EMAILJS_PUBLIC_KEY=user_abc123xyz
```

**IMPORTANTE:** Reemplaza `template_abc123xyz` y `user_abc123xyz` con tus valores reales.

4. **Guarda** y **Publica** el proyecto

---

### 4. Probar el Formulario (30 segundos)

1. Ve a tu sitio: https://innovakidslatam.com
2. Scroll hasta la sección **"Contacto"**
3. Llena el formulario:
   - Nombre: Tu nombre
   - Email: tu@email.com
   - WhatsApp: Selecciona país + número
   - Mensaje: "Prueba de contacto"
4. Click **"Enviar mensaje"**

**Resultado esperado:**
- ✅ Mensaje: "¡Mensaje enviado exitosamente!"
- ✅ Email llega a innovakidslatam@gmail.com en menos de 10 segundos

---

## ✅ Seguridad Mejorada

Ahora el sistema usa un **server action** que:
- ✅ Mantiene las claves en el servidor (no expuestas al cliente)
- ✅ Usa la API REST de EmailJS
- ✅ Más seguro y profesional
- ✅ Sin warnings de seguridad

---

## Límites del Plan Gratuito

- **200 emails/mes gratis**
- Sin tarjeta de crédito requerida
- Perfecto para empezar

---

## Solución de Problemas

### Error: "Error al enviar el mensaje"

**Causa:** Variables de entorno no configuradas

**Solución:**
1. Verifica que las 3 variables estén en v0 → Vars (SIN NEXT_PUBLIC_)
2. Asegúrate de haber publicado el proyecto después de agregar las variables
3. Recarga la página

### Los emails no llegan

**Causa:** Template ID incorrecto o servicio no conectado

**Solución:**
1. Ve a EmailJS → Email Templates
2. Verifica que el template esté conectado al servicio `service_h4fvb9n`
3. Copia nuevamente el Template ID y actualiza la variable

---

## ¿Necesitas Ayuda?

Contacta a soporte de EmailJS: https://www.emailjs.com/docs/

---

**¡Listo! Tu sistema de contacto está configurado de forma segura y funcionando.**
