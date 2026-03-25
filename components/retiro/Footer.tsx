import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#lama", label: "Lama" },
  { href: "/#dakini", label: "Dakini" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#actualidad", label: "Actualidad" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
]

export default function Footer() {
  return (
    <footer className="bg-[#5E2A29] px-6 py-10 text-center">
      <div className="max-w-sm mx-auto flex flex-col items-center gap-5">
        <Image
          src="/LOGO-DAKINI-CLARO-transparent.png"
          alt="Logo Dakini"
          width={40}
          height={40}
          className="h-10 w-10 object-contain bg-transparent"
        />

        <div>
          <p className="font-serif text-[#FBF3DC] text-lg font-semibold">Monasterio Shambala Norbu</p>
          <p className="font-sans text-[#FBF3DC]/60 text-[11px] tracking-widest uppercase mt-1">
            Retiros Espirituales Budistas
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-[#FBF3DC]/70 text-[11px] tracking-wider hover:text-[#FBF3DC] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full h-px bg-[#FBF3DC]/20" aria-hidden="true" />

        <p className="font-sans text-[#FBF3DC]/50 text-[10px] tracking-wide">
          © 2025 Monasterio Shambala Norbu · Todos los derechos reservados
        </p>
        <p className="font-serif text-[#FBF3DC]/40 text-[11px] italic">
          Que todos los seres sean felices
        </p>
      </div>
    </footer>
  )
}
