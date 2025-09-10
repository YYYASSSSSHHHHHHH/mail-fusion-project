import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#111418] text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(29,78,216,0.1),_transparent_30%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(29,78,216,0.07),_transparent_40%)]" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
