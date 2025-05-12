import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
