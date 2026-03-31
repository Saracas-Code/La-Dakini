import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import Footer from "@/components/retiro/Footer"
import Header from "@/components/retiro/Header"
import {
  getServicioPrincipalBySlug,
  getServicioPrincipalIndexBySlug,
  serviciosPrincipales,
} from "@/lib/servicios"

type DetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviciosPrincipales.map((servicio) => ({
    slug: servicio.slug,
  }))
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const servicio = getServicioPrincipalBySlug(slug)

  if (!servicio) {
    return {
      title: "Servicio no encontrado | Centro Dharma Karuna",
    }
  }

  return {
    title: `${servicio.titulo} | Centro Dharma Karuna`,
    description: servicio.resumen,
  }
}

export default async function ServicioDetallePage({
  params,
}: DetailPageProps) {
  const { slug } = await params
  const servicio = getServicioPrincipalBySlug(slug)

  if (!servicio) {
    notFound()
  }

  const servicioIndex = getServicioPrincipalIndexBySlug(slug)
  const servicioAnterior =
    servicioIndex < serviciosPrincipales.length - 1
      ? serviciosPrincipales[servicioIndex + 1]
      : null
  const servicioSiguiente =
    servicioIndex > 0 ? serviciosPrincipales[servicioIndex - 1] : null

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="bg-[#FBF3DC] px-6 pt-20 pb-16">
        <article className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#E8D8C4] bg-[#FFFFFF] shadow-sm">
          <div className="relative h-56 sm:h-72">
            <Image
              src={servicio.img}
              alt={servicio.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <Link
              href="/#servicios"
              className="inline-flex items-center text-[0.72rem] font-sans tracking-[0.15em] uppercase text-[#A72F27] underline underline-offset-2 transition-colors hover:text-[#8B2520]"
            >
              ← Volver
            </Link>

            <p className="mt-4 font-sans text-[10px] tracking-wider uppercase text-[#A72F27]">
              {servicio.etiqueta}
            </p>
            <p className="mt-2 font-sans text-[0.7rem] tracking-[0.12em] uppercase text-[#724E48]">
              {servicio.categoria}
            </p>

            <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#5E2A29] sm:text-3xl">
              {servicio.titulo}
            </h1>

            <div className="mt-5 h-[2px] w-10 bg-[#A72F27]" aria-hidden="true" />

            <div className="mt-6 space-y-4">
              {servicio.introduccion.map((parrafo, index) => (
                <p
                  key={`${servicio.slug}-introduccion-${index}`}
                  className="font-sans text-[0.95rem] leading-relaxed text-[#724E48]"
                >
                  {parrafo}
                </p>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="font-serif text-[1.15rem] font-semibold text-[#5E2A29]">
                Indicado para participantes con:
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {servicio.indicaciones.map((indicacion) => (
                  <li
                    key={indicacion}
                    className="flex items-start gap-3 rounded-2xl border border-[#E8D8C4] bg-[#FBF3DC] px-4 py-3 font-sans text-[0.88rem] leading-7 text-[#5E2A29]"
                  >
                    <span
                      className="mt-[0.68rem] h-1.5 w-1.5 rounded-full bg-[#A72F27]"
                      aria-hidden="true"
                    />
                    <span>{indicacion}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-serif text-[1.15rem] font-semibold text-[#5E2A29]">
                Según el caso, el proceso puede incluir:
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {servicio.protocolos.map((protocolo) => (
                  <li
                    key={protocolo}
                    className="rounded-2xl border border-[#E8D8C4] bg-[#FFFFFF] px-4 py-3 font-sans text-[0.88rem] leading-7 text-[#724E48]"
                  >
                    {protocolo}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8">
              <section className="rounded-[1.45rem] border border-[#5E2A29] bg-[#5E2A29] p-5 shadow-sm">
                <p className="font-sans text-[0.7rem] tracking-[0.16em] uppercase text-[#FBF3DC]">
                  Importante
                </p>
                <p className="mt-3 font-sans text-[0.9rem] leading-7 text-[#FBF3DC]/90">
                  {servicio.importante}
                </p>
              </section>

              <p className="mt-6 border-t border-[#E8D8C4] pt-5 font-serif text-[0.71rem] italic leading-6 text-[#724E48]">
                <span className="font-semibold text-[#5E2A29] not-italic">
                  Nota para participantes:
                </span>{" "}
                {servicio.nota}
              </p>
            </div>
          </div>
        </article>

        {(servicioAnterior || servicioSiguiente) && (
          <nav
            className="mx-auto mt-8 grid max-w-3xl grid-cols-2 items-center"
            aria-label="Navegación entre servicios"
          >
            {servicioAnterior ? (
              <Link
                href={`/servicios/${servicioAnterior.slug}`}
                className="justify-self-start inline-flex items-center font-sans text-[0.72rem] tracking-[0.12em] uppercase text-[#5E2A29] underline underline-offset-2 transition-colors hover:text-[#A72F27]"
              >
                ← Anterior
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}

            {servicioSiguiente ? (
              <Link
                href={`/servicios/${servicioSiguiente.slug}`}
                className="justify-self-end inline-flex items-center font-sans text-[0.72rem] tracking-[0.12em] uppercase text-[#5E2A29] underline underline-offset-2 transition-colors hover:text-[#A72F27]"
              >
                Siguiente →
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </nav>
        )}
      </main>

      <Footer />
    </div>
  )
}
