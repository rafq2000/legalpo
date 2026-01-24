# KINEUM: Future of Recovery - Implementation Plan

## Vision
To position **Kineum** as the standard for precision home rehabilitation in Santiago. We do not sell "sessions"; we provide a **comprehensive recovery ecosystem** powered by clinical expertise and artificial intelligence. The service is implicitly premium: implied by the quality of the tech, the kit, and the language, without shouting "luxury".

## 1. Technical Architecture (The "Stack")

We will leverage the suggested low-code/high-impact stack but integrated tightly into your Next.js application for a seamless brand experience.

| Feature | Recommended Tech | Integration Strategy |
| :--- | :--- | :--- |
| **Web / Landing** | **Next.js + Tailwind** (Current) | Kineum.cl - Hosting the marketing site, Blog, and "Portal" shell. |
| **Patient Portal** | **Supabase** (Auth + DB) | Users log in at `app.kineum.cl` to view plans/progress. |
| **AI Assistant** | **n8n + OpenAI + WhatsApp API** | The primary interface. The "brain" that feeds data to Supabase. |
| **Content Engine** | **MDX / Sanity CMS** | For the "Kineum Journal" (Blog) - SEO magnet for high-value keywords. |
| **Payments** | **Stripe** | For recurring "Membership" billing (Essential/Premium). |

## 2. Product Roadmap

### Phase 1: The "Promise" (Branding & Structure)
*Goal: Establish the Kineum identity and SEO foundation.*
- [x] **Rebrand**: Rename from KineEnCasa to **Kineum**.
- [ ] **Sophisticated Copy**: Update `page.tsx` to use "implied premium" language (Precision, Clinical Excellence, Ecosystem).
- [ ] **Blog/Journal**: Implement a section for "Clinical Insights" (SEO strategy).
- [ ] **Lead Capture**: "Apply for Membership" for the Elite plan.

### Phase 2: The Ecosytem MVP
*Goal: Deliver the core digital value.*
- [ ] **WhatsApp AI Bot**: Setup n8n workflow to handle basic Triage and FAQ.
- [ ] **Digital Evaluation**: Create a standardized PDF report template.
- [ ] **Exercise Playlist**: Curate the top 10 conditions into Notion pages or Unlisted YouTube playlists.

### Phase 3: The "Full Suite"
*Goal: Automation and Scale.*
- [ ] **Patient Portal**: Build the `/login` area where patients see their graphs.
- [ ] **IoT Integration**: Integrate simple data inputs (e.g. photos of posture) into the patient record.

---

## 3. Brand Strategy: "Implicit Premium"

We will shift the language from "buying sessions" to "investing in recovery".

*   **Old**: "Kinesiólogo a domicilio barato"
*   **Kineum**: "Recuperación clínica en su espacio personal."
*   **Old**: "Pack de 10 sesiones"
*   **Kineum**: "Membership Kineum Elite - Acompañamiento continuo."

## 4. Content Strategy (The Blog)
The "Kineum Journal" will focus on high-authority medical topics to build trust and SEO.
*   *Topics*: "Neuroplasticidad en la recuperación ACV", "Ergonomía avanzada para ejecutivos", "Biocanica del running".
*   *Implementation*: A `/blog` route using Next.js static generation for speed and SEO.

## 5. Immediate Action Item: Landing Page Transformation
We will update `page.tsx` to reflect this new premium positioning immediately.

**Proposed Changes to `app/page.tsx`:**
1.  **Header**: **KINEUM** logo (Text).
2.  **Hero**: "Rehabilitación de Precisión".
3.  **Blog Section**: Add "Latest Clinical Insights".
4.  **Footer**: Clean, minimalist, trust signals.
