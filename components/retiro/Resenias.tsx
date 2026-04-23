"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import ReseniaDobleCapaCard, {
  type ReseniaDobleCapa,
} from "@/components/retiro/ReseniaDobleCapaCard"

const resenias: ReseniaDobleCapa[] = [
  {
    id: 1,
    nombre: "Marisa",
    perfil: "Ama de casa",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 9,
    textoPublico:
      "Muy recomendable. Te cuidan mejor que en casa.",
    textoOculto:
      "Verás que ahora soy mundialmente famosa.",
  },
  {
    id: 2,
    nombre: "Ernesto",
    perfil: "Empresario agroalimentario",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 3,
    estrellasOcultas: 0,
    textoPublico:
      "Una experiencia… inolvidable.",
    textoOculto:
      "Irse todos a la mierda.",
  },
  {
    id: 3,
    nombre: "Pelayo",
    perfil: "Traductor turístico",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "Un espacio dónde todos nos entendemos, como si tiene que ser por señas. ¡Amo mi trabajo! ¡Amo el retiro!",
    textoOculto:
      "Yo me saqué un B1 de chino mandarín por una web baratísima y me encuentro con que aquí se habla en tibetano y en tontería mística. Aquí la gente habla de energía, de vibración, de soltar… y yo asiento todo el rato como si lo pillara. Ayer traduje ‘abre tu canal interno’ como ‘tienes que ir más al baño’, que no sé si tiene algo que ver, pero coló. Aun así, sitio precioso, ambiente increíble y gente muy maja, que siempre ayuda. Estoy bien. Creo.",
  },
  {
    id: 4,
    nombre: "Carla",
    perfil: "Influencer experta en marketing",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 4,
    textoPublico:
      "Un lugar mágico para reconectar y volver renovada. Me noto hasta el cutis más depurado.",
    textoOculto:
      "No sabéis lo guay que me hubiese quedado el vlog para youtube si esta gente me hubiese dejado sacar el móvil más. Esto es contenido puro. O sea, hay momentos aquí que si no los grabas es un crimen. La luz, los monjes, la señora esa que ahora es como una diosa manchega… es que es perfecto. También os digo: hay mucho loco espiritual, pero del interesante, del que te da engagement. Yo os voy grabando todo de estrangis, porque por mis followers lo que sea. OS SUPER AMO.",
  },
  {
    id: 5,
    nombre: "Luis",
    perfil: "Ex sacerdote",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 4,
    estrellasOcultas: 5,
    textoPublico:
      "Puede que este lugar sea mi último recurso para mi salvación.",
    textoOculto:
      "Hay momentos en la vida en los que pierdes el rumbo y el sentido de tu vida. Que necesitas deconstruirte para volver más fuerte y yo necesitaba salir de mi zona de confort para salir de este agujero negro. He conocido a una mujer llamada Marisa con una sabiduría excepcional y que me entiende… No sé si he recuperado la fe, pero al menos ya no me da tanta vergüenza no tenerla.",
  },
  {
    id: 6,
    nombre: "Rebeca",
    perfil: "Comercial divorciada",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 5,
    textoPublico:
      "Estoy descubriendo lo que es la meditación y me flipa!",
    textoOculto:
      "Yo venía con expectativas muy concretas y ninguna incluía encontrarme a mí misma, pero oye… ha pasado. Aquí no hay bares, no hay hombres con pelo y aún así te acabas poniendo cachonda emocionalmente, que es peor. Mucho tiempo para pensar, mucho silencio… y Alba mirándome raro. No sé. Algo se ha movido. Y no ha sido solo la energía.",
  },
  {
    id: 7,
    nombre: "Alba",
    perfil: "Administrativa divorciada",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "Un viaje hacia dentro… aunque dé miedo",
    textoOculto:
      "A la mierda con todo. ¡Yo ya no quiero más hombres, yo la quiero a ella y de esta no se me va a escapar!",
  },
  {
    id: 8,
    nombre: "María",
    perfil: "Recién casada",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 7,
    textoPublico:
      "Mejor que la luna de miel!",
    textoOculto:
      "QUE LE QUIERO, LE QUIERO, LE QUIERO Y QUIERO GRITARLO POR TODO EL TIBET!!!!! ES EL HOMBRE DE MI VIDAAAA!! Tengo una sorpresita que le va a hacer super feliz. ",
  },
  {
    id: 9,
    nombre: "Pablo",
    perfil: "Recién casado",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 4,
    textoPublico:
      "Muy recomendable para reconectar con lo esencial.",
    textoOculto:
      "María está mega feliz… pero igual estaría bien tener alguna clasecilla por separado… Aún así el retiro genial y nosotros genial también. Todo genial.",
  },
  {
    id: 10,
    nombre: "Oliver",
    perfil: "Creativo freelance",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 4,
    estrellasOcultas: 5,
    textoPublico:
      "Un entorno perfecto para expandir tu conocimiento y abrir tu mente. Buenas clases de yoga.",
    textoOculto:
      "Esto no es un retiro, esto es un portal. Aquí se está moviendo una energía muy concreta, muy elevada, muy sensual incluso. Yo ya venía trabajado de casa, pero aquí he encontrado un nivel de apertura bastante interesante. Hay personas con mucho potencial, otras más cerradas… y alguna que otra que está claramente lista para evolucionar conmigo. No voy a señalar, pero se sabe.",
  },
]

