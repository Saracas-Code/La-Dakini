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
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="actualidad-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Noticias
        </p>
        <h2
          id="actualidad-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Actualidad del Monasterio
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {noticiaDestacada && (
          <article className="mb-6 bg-[#FFFFFF] rounded-xl overflow-hidden shadow-sm border border-[#E8D8C4]">
            <div className="relative h-44">
              <Image
                src={noticiaDestacada.img}
                alt={noticiaDestacada.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-[#A72F27]/10 px-2.5 py-1 font-sans text-[0.62rem] tracking-[0.12em] uppercase text-[#A72F27]">
                {noticiaDestacada.tipo ?? "Destacado"}
              </span>
              <time className="mt-3 block font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
                {noticiaDestacada.fecha}
              </time>
              <h3 className="mt-2 font-serif text-[#5E2A29] text-[1.08rem] font-semibold leading-snug">
                {noticiaDestacada.titulo}
              </h3>
              <p className="mt-2 font-sans text-[#724E48] text-[0.84rem] leading-relaxed">
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

        <ul className="flex flex-col gap-5">
          {noticiasListado.map((noticia) => (
            <li key={noticia.slug}>
              <article className="flex gap-4 bg-[#FFFFFF] rounded-lg overflow-hidden shadow-sm border border-[#E8D8C4]">
                {/* Thumbnail */}
                <div className="relative w-24 shrink-0">
                  <Image
                    src={noticia.img}
                    alt={noticia.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                {/* Text */}
                <div className="py-4 pr-4 flex flex-col justify-center gap-1.5">
                  <time className="font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
                    {noticia.fecha}
                  </time>
                  <h3 className="font-serif text-[#5E2A29] text-[0.85rem] font-semibold leading-snug">
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