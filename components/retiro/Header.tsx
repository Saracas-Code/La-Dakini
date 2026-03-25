"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#lama", label: "Nuestro Lama" },
  { href: "/#dakini", label: "La Dakini" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#actualidad", label: "Actualidad" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#resenias", label: "Reseñas" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E8D8C4]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Ir a inicio">
          <Image
            src="/LOGO-DAKINI-transparent.png"
            alt="Logo Dakini"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
            priority
          />
          <span className="font-serif text-[#5E2A29] text-[15px] font-semibold leading-tight tracking-wide">
            Monasterio Budista<br />
            <span className="text-[11px] font-normal tracking-widest text-[#724E48]">SHAMBALA NORBU</span>
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center text-[#5E2A29] rounded-full hover:bg-[#FBF3DC] transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Full-screen mobile nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FBF3DC] flex flex-col pt-20 px-8">
          <nav aria-label="Navegación principal">
            <ul className="flex flex-col gap-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-[16px] font-serif text-[#5E2A29] border-b border-[#E8D8C4] hover:text-[#A72F27] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pb-10">
            <Link
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#A72F27] text-white font-sans text-sm tracking-widest uppercase py-4 rounded-md hover:bg-[#8B2520] transition-colors"
            >
              Reservar estancia
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
