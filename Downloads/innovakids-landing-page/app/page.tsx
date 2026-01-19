import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"

const AIFutureSection = dynamic(
  () => import("@/components/ai-future-section").then((mod) => ({ default: mod.AIFutureSection })),
  { ssr: true },
)
const ModulePreviewSection = dynamic(
  () => import("@/components/module-preview-section").then((mod) => ({ default: mod.ModulePreviewSection })),
  { ssr: true },
)
const ValueStackSection = dynamic(
  () => import("@/components/value-stack-section").then((mod) => ({ default: mod.ValueStackSection })),
  { ssr: true },
)
const WhyNowSection = dynamic(
  () => import("@/components/why-now-section").then((mod) => ({ default: mod.WhyNowSection })),
  { ssr: true },
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: true },
)
const CurriculumSection = dynamic(
  () => import("@/components/curriculum-section").then((mod) => ({ default: mod.CurriculumSection })),
  { ssr: true },
)
const ConsequencesSection = dynamic(
  () => import("@/components/consequences-section").then((mod) => ({ default: mod.ConsequencesSection })),
  { ssr: true },
)
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  { ssr: true },
)
const UpcomingCoursesSection = dynamic(
  () => import("@/components/upcoming-courses-section").then((mod) => ({ default: mod.UpcomingCoursesSection })),
  { ssr: true },
)
const CalendlySection = dynamic(
  () => import("@/components/calendly-section").then((mod) => ({ default: mod.CalendlySection })),
  { ssr: true },
)
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  ssr: true,
})
const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), { ssr: true })
const SEOContent = dynamic(() => import("@/components/seo-content").then((mod) => ({ default: mod.SEOContent })), {
  ssr: true,
})

import { faqs } from "@/lib/faq-data"

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroSection />

        {/* AI Future Stats - Show urgency immediately */}
        <AIFutureSection />

        {/* Module Preview - Show exactly what they get */}
        <ModulePreviewSection />

        {/* Value Stack - Everything included */}
        <ValueStackSection />

        <div className="h-16" />

        {/* Testimonials - Social proof from parents and AIs */}
        <TestimonialsSection />

        <div className="h-24" />

        <KeyFeaturesSection />

        <div className="h-24" />

        <WhyNowSection />

        <div className="h-24" />

        <CurriculumSection />

        <div className="h-24" />

        <UpcomingCoursesSection />

        <div className="h-24" />

        <ConsequencesSection />

        <div className="h-24" />

        <PricingSection />

        <div className="h-24" />

        <CalendlySection />

        <div className="h-24" />

        <FAQSection />

        <div className="h-24" />

        <SEOContent />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}

