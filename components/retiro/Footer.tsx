import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#lama", label: "Lama" },
  { href: "/#dakini", label: "Dakini" },
  { href: "/#actualidad", label: "Actualidad" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#resenias", label: "Rese\u00f1as" },
  { href: "/#contacto", label: "Contacto" },
]

export default function Footer() {
  return (
    <footer className="bg-[#5E2A29] px-6 py-10 text-center">
      <div className="mx-auto flex max-w-sm flex-col items-center gap-5">
        <Image
          src="/LOGO-DAKINI-CLARO-transparent.png"
          alt="Logo Dakini"
          width={40}
          height={40}
          className="h-10 w-10 object-contain bg-transparent"
        />

        <div>
          <p className="font-serif text-lg font-semibold text-[#FBF3DC]">
            Monasterio Shambala Norbu
          </p>
          <p className="mt-1 font-sans text-[11px] uppercase tracking-widest text-[#FBF3DC]/60">
            Retiros Espirituales Budistas
          </p>
        </div>

        <nav aria-label="Navegaci\u00f3n del pie de p\u00e1gina">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-[11px] tracking-wider text-[#FBF3DC]/70 transition-colors hover:text-[#FBF3DC]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="h-px w-full bg-[#FBF3DC]/20" aria-hidden="true" />

        <p className="font-sans text-[10px] tracking-wide text-[#FBF3DC]/50">
          &copy; 2025 Monasterio Shambala Norbu &middot; Todos los derechos reservados
        </p>
        <p className="fictional-disclaimer font-sans">
          Este sitio web es una obra de ficci&oacute;n con fines promocionales
          cinematogr&aacute;ficos. El Monasterio de Shambala Norbu y los eventos aqu&iacute;
          descritos no existen en la realidad, si no que son parte del desarrollo de la obra
          cinematogr&aacute;fica "La Dakini"
        </p>
        <p className="font-serif text-[11px] italic text-[#FBF3DC]/40">
          Que todos los seres sean felices
        </p>
      </div>
    </footer>
  )
}
