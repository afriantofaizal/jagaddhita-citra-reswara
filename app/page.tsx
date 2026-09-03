
import { AboutSection } from "@/components/ui/global/about"
import { Cta } from "@/components/ui/global/cta-contact"
import { Experience } from "@/components/ui/global/experience"
import { Footer } from "@/components/ui/global/footer"
import { Hero } from "@/components/ui/global/hero"
import { Navbar } from "@/components/ui/global/navbar"
import { Services } from "@/components/ui/global/services"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Experience />
      <Cta />
      <Footer />
    </div>
  )
}
