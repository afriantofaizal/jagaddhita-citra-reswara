import { Cta } from "@/components/ui/global/cta-contact"
import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ServicesPage } from "@/components/ui/services"

export default function Page() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Cta />
      <Footer />
    </div>
  )
}
