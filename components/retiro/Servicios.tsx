import Image from "next/image"
import Link from "next/link"

import {
  serviciosPrincipales,
  serviciosSecundarios,
} from "@/lib/servicios"

const servicioPrincipal = serviciosPrincipales[0]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-[#FFFFFF] px-6 py-16"
      aria-labelledby="servicios-title"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27]">
          Lo Que Ofrecemos
        </p>
        <h2
          id="servicios-title"
          className="mb-5 max-w-2xl font-serif text-2xl font-semibold leading-snug text-[#A72F27] text-balance md:text-3xl"
        >
          Nuestras Ofrendas
        </h2>
        <div className="mb-8 h-[2px] w-8 bg-[#A72F27]" aria-hidden="true" />

        <article className="relative overflow-hidden rounded-[1.75rem] border border-[#E8D8C4] bg-gradient-to-br from-[#FBF3DC] via-[#FFF8EE] to-[#F6E9D6] shadow-[0_24px_70px_-42px_rgba(94,42,41,0.55)]">
          <div
            className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-[#A72F27]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[#5E2A29]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-[#A72F27]/15 bg-[#FFFFFF]/75 px-3 py-1 font-sans text-[0.62rem] tracking-[0.14em] uppercase text-[#A72F27] backdrop-blur-sm">
                {servicioPrincipal.etiqueta}
              </span>

              <h3 className="mt-4 max-w-2xl font-serif text-[1.14rem] font-semibold leading-snug text-[#5E2A29] text-balance sm:text-[1.2rem]">
                {servicioPrincipal.titulo}
              </h3>

              <p className="mt-3 max-w-2xl font-sans text-[0.84rem] leading-relaxed text-[#724E48]">
                {servicioPrincipal.resumen}
              </p>

              <Link
                href={`/servicios/${servicioPrincipal.slug}`}
                className="mt-5 inline-flex w-fit items-center text-[0.72rem] font-sans tracking-[0.15em] uppercase text-[#A72F27] underline underline-offset-2 transition-colors hover:text-[#8B2520]"
              >
                Leer más
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27]">
              Prácticas que sostienen el camino
            </p>
            <h3 className="mt-2 font-serif text-[1.08rem] font-semibold leading-snug text-[#5E2A29] text-balance">
              Otras experiencias esenciales del retiro
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 lg:grid-cols-3">
            {serviciosSecundarios.map((servicio) => (
              <div
                key={servicio.titulo}
                className="group relative aspect-square overflow-hidden rounded-md border border-[#E8D8C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A72F27]/35"
                tabIndex={0}
                role="img"
                aria-label={servicio.alt}
              >
                <Image
                  src={servicio.imagen}
                  alt={servicio.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, 240px"
                />
                <div
                  className="absolute inset-0 flex items-end bg-[#5E2A29]/60 p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <span className="font-sans text-[10px] tracking-wider uppercase text-[#FBF3DC]">
                    {servicio.titulo}
                  </span>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-end bg-gradient-to-t from-[#5E2A29]/50 to-transparent px-2.5 py-2.5 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
                  aria-hidden="true"
                >
                  <span className="font-sans text-[9px] tracking-wider uppercase text-[#FBF3DC]">
                    {servicio.titulo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
