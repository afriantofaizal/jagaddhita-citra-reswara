import { AboutUs } from "@/components/ui/about"
import { Cta } from "@/components/ui/global/cta-contact"
import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { Officer } from "@/components/ui/global/officer"

export default function Page() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Officer />
      <Cta />
      <Footer />
    </div>
  )
}
