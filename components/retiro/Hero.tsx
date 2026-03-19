import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-14"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-meditation.jpg"
          alt="Vista serena de montañas con persona meditando al amanecer"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5E2A29]/30 via-[#724E48]/20 to-[#5E2A29]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-sm mx-auto flex flex-col items-center gap-6">
        {/* Decorative dharma wheel */}
        <div className="w-12 h-px bg-[#FBF3DC]/60" aria-hidden="true" />

        <h1 className="font-serif text-[#FBF3DC] text-[2.1rem] leading-snug text-balance font-semibold drop-shadow-md">
          Encuentra la paz interior y la sabiduría
        </h1>

        <p className="font-sans text-[#FBF3DC]/90 text-[0.95rem] leading-relaxed text-balance drop-shadow-sm">
          Una experiencia de retiro transformadora en la tradición budista tibetana
        </p>

        <a
          href="#contacto"
          className="mt-2 inline-block bg-[#A72F27] text-white font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-md shadow-lg hover:bg-[#8B2520] active:scale-95 transition-all"
        >
          Reservar mi retiro
        </a>

        <div className="w-12 h-px bg-[#FBF3DC]/60" aria-hidden="true" />
      </div>
    </section>
  )
}
