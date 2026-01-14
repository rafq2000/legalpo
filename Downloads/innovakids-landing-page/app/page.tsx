import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"

const WhyNowSection = dynamic(
  () => import("@/components/why-now-section").then((mod) => ({ default: mod.WhyNowSection })),
  { ssr: true },
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: true },
)
const ProgramSection = dynamic(
  () => import("@/components/program-section").then((mod) => ({ default: mod.ProgramSection })),
  { ssr: true },
)
const ConsequencesSection = dynamic(
  () => import("@/components/consequences-section").then((mod) => ({ default: mod.ConsequencesSection })),
  { ssr: true },
)
const PricingSimpleSection = dynamic(
  () => import("@/components/pricing-simple-section").then((mod) => ({ default: mod.PricingSimpleSection })),
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

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroSection />

        <div className="h-24" />

        <KeyFeaturesSection />

        <div className="h-32" />

        <WhyNowSection />

        <div className="h-32" />

        <TestimonialsSection />

        <div className="h-32" />

        <ProgramSection />

        <div className="h-32" />

        <UpcomingCoursesSection />

        <div className="h-32" />

        <ConsequencesSection />

        <div className="h-32" />

        <PricingSimpleSection />

        <div className="h-32" />

        <CalendlySection />

        <div className="h-32" />

        <FAQSection />

        <div className="h-32" />

        <SEOContent />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
