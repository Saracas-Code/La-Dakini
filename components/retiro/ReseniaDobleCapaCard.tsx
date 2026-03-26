"use client"

import Image from "next/image"
import { useId, useState } from "react"

export type ReseniaDobleCapa = {
  id: number
  nombre: string
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
      className={`flex flex-wrap gap-0.5 ${className ?? ""}`.trim()}
      aria-label={`${safeValue} estrellas`}
    >
      {Array.from({ length: filled }).map((_, i) => (
        <StarIcon key={`filled-${i}`} color={filledColor} />
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <StarIcon key={`empty-${i}`} color={emptyColor} filled={false} />
      ))}
      {Array.from({ length: overflow }).map((_, i) => (
        <StarIcon key={`overflow-${i}`} color={overflowColor} />
      ))}
    </div>
  )
}

export default function ReseniaDobleCapaCard({
  resenia,
}: {
  resenia: ReseniaDobleCapa
}) {
  const [abierta, setAbierta] = useState(false)
  const hiddenId = useId()

  return (
    <article className="bg-[#FBF3DC] rounded-xl p-5 flex flex-col gap-3">
      <StarRating
        value={resenia.estrellasPublicas}
        filledColor="#A72F27"
        emptyColor="#C49A98"
        overflowColor="#E3A436"
      />

      <blockquote className="font-serif text-[15px] text-[#5E2A29] leading-relaxed">
        &ldquo;{resenia.textoPublico}&rdquo;
      </blockquote>

      <button
        type="button"
        onClick={() => setAbierta((state) => !state)}
        aria-expanded={abierta}
        aria-controls={hiddenId}
        className="w-fit font-sans text-[11px] tracking-[0.08em] uppercase text-[#A72F27] underline underline-offset-2 hover:text-[#8B2520] transition-colors"
      >
        {abierta ? "Esconder verdad" : "Lo que no contó"}
      </button>

      {abierta && (
        <div id={hiddenId} className="rounded-lg bg-[#5E2A29] p-4 text-[#FBF3DC]">
          <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#FBF3DC]/80 mb-2">
            Lo que no contó
          </p>
          <StarRating
            value={resenia.estrellasOcultas}
            filledColor="#FBF3DC"
            emptyColor="#9E7B79"
            overflowColor="#F2C14D"
            className="mb-2"
          />
          <p className="font-sans text-[13px] leading-relaxed text-[#FBF3DC]">
            {resenia.textoOculto}
          </p>
        </div>
      )}

      <div className="pt-1 border-t border-[#E8D8C4]">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#E8D8C4] bg-[#FFFFFF]">
            <Image
              src={resenia.fotoPerfil}
              alt={`Foto de perfil de ${resenia.nombre}`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <p className="font-sans text-[13px] font-semibold text-[#5E2A29]">
            {resenia.nombre}
          </p>
        </div>
      </div>
    </article>
  )
}