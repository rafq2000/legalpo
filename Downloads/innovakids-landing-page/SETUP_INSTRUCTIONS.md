# Instrucciones de Configuración - Innovakids Landing Page

## ✅ Lo que ya está implementado

1. **Contador dinámico de cupos** (40 cupos totales)
2. **Timer de cuenta regresiva** (7 días por defecto)
3. **Sistema de descarga del Kit** (captura email + descarga PDF)
4. **Botón flotante de WhatsApp**
5. **Calendly integrado**
6. **Tracking pixels** (Meta + Google Analytics)
7. **Video hero con placeholder**
8. **Testimonios mejorados con estrellas**

---

## 🔧 Lo que necesitas configurar

### 1. Subir el PDF del Kit del Padre Moderno

**Ubicación:** `public/downloads/kit-padre-moderno.pdf`

**Pasos:**
1. Crea la carpeta `public/downloads/` si no existe
2. Sube tu PDF con el nombre exacto: `kit-padre-moderno.pdf`
3. El sistema automáticamente lo entregará cuando alguien complete el formulario

---

### 2. Ejecutar el Script SQL en Supabase

**Archivo:** `scripts/create-leads-table.sql`

**Pasos:**
1. Ve a tu proyecto de Supabase
2. Abre el SQL Editor
3. Copia y pega el contenido del script
4. Ejecuta el script
5. Verifica que la tabla `leads` se creó correctamente

---

### 3. Configurar Tracking Pixels

**Archivo:** `components/tracking-pixels.tsx`

**Meta Pixel:**
1. Ve a Facebook Business Manager → Events Manager
2. Crea un Pixel si no tienes uno
3. Copia tu Pixel ID
4. Reemplaza `'YOUR_PIXEL_ID'` en el archivo con tu ID real

**Google Analytics:**
1. Ve a Google Analytics → Admin → Data Streams
2. Crea una propiedad web si no tienes una
3. Copia tu Measurement ID (formato: G-XXXXXXXXXX)
4. Reemplaza `'YOUR_GA_ID'` en el archivo con tu ID real

---

### 4. Grabar y Subir el Video Hero

**Recomendaciones:**
- **Duración:** 15-30 segundos
- **Contenido:** Muestra un niño creando algo con IA (ej: generando un video histórico)
- **Script sugerido:** "Mira cómo tu hijo puede hacer esto en semanas. En Innovakids, transformamos niños de consumidores a creadores."

**Opciones de hosting:**
- YouTube (unlisted)
- Vimeo
- Loom

**Implementación:**
1. Sube tu video a la plataforma elegida
2. Obtén el embed code
3. Edita `components/hero-section.tsx`
4. Descomenta y reemplaza el iframe con tu código de embed

---

### 5. Configurar Email Automation

**Archivo de referencia:** `EMAIL_AUTOMATION_GUIDE.md`

**Opción A: Mailchimp (Gratis hasta 500 contactos)**
1. Crea una cuenta en Mailchimp
2. Crea una audiencia
3. Configura la automatización de 3 emails (ver guía)
4. Conecta con Supabase usando Zapier o Make.com

**Opción B: Klaviyo (Más potente, gratis hasta 250 contactos)**
1. Crea una cuenta en Klaviyo
2. Integra con Supabase
3. Crea los 3 flows de email
4. Añade tracking de conversiones

**Webhook para sincronizar:**
```javascript
// En app/actions/lead-magnet.ts, después de insertar en Supabase:
await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK/', {
  method: 'POST',
  body: JSON.stringify({ name, email, source: 'lead_magnet' })
})
```

---

### 6. Actualizar el Contador de Cupos

El contador se actualiza automáticamente desde Supabase, pero necesitas:

1. Cuando alguien se inscriba y pague, actualiza la tabla `leads`:
```sql
INSERT INTO leads (name, email, source) 
VALUES ('Nombre', 'email@example.com', 'enrollment');
```

2. El contador restará automáticamente de 40

**Alternativa manual:**
Si prefieres actualizar manualmente, edita `components/spot-counter.tsx` y cambia el número base.

---

### 7. Ajustar el Timer de Cuenta Regresiva

**Archivo:** `components/countdown-timer.tsx`

**Cambiar la duración:**
```typescript
// Línea 15: Cambia el número de días
deadline.setDate(deadline.getDate() + 7) // 7 días desde hoy
```

**Fijar una fecha específica:**
```typescript
const deadline = new Date('2025-12-31T23:59:59') // 31 de diciembre
```

---

## 📊 Métricas a Monitorear

### En Google Analytics:
- Visitas totales
- Tasa de rebote
- Tiempo en página
- Conversiones (descargas de kit + agendamientos)

### En Meta Pixel:
- PageView
- Lead (descarga de kit)
- Schedule (agendamiento de sesión)
- Purchase (inscripción pagada)

### En Supabase:
```sql
-- Leads totales
SELECT COUNT(*) FROM leads WHERE source = 'lead_magnet';

-- Inscripciones
SELECT COUNT(*) FROM leads WHERE source = 'enrollment';

-- Tasa de conversión
SELECT 
  (SELECT COUNT(*) FROM leads WHERE source = 'enrollment') * 100.0 / 
  (SELECT COUNT(*) FROM leads WHERE source = 'lead_magnet') as conversion_rate;
```

---

## 🚀 Checklist de Lanzamiento

- [ ] PDF del Kit subido a `public/downloads/`
- [ ] Script SQL ejecutado en Supabase
- [ ] Meta Pixel ID configurado
- [ ] Google Analytics ID configurado
- [ ] Video hero grabado y embebido
- [ ] Email automation configurada (Mailchimp/Klaviyo)
- [ ] Webhook de sincronización funcionando
- [ ] Número de WhatsApp verificado en botón flotante
- [ ] Calendly link verificado
- [ ] Prueba completa del flujo: visita → descarga kit → recibe email → agenda sesión

---

## 💡 Próximos Pasos Recomendados

1. **Semana 1:** Lanza con tráfico orgánico (redes sociales, email a base existente)
2. **Semana 2:** Analiza métricas y optimiza (A/B test de headlines, CTAs)
3. **Semana 3:** Lanza ads pagados en Meta/Google ($500-1000 presupuesto)
4. **Objetivo:** 40 inscripciones en 4-6 semanas = $12,000 USD

¿Preguntas? Revisa los archivos de guía o contacta al equipo de soporte.