export default function Resenias() {
  const carouselId = useId()
  const carouselRef = useRef<HTMLUListElement | null>(null)
  const cardRefs = useRef<Array<HTMLElement | null>>([])
  const prefersReducedMotionRef = useRef(false)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [alturaReposo, setAlturaReposo] = useState<number | null>(null)
  const [reseniasVerdadActivas, setReseniasVerdadActivas] = useState<number[]>(
    [],
  )

  const updateRestHeight = useCallback(() => {
    if (reseniasVerdadActivas.length > 0) return

    const alturas = cardRefs.current
      .map((card) => card?.getBoundingClientRect().height ?? 0)
      .filter(Boolean)

    if (alturas.length === 0) return

    setAlturaReposo(Math.ceil(Math.max(...alturas)))
  }, [reseniasVerdadActivas.length])

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current

    if (!carousel) return

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth

    setCanScrollPrev(carousel.scrollLeft > 8)
    setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 8)
  }, [])

  const getScrollStep = useCallback(() => {
    const carousel = carouselRef.current

    if (!carousel) return 0

    const firstSlide = carousel.querySelector<HTMLElement>("[data-carousel-item='true']")
    const styles = window.getComputedStyle(carousel)
    const gap = Number.parseFloat(styles.gap || styles.columnGap || "0")

    return (firstSlide?.offsetWidth ?? carousel.clientWidth * 0.86) + gap
  }, [])

  const scrollByStep = useCallback(
    (direction: "prev" | "next") => {
      const carousel = carouselRef.current

      if (!carousel) return

      const step = getScrollStep()

      carousel.scrollBy({
        left: direction === "next" ? step : -step,
        behavior: prefersReducedMotionRef.current ? "auto" : "smooth",
      })
    },
    [getScrollStep],
  )

  const handleCarouselKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLUListElement>) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollByStep("next")
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollByStep("prev")
      }
    },
    [scrollByStep],
  )

  const toggleVerdad = useCallback((reseniaId: number) => {
    setReseniasVerdadActivas((actuales) =>
      actuales.includes(reseniaId)
        ? actuales.filter((id) => id !== reseniaId)
        : [...actuales, reseniaId],
    )
  }, [])

  const setCardRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      cardRefs.current[index] = node
    },
    [],
  )

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    updateScrollState()

    const carousel = carouselRef.current

    if (!carousel) return

    const handleScroll = () => updateScrollState()

    carousel.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      carousel.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      updateRestHeight()
    })

    const handleResize = () => {
      window.requestAnimationFrame(() => {
        updateRestHeight()
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
    }
  }, [updateRestHeight])

  return (
    <section
      id="resenias"
      className="bg-[#FFFFFF] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="resenias-title"
    >
      {/* Header */}
      <div className="mx-auto max-w-sm md:max-w-3xl lg:max-w-6xl">
        <div className="mb-10 text-center md:max-w-2xl md:text-left lg:mb-12 lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div>
            <p className="mb-2 font-sans text-[11px] tracking-[0.2em] text-[#A72F27] uppercase">
              Voces de nuestra comunidad
            </p>
            <h2
              id="resenias-title"
              className="font-serif text-[28px] leading-snug text-[#5E2A29] text-balance md:text-3xl"
            >
              Reseñas
            </h2>
            <div className="mx-auto mt-4 h-px w-8 bg-[#A72F27] md:mx-0" />
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => scrollByStep("prev")}
              aria-label="Ver reseñas anteriores"
              aria-controls={carouselId}
              disabled={!canScrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8C4] bg-[#FBF3DC] text-[#5E2A29] transition-colors hover:bg-[#F3E8D3] disabled:cursor-not-allowed disabled:opacity-45"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByStep("next")}
              aria-label="Ver más reseñas"
              aria-controls={carouselId}
              disabled={!canScrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8C4] bg-[#FBF3DC] text-[#5E2A29] transition-colors hover:bg-[#F3E8D3] disabled:cursor-not-allowed disabled:opacity-45"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Carrusel de reseñas"
          className="relative"
        >
          <ul
            id={carouselId}
            ref={carouselRef}
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
            className="flex items-start snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A72F27]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {resenias.map((resenia, index) => (
              <li
                key={resenia.id}
                role="group"
                aria-roledescription="slide"
                data-carousel-item="true"
                aria-label={`Reseña ${index + 1} de ${resenias.length}`}
                className="flex min-w-0 shrink-0 basis-[88%] snap-start sm:basis-[72%] md:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
              >
                <ReseniaDobleCapaCard
                  resenia={resenia}
                  mostrarVerdad={reseniasVerdadActivas.includes(resenia.id)}
                  onToggleVerdad={() => toggleVerdad(resenia.id)}
                  alturaReposo={alturaReposo}
                  cardRef={setCardRef(index)}
                />
              </li>
            ))}
          </ul>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#FFFFFF]/68 via-[#FFFFFF]/26 to-transparent transition-opacity duration-300 md:w-14 ${
              canScrollPrev ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#FFFFFF]/68 via-[#FFFFFF]/26 to-transparent transition-opacity duration-300 md:w-14 ${
              canScrollNext ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  )
}
