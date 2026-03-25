import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import Footer from "@/components/retiro/Footer"
import Header from "@/components/retiro/Header"
import {
  getNoticiaBySlug,
  getNoticiaIndexBySlug,
  noticias,
} from "@/lib/noticias"

type DetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }))
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const noticia = getNoticiaBySlug(slug)

  if (!noticia) {
    return {
      title: "Noticia no encontrada | Centro Dharma Karuna",
    }
  }

  return {
    title: `${noticia.titulo} | Centro Dharma Karuna`,
    description: noticia.extracto,
  }
}

export default async function NoticiaDetallePage({ params }: DetailPageProps) {
  const { slug } = await params
  const noticia = getNoticiaBySlug(slug)

  if (!noticia) {
    notFound()
  }

  const noticiaIndex = getNoticiaIndexBySlug(slug)
  const noticiaAnterior = noticiaIndex > 0 ? noticias[noticiaIndex - 1] : null
  const noticiaSiguiente =
    noticiaIndex < noticias.length - 1 ? noticias[noticiaIndex + 1] : null

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="bg-[#FBF3DC] px-6 pt-20 pb-16">
        <article className="max-w-3xl mx-auto rounded-xl border border-[#E8D8C4] bg-[#FFFFFF] shadow-sm overflow-hidden">
          <div className="relative h-56 sm:h-72">
            <Image
              src={noticia.img}
              alt={noticia.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <Link
              href="/#actualidad"
              className="inline-flex items-center text-[0.72rem] font-sans tracking-[0.15em] uppercase text-[#A72F27] underline underline-offset-2 hover:text-[#8B2520] transition-colors"
            >
              ← Volver
            </Link>

            <time className="mt-4 block font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
              {noticia.fecha}
            </time>

            <h1 className="mt-2 font-serif text-[#5E2A29] text-2xl sm:text-3xl font-semibold leading-tight">
              {noticia.titulo}
            </h1>

            <div className="mt-5 h-[2px] w-10 bg-[#A72F27]" aria-hidden="true" />

            <div className="mt-6 space-y-4">
              {noticia.contenido.map((parrafo, index) => (
                <p
                  key={`${noticia.slug}-parrafo-${index}`}
                  className="font-sans text-[#724E48] text-[0.95rem] leading-relaxed"
                >
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </article>

        <nav
          className="max-w-3xl mx-auto mt-8 grid grid-cols-2 items-center"
          aria-label="Navegación entre noticias"
        >
          {noticiaAnterior ? (
            <Link
              href={`/noticias/${noticiaAnterior.slug}`}
              className="justify-self-start inline-flex items-center font-sans text-[0.72rem] tracking-[0.12em] uppercase text-[#5E2A29] underline underline-offset-2 hover:text-[#A72F27] transition-colors"
            >
              ← Anterior
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {noticiaSiguiente ? (
            <Link
              href={`/noticias/${noticiaSiguiente.slug}`}
              className="justify-self-end inline-flex items-center font-sans text-[0.72rem] tracking-[0.12em] uppercase text-[#5E2A29] underline underline-offset-2 hover:text-[#A72F27] transition-colors"
            >
              Siguiente →
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      </main>

      <Footer />
    </div>
  )
}
