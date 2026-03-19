import Header from "@/components/retiro/Header"
import Hero from "@/components/retiro/Hero"
import SobreNosotros from "@/components/retiro/SobreNosotros"
import NuestroLama from "@/components/retiro/NuestroLama"
import LaDakini from "@/components/retiro/LaDakini"
import Galeria from "@/components/retiro/Galeria"
import Actualidad from "@/components/retiro/Actualidad"
import Servicios from "@/components/retiro/Servicios"
import Resenias from "@/components/retiro/Resenias"
import Contacto from "@/components/retiro/Contacto"
import Footer from "@/components/retiro/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <SobreNosotros />
        <NuestroLama />
        <LaDakini />
        <Galeria />
        <Actualidad />
        <Servicios />
        <Resenias />
        <Contacto />
      </main>

      <Footer />
    </div>
  )
}
