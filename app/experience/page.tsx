import { ExperiencePage } from "@/components/ui/experience"
import { Cta } from "@/components/ui/global/cta-contact"
import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"

export default function Page() {
  return (
    <div>
      <Navbar />
      <ExperiencePage />
      <Cta />
      <Footer />
    </div>
  )
}