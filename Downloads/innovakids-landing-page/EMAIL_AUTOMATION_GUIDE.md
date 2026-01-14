# Guía de Automatización de Emails - Innovakids

## Secuencia de 3 Emails para Lead Magnet

Esta es la secuencia recomendada por Grok para nutrir los leads que descargan el Kit del Padre Moderno.

### Email 1: Entrega Inmediata (0 minutos)
**Asunto:** ✅ Tu Kit del Padre Moderno está aquí + Proyecto Sorpresa

**Cuerpo:**
```
Hola [Nombre],

¡Gracias por descargar el Kit del Padre Moderno!

Tu guía está lista para descargar aquí: [LINK DE DESCARGA]

🎁 BONUS: Proyecto Rápido para Empezar Hoy

¿Tu hijo tiene una tarea de historia o ciencias? Enséñale a usar ChatGPT para:
- Crear un guión para un video educativo
- Generar ideas creativas para su proyecto
- Mejorar la redacción de sus ensayos

Tip: Usa el Proyecto #2 del Kit ("Video Histórico con IA") - toma solo 15 minutos.

¿Preguntas? Responde este email o escríbenos a WhatsApp: +56-964754219

¡Que disfrutes el Kit!

El equipo de Innovakids
```

---

### Email 2: Historia de Éxito (24 horas después)
**Asunto:** Cómo Lucas pasó de odiar escribir a sacar la nota más alta 📈

**Cuerpo:**
```
Hola [Nombre],

¿Ya probaste algún proyecto del Kit con tu hijo?

Quiero compartirte una historia real que me emociona cada vez que la cuento:

Lucas, 12 años, ODIABA escribir. Sus ensayos eran cortos, aburridos, y siempre sacaba notas bajas.

Su mamá, Sofía, estaba desesperada. Hasta que descubrió cómo la IA podía ayudar (sin hacer trampa).

En 3 semanas en nuestro Programa Acelerador:
✅ Lucas aprendió a usar ChatGPT como "asistente de ideas"
✅ Escribió un ensayo sobre la Segunda Guerra Mundial que impresionó a su profesor
✅ Sacó la NOTA MÁS ALTA de su clase

El profesor le preguntó a Sofía: "¿Qué pasó con Lucas?"

La diferencia: Lucas no dejó que la IA escribiera por él. La usó para:
- Organizar sus ideas
- Encontrar ángulos creativos
- Mejorar su vocabulario

¿Quieres que tu hijo tenga el mismo cambio?

👉 Agenda una Sesión Estratégica GRATUITA conmigo:
[LINK A CALENDLY]

En 30 minutos, te mostraré:
- Cómo la IA puede mejorar las notas de tu hijo (sin hacer trampa)
- El plan personalizado para su edad y nivel
- Por qué grupos de 5 alumnos son la clave del éxito

Solo quedan [X] cupos para este ciclo.

Nos vemos pronto,
[Tu Nombre]
Fundador, Innovakids

PD: Si no estás listo para agendar, responde este email con tus dudas. Estoy aquí para ayudarte.
```

---

### Email 3: Urgencia Final (48 horas después)
**Asunto:** ⏰ Quedan solo 8 cupos a $200 - No pierdas la ventaja para tu hijo

**Cuerpo:**
```
Hola [Nombre],

Te escribo rápido porque no quiero que pierdas esta oportunidad.

Quedan solo 8 CUPOS disponibles para el Programa Acelerador de IA a $200 USD.

Después de eso, el precio sube a $450 (o cerramos inscripciones hasta el próximo ciclo).

¿Por qué es urgente?

Cada día que pasa, tu hijo:
❌ Sigue usando la tecnología de forma pasiva (consumiendo, no creando)
❌ Pierde la ventaja competitiva que otros niños ya están ganando
❌ Se queda atrás en habilidades que serán OBLIGATORIAS en 5 años

Mientras tanto, los niños en nuestro programa:
✅ Están creando apps, videos con IA, y proyectos que impresionan a sus profesores
✅ Mejorando sus notas usando IA de forma ética
✅ Construyendo un portafolio digital que los destacará en el futuro

La diferencia entre "esperar" y "actuar" es enorme.

👉 Agenda tu Sesión Estratégica GRATUITA ahora:
[LINK A CALENDLY]

O si prefieres, escríbeme directo a WhatsApp: +56-964754219

Garantía 100%: Si después de la primera clase no estás satisfecho, te devolvemos TODO tu dinero. Sin preguntas.

No dejes que tu hijo se quede atrás.

Nos vemos en la sesión,
[Tu Nombre]
Innovakids

PD: Este email es el último de la serie. Si no agendas ahora, perderás tu cupo. Los 40 cupos se llenan rápido.
```

---

## Configuración en Mailchimp/Klaviyo

### Paso 1: Crear la Audiencia
1. Importa los emails de la tabla `leads` de Supabase
2. Segmenta por `source = 'lead_magnet'`

### Paso 2: Configurar la Automatización
1. **Trigger:** Cuando un contacto se suscribe con tag "lead_magnet"
2. **Email 1:** Enviar inmediatamente
3. **Email 2:** Esperar 24 horas → Enviar
4. **Email 3:** Esperar 48 horas → Enviar

### Paso 3: Tracking de Conversiones
- Añade UTM parameters a los links de Calendly: `?utm_source=email&utm_campaign=lead_nurture`
- Trackea clics en Calendly como "conversión"
- Meta Pixel: Trackea evento "Schedule" cuando alguien agenda

---

## Métricas a Monitorear

- **Open Rate:** Objetivo 40%+
- **Click Rate:** Objetivo 15%+
- **Conversion to Booking:** Objetivo 10%+ (de clicks a agendamiento)
- **Booking to Sale:** Objetivo 25%+ (de sesión a inscripción)

Con 200 leads del Kit → 40 sesiones → 10 ventas = $3,000 USD
