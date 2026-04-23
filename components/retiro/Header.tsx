"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

const navLinks = [
  { id: "nosotros", href: "/#nosotros", label: "Nosotros" },
  { id: "lama", href: "/#lama", label: "Nuestro Lama" },
  { id: "dakini", href: "/#dakini", label: "La Dakini" },
  { id: "actualidad", href: "/#actualidad", label: "Actualidad" },
  { id: "servicios", href: "/#servicios", label: "Servicios" },
  { id: "resenias", href: "/#resenias", label: "Reseñas" },
]

const contactoLink = {
  id: "contacto",
  href: "/#contacto",
  label: "Contacto",
}

const HEADER_OFFSET_EXTRA = 12
const PENDING_SECTION_KEY = "dakini:pending-section"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const getHeaderOffset = useCallback(() => {
    return (headerRef.current?.offsetHeight ?? 56) + HEADER_OFFSET_EXTRA
  }, [])

  const scrollToSection = useCallback(
    (
      sectionId: string,
      {
        updateUrl = true,
        behavior = "smooth",
      }: { updateUrl?: boolean; behavior?: ScrollBehavior } = {},
    ) => {
      const target = document.getElementById(sectionId)

      if (!target) return false

      const top =
        target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()

      window.scrollTo({
        top: Math.max(top, 0),
        behavior,
      })

      if (updateUrl) {
        window.history.replaceState(null, "", `/#${sectionId}`)
      }

      setActiveSection(sectionId)

      return true
    },
    [getHeaderOffset],
  )

  const handleSectionNavigation = useCallback(
    (sectionId: string, href: string) => {
      setMenuOpen(false)

      if (pathname === "/") {
        scrollToSection(sectionId, { behavior: "smooth" })
        return
      }

      sessionStorage.setItem(PENDING_SECTION_KEY, sectionId)
      router.push(href)
    },
    [pathname, router, scrollToSection],
  )

  useEffect(() => {
    const { body, documentElement } = document
    const previousBodyOverflow = body.style.overflow
    const previousBodyOverscroll = body.style.overscrollBehavior
    const previousHtmlOverflow = documentElement.style.overflow

    if (menuOpen) {
      body.style.overflow = "hidden"
      body.style.overscrollBehavior = "none"
      documentElement.style.overflow = "hidden"
    }

    return () => {
      body.style.overflow = previousBodyOverflow
      body.style.overscrollBehavior = previousBodyOverscroll
      documentElement.style.overflow = previousHtmlOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const closeMenuOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false)
    }

    closeMenuOnDesktop()
    desktopQuery.addEventListener("change", closeMenuOnDesktop)

    return () => {
      desktopQuery.removeEventListener("change", closeMenuOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const pendingSection = sessionStorage.getItem(PENDING_SECTION_KEY)
    const hashSection = decodeURIComponent(window.location.hash.replace("#", ""))
    const targetSection = pendingSection || hashSection

    if (!targetSection) return

    sessionStorage.removeItem(PENDING_SECTION_KEY)

    const timeoutId = window.setTimeout(() => {
      scrollToSection(targetSection, { updateUrl: false, behavior: "auto" })
    }, 80)

    return () => window.clearTimeout(timeoutId)
  }, [pathname, scrollToSection])

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("")
      return
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + getHeaderOffset() + 8
      let currentSection = ""

      for (const link of navLinks) {
        const section = document.getElementById(link.id)

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link.id
        }
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [getHeaderOffset, pathname])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-[#E8D8C4] bg-[#FFFFFF]/95 px-5 backdrop-blur-sm lg:px-8"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Ir a inicio">
            <Image
              src="/LOGO-DAKINI-transparent.png"
              alt="Logo Dakini"
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
              priority
            />
            <span className="font-serif text-[15px] font-semibold leading-tight tracking-wide text-[#5E2A29]">
              Monasterio Budista
              <br />
              <span className="text-[11px] font-normal tracking-widest text-[#724E48]">
                SHAMBALA NORBU
              </span>
            </span>
          </Link>

          <nav className="hidden lg:block" aria-label="Navegación principal">
            <ul className="flex items-center gap-5 xl:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault()
                      handleSectionNavigation(link.id, link.href)
                    }}
                    aria-current={activeSection === link.id ? "location" : undefined}
                    className={`font-sans text-[11px] tracking-[0.12em] uppercase transition-colors ${
                      activeSection === link.id
                        ? "text-[#A72F27]"
                        : "text-[#5E2A29] hover:text-[#A72F27]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={contactoLink.href}
            onClick={(event) => {
              event.preventDefault()
              handleSectionNavigation(contactoLink.id, contactoLink.href)
            }}
            className="hidden rounded-md bg-[#A72F27] px-4 py-2.5 font-sans text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#8B2520] lg:inline-flex"
          >
            Contacto
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#5E2A29] transition-colors hover:bg-[#FBF3DC] lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#5E2A29]/10 backdrop-blur-[2px] transition-opacity duration-300 ease-out lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col border-l border-[#E8D8C4]/80 bg-[#FBF3DC]/88 px-8 pt-20 pb-10 shadow-[-18px_0_60px_-28px_rgba(94,42,41,0.6)] backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegación principal">
          <ul className="flex flex-col gap-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    handleSectionNavigation(link.id, link.href)
                  }}
                  aria-current={activeSection === link.id ? "location" : undefined}
                  className={`block border-b border-[#E8D8C4]/80 py-3 font-serif text-[16px] transition-colors ${
                    activeSection === link.id
                      ? "text-[#A72F27]"
                      : "text-[#5E2A29] hover:text-[#A72F27]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <Link
            href={contactoLink.href}
            onClick={(event) => {
              event.preventDefault()
              handleSectionNavigation(contactoLink.id, contactoLink.href)
            }}
            className="block w-full rounded-md bg-[#A72F27] py-4 text-center font-sans text-sm tracking-widest uppercase text-white transition-colors hover:bg-[#8B2520]"
          >
            Reservar estancia
          </Link>
        </div>
      </aside>
    </>
  )
}
