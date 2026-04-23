"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

export type ReseniaDobleCapa = {
  id: number
  nombre: string
  perfil: string
  fotoPerfil: string
  textoPublico: string
  textoOculto: string
  estrellasPublicas: number
  estrellasOcultas: number
}

const BASE_STARS = 5

function StarIcon({ color, filled = true }: { color: string; filled?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={filled ? undefined : 1.2}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 1L8.545 5.09H13L9.5 7.6L10.91 12L7 9.32L3.09 12L4.5 7.6L1 5.09H5.455L7 1Z" />
    </svg>
  )
}

function StarRating({
  value,
  filledColor,
  emptyColor,
  overflowColor,
  className,
}: {
  value: number
  filledColor: string
  emptyColor: string
  overflowColor: string
  className?: string
}) {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0
  const filled = Math.min(safeValue, BASE_STARS)
  const empty = BASE_STARS - filled
  const overflow = Math.max(0, safeValue - BASE_STARS)

  return (
    <div
      className={`flex flex-col items-start gap-1 ${className ?? ""}`.trim()}
      aria-label={`${safeValue} estrellas`}
    >
      <div className="flex flex-wrap gap-0.5">
        {Array.from({ length: filled }).map((_, i) => (
          <StarIcon key={`filled-${i}`} color={filledColor} />
        ))}
        {Array.from({ length: empty }).map((_, i) => (
          <StarIcon key={`empty-${i}`} color={emptyColor} filled={false} />
        ))}
      </div>

      {overflow > 0 ? (
        <div className="flex flex-wrap gap-0.5">
          {Array.from({ length: overflow }).map((_, i) => (
            <StarIcon key={`overflow-${i}`} color={overflowColor} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ReseniaFace({
  resenia,
  mostrarVerdad,
  onToggleVerdad,
  interactiva = true,
}: {
  resenia: ReseniaDobleCapa
  mostrarVerdad: boolean
  onToggleVerdad?: () => void
  interactiva?: boolean
}) {
  const estrellas = mostrarVerdad
    ? resenia.estrellasOcultas
    : resenia.estrellasPublicas

  const texto = mostrarVerdad ? resenia.textoOculto : resenia.textoPublico
  const accion = mostrarVerdad ? "Ocultar verdad" : "Ver la verdad"

  return (
    <div
      className={`flex h-full w-full flex-col gap-4 rounded-xl border p-5 transition-colors duration-300 ease-out ${
        mostrarVerdad
          ? "border-[#5E2A29] bg-[#5E2A29]"
          : "border-[#E8D8C4] bg-[#FBF3DC]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <StarRating
          value={estrellas}
          filledColor={mostrarVerdad ? "#FBF3DC" : "#A72F27"}
          emptyColor={mostrarVerdad ? "#9E7B79" : "#C49A98"}
          overflowColor={mostrarVerdad ? "#F2C14D" : "#E3A436"}
          className="shrink-0"
        />

        {interactiva ? (
          <button
            type="button"
            onClick={onToggleVerdad}
            aria-pressed={mostrarVerdad}
            className={`shrink-0 text-right font-sans text-[11px] leading-none tracking-[0.08em] uppercase underline underline-offset-2 transition-colors ${
              mostrarVerdad
                ? "text-[#FBF3DC]/88 hover:text-[#FBF3DC]"
                : "text-[#A72F27] hover:text-[#8B2520]"
            }`}
          >
            {accion}
          </button>
        ) : (
          <span className="shrink-0 text-right font-sans text-[11px] leading-none tracking-[0.08em] uppercase opacity-0">
            {accion}
          </span>
        )}
      </div>

      <blockquote
        className={`font-sans text-[15px] leading-relaxed transition-colors duration-300 ${
          mostrarVerdad ? "text-[#FBF3DC]" : "text-[#5E2A29]"
        }`}
      >
        &ldquo;{texto}&rdquo;
      </blockquote>

      <div
        className={`mt-auto border-t pt-1 transition-colors duration-300 ${
          mostrarVerdad ? "border-[#FBF3DC]/20" : "border-[#E8D8C4]"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-full border transition-colors duration-300 ${
              mostrarVerdad
                ? "border-[#FBF3DC]/20 bg-[#724E48]"
                : "border-[#E8D8C4] bg-[#FFFFFF]"
            }`}
          >
            <Image
              src={resenia.fotoPerfil}
              alt={`Foto de perfil de ${resenia.nombre}`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="min-w-0">
            <p
              className={`font-sans text-[13px] font-semibold transition-colors duration-300 ${
                mostrarVerdad ? "text-[#FBF3DC]" : "text-[#5E2A29]"
              }`}
            >
              {resenia.nombre}
            </p>
            <p
              className={`mt-0.5 font-sans text-[11px] leading-snug transition-colors duration-300 ${
                mostrarVerdad ? "text-[#FBF3DC]/72" : "text-[#7B5A55]"
              }`}
            >
              {resenia.perfil}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReseniaDobleCapaCard({
  resenia,
  mostrarVerdad,
  onToggleVerdad,
  alturaReposo,
  cardRef,
}: {
  resenia: ReseniaDobleCapa
  mostrarVerdad: boolean
  onToggleVerdad: () => void
  alturaReposo: number | null
  cardRef?: (node: HTMLElement | null) => void
}) {
  const caraPublicaRef = useRef<HTMLDivElement | null>(null)
  const caraVerdadRef = useRef<HTMLDivElement | null>(null)
  const [alturaPublica, setAlturaPublica] = useState<number | null>(null)
  const [alturaVerdad, setAlturaVerdad] = useState<number | null>(null)

  const updatePublicHeight = useCallback(() => {
    const node = caraPublicaRef.current

    if (!node) return

    setAlturaPublica(Math.ceil(node.getBoundingClientRect().height))
  }, [])

  const updateTruthHeight = useCallback(() => {
    const node = caraVerdadRef.current

    if (!node) return

    setAlturaVerdad(Math.ceil(node.getBoundingClientRect().height))
  }, [])

  useEffect(() => {
    updatePublicHeight()
    updateTruthHeight()

    const publicNode = caraPublicaRef.current
    const truthNode = caraVerdadRef.current

    if (
      (!publicNode && !truthNode) ||
      typeof ResizeObserver === "undefined"
    ) {
      return
    }

    const observer = new ResizeObserver(() => {
      updatePublicHeight()
      updateTruthHeight()
    })

    if (publicNode) observer.observe(publicNode)
    if (truthNode) observer.observe(truthNode)

    return () => observer.disconnect()
  }, [updatePublicHeight, updateTruthHeight])

  const alturaBase = Math.max(alturaReposo ?? 0, alturaPublica ?? 0) || null
  const alturaTarjeta =
    Math.max(alturaBase ?? 0, mostrarVerdad ? alturaVerdad ?? 0 : 0) || null

  return (
    <article
      style={alturaTarjeta ? { height: `${alturaTarjeta}px` } : undefined}
      className="relative w-full transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [perspective:1200px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [transform-style:preserve-3d] ${
          mostrarVerdad ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          aria-hidden={mostrarVerdad}
          className={`h-full w-full [backface-visibility:hidden] ${
            mostrarVerdad ? "pointer-events-none" : ""
          }`}
        >
          <ReseniaFace
            resenia={resenia}
            mostrarVerdad={false}
            onToggleVerdad={onToggleVerdad}
          />
        </div>

        <div
          aria-hidden={!mostrarVerdad}
          className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            mostrarVerdad ? "" : "pointer-events-none"
          }`}
        >
          <ReseniaFace
            resenia={resenia}
            mostrarVerdad
            onToggleVerdad={onToggleVerdad}
          />
        </div>
      </div>

      <div
        ref={(node) => {
          caraPublicaRef.current = node
          cardRef?.(node)
        }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-0"
      >
        <ReseniaFace
          resenia={resenia}
          mostrarVerdad={false}
          interactiva={false}
        />
      </div>

      <div
        ref={caraVerdadRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-0"
      >
        <ReseniaFace
          resenia={resenia}
          mostrarVerdad
          interactiva={false}
        />
      </div>
    </article>
  )
}
