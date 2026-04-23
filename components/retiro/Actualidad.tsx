import Image from "next/image"
import Link from "next/link"

import { noticias } from "@/lib/noticias"

export default function Actualidad() {
  const noticiaDestacada = noticias.find((noticia) => noticia.destacada)
  const noticiasListado = noticiaDestacada
    ? noticias.filter((noticia) => noticia.slug !== noticiaDestacada.slug)
    : noticias

  return (
    <section
      id="actualidad"
      className="bg-[#FBF3DC] px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="actualidad-title"
    >
      <div className="mx-auto max-w-sm md:max-w-2xl lg:max-w-6xl">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Noticias
        </p>
        <h2
          id="actualidad-title"
          className="mb-5 max-w-2xl font-serif text-2xl font-semibold leading-snug text-[#A72F27] text-balance md:text-3xl"
        >
          Actualidad del Monasterio
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {noticiaDestacada && (
          <article className="mb-6 overflow-hidden rounded-xl border border-[#E8D8C4] bg-[#FFFFFF] shadow-sm lg:mb-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
            <div className="relative h-44 md:h-64 lg:h-auto lg:min-h-[360px]">
              <Image
                src={noticiaDestacada.img}
                alt={noticiaDestacada.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 52vw"
              />
            </div>
            <div className="flex flex-col justify-center p-5 md:p-7 lg:p-8">
              <span className="inline-flex items-center rounded-full bg-[#A72F27]/10 px-2.5 py-1 font-sans text-[0.62rem] tracking-[0.12em] uppercase text-[#A72F27]">
                {noticiaDestacada.tipo ?? "Destacado"}
              </span>
              <time className="mt-3 block font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
                {noticiaDestacada.fecha}
              </time>
              <h3 className="mt-2 font-serif text-[1.08rem] font-semibold leading-snug text-[#5E2A29] text-balance md:text-[1.35rem]">
                {noticiaDestacada.titulo}
              </h3>
              <p className="mt-2 font-sans text-[0.84rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
                {noticiaDestacada.extracto}
              </p>
              <Link
                href={`/noticias/${noticiaDestacada.slug}`}
                className="mt-3 inline-flex w-fit items-center text-[0.72rem] font-sans tracking-[0.15em] uppercase text-[#A72F27] underline underline-offset-2 hover:text-[#8B2520] transition-colors"
              >
                Leer más
              </Link>
            </div>
          </article>
        )}

        <ul className="grid gap-5 md:grid-cols-2">
          {noticiasListado.map((noticia) => (
            <li key={noticia.slug}>
              <article className="flex h-full gap-4 overflow-hidden rounded-lg border border-[#E8D8C4] bg-[#FFFFFF] shadow-sm">
                {/* Thumbnail */}
                <div className="relative w-24 shrink-0 md:w-32 lg:w-36">
                  <Image
                    src={noticia.img}
                    alt={noticia.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 144px"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center gap-1.5 py-4 pr-4">
                  <time className="font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
                    {noticia.fecha}
                  </time>
                  <h3 className="font-serif text-[0.85rem] font-semibold leading-snug text-[#5E2A29] text-balance lg:text-[0.95rem]">
                    {noticia.titulo}
                  </h3>
                  <p className="font-sans text-[#724E48] text-[0.78rem] leading-relaxed line-clamp-2">
                    {noticia.extracto}
                  </p>
                  <Link
                    href={`/noticias/${noticia.slug}`}
                    className="mt-1 inline-flex w-fit items-center text-[0.72rem] font-sans tracking-[0.15em] uppercase text-[#A72F27] underline underline-offset-2 hover:text-[#8B2520] transition-colors"
                  >
                    Leer más
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
