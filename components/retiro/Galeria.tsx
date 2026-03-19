"use client"

import Image from "next/image"
import { useState } from "react"

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Sala de meditación con cojines y altar budista",
    caption: "Sala de Meditación",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Sendero del bosque hacia el monasterio en la neblina matutina",
    caption: "Sendero del Bosque",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Ceremonia religiosa con lámparas de mantequilla",
    caption: "Ceremonia Sagrada",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Practicante de yoga tibetano al amanecer con banderas de oración",
    caption: "Yoga Tibetano",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Cuencos tibetanos y objetos rituales de meditación",
    caption: "Cuencos de Cristal",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Patio del monasterio con estupa y banderas de oración",
    caption: "Patio del Monasterio",
  },
]

export default function Galeria() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="galeria"
      className="bg-[#FFFFFF] px-6 py-16"
      aria-labelledby="galeria-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Nuestra Vida
        </p>
        <h2
          id="galeria-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Retiro Momentos
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {/* 2×3 grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-md overflow-hidden border border-[#E8D8C4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(i)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              role="img"
              aria-label={item.alt}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out"
                style={{ transform: hoveredIndex === i ? "scale(1.06)" : "scale(1)" }}
                sizes="(max-width: 640px) 50vw, 300px"
              />
              {/* Caption overlay */}
              <div
                className="absolute inset-0 bg-[#5E2A29]/60 flex items-end p-2.5 transition-opacity duration-300"
                style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                aria-hidden="true"
              >
                <span className="font-sans text-[#FBF3DC] text-[10px] tracking-wider uppercase">
                  {item.caption}
                </span>
              </div>
              {/* Always-visible subtle caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5E2A29]/50 to-transparent px-2.5 py-2.5 flex items-end"
                style={{ opacity: hoveredIndex === i ? 0 : 1 }}
                aria-hidden="true"
              >
                <span className="font-sans text-[#FBF3DC] text-[9px] tracking-wider uppercase">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
