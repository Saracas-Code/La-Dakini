"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Mail, Phone } from "lucide-react"

declare global {
  interface Window {
    google?: any
    __googleMapsScriptLoading?: Promise<void>
  }
}

const MAP_CENTER = { lat: 32.65, lng: 80.30 }
const MAPS_LINK = "https://www.google.com/maps?q=32.65,80.30"

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.google?.maps) return Promise.resolve()
  if (window.__googleMapsScriptLoading) return window.__googleMapsScriptLoading

  window.__googleMapsScriptLoading = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-google-maps='true']",
    )

    if (existingScript) {
      if (window.google?.maps) {
        resolve()
        return
      }

      existingScript.addEventListener("load", () => resolve(), { once: true })
      existingScript.addEventListener(
        "error",
        () => reject(new Error("No se pudo cargar Google Maps")),
        { once: true },
      )
      return
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`
    script.async = true
    script.defer = true
    script.dataset.googleMaps = "true"
    script.addEventListener("load", () => resolve(), { once: true })
    script.addEventListener(
      "error",
      () => reject(new Error("No se pudo cargar Google Maps")),
      { once: true },
    )
    document.body.appendChild(script)
  })

  return window.__googleMapsScriptLoading
}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)
  const [mapLoading, setMapLoading] = useState(true)
  const [mapError, setMapError] = useState(false)

  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<any>(null)
  const markerListenerRef = useRef<any>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  useEffect(() => {
    let cancelled = false

    const initMap = () => {
      if (!mapRef.current || !window.google?.maps || mapInstanceRef.current) return

      const map = new window.google.maps.Map(mapRef.current, {
        center: MAP_CENTER,
        zoom: 8,
        draggable: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        gestureHandling: "greedy",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      })

      const marker = new window.google.maps.Marker({
        position: MAP_CENTER,
        map,
        title: "Monasterio Shambala Norbu",
      })

      markerListenerRef.current = marker.addListener("click", () => {
        window.open(MAPS_LINK, "_blank", "noopener,noreferrer")
      })

      mapInstanceRef.current = map

      if (!cancelled) {
        setMapError(false)
        setMapLoading(false)
      }
    }

    async function setupMap() {
      const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY

      if (!apiKey) {
        if (!cancelled) {
          setMapError(true)
          setMapLoading(false)
        }
        return
      }

      try {
        if (window.google?.maps) {
          initMap()
          return
        }

        await loadGoogleMapsScript(apiKey)

        if (cancelled) return

        initMap()

        if (!mapInstanceRef.current) {
          setMapError(true)
          setMapLoading(false)
        }
      } catch (error) {
        console.error("Error al cargar o inicializar Google Maps:", error)
        if (!cancelled) {
          setMapError(true)
          setMapLoading(false)
        }
      }
    }

    setupMap()

    return () => {
      cancelled = true
      if (markerListenerRef.current && window.google?.maps?.event) {
        window.google.maps.event.removeListener(markerListenerRef.current)
      }
    }
  }, [])

  return (
    <section
      id="contacto"
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Escríbenos
        </p>
        <h2
          id="contacto-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Conectar Con Nosotros
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {/* Contact Form */}
        {enviado ? (
          <div className="bg-[#FFFFFF] rounded-lg p-8 text-center border border-[#E8D8C4] mb-8">
            <div className="text-[#A72F27] text-3xl mb-3 font-serif">🙏</div>
            <h3 className="font-serif text-[#5E2A29] text-lg font-semibold mb-2">
              ¡Gracias por tu mensaje!
            </h3>
            <p className="font-sans text-[#724E48] text-sm leading-relaxed">
              Nos pondremos en contacto contigo a la mayor brevedad. Que el Dharma ilumine tu camino.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="correo" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                value={form.correo}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensaje" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A72F27] text-white font-sans text-sm tracking-widest uppercase py-4 rounded-md hover:bg-[#8B2520] active:scale-95 transition-all mt-2 shadow-sm"
            >
              Enviar Mensaje
            </button>
          </form>
        )}

        {/* Embedded Google Map */}
        <div className="relative mb-3 overflow-hidden rounded-xl border border-[#E8D8C4] shadow-sm">
          <div
            ref={mapRef}
            className="h-[350px] w-full sm:h-[380px] bg-[#F3E8D3]"
          />

          {mapLoading && !mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FBF3DC]/70 backdrop-blur-[1px]">
              <p className="font-sans text-[0.78rem] tracking-[0.08em] uppercase text-[#724E48]">
                Cargando ubicación...
              </p>
            </div>
          )}

          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#F3E8D3]">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-[#A72F27]/30 bg-[#FFFFFF] px-4 py-2 font-sans text-[0.72rem] tracking-[0.12em] uppercase text-[#A72F27] hover:bg-[#FDF7EA] transition-colors"
              >
                VER UBICACIÓN
              </a>
            </div>
          )}
        </div>

        <div className="mb-8">
          <p className="font-sans text-[0.8rem] leading-relaxed text-[#724E48]">
            Valle de Nyima, Prefectura de Ngari (Ali), Altiplano Tibetano
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: <Phone size={16} className="shrink-0" />,
              text: "+86 897 245 18 62",
            },
            {
              icon: <Mail size={16} className="shrink-0" />,
              text: "info@centrodharmakaruna.org",
            },
            {
              icon: <Clock size={16} className="shrink-0" />,
              text: "Horario de visita: Lun-Dom · 9:00 – 17:30",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-[#5E2A29]">
              <span className="text-[#A72F27]">{item.icon}</span>
              <span className="font-sans text-[0.82rem] leading-relaxed text-[#724E48]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
