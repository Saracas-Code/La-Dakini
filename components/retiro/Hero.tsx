import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center pt-14 text-center"
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
      <div className="relative z-10 mx-auto w-full max-w-sm px-6 md:max-w-xl lg:max-w-6xl lg:px-10 xl:px-0">
        <div className="flex flex-col items-center gap-6 lg:ml-auto lg:max-w-[32rem] lg:items-end lg:text-right">
          {/* Decorative dharma wheel */}
          <div className="h-px w-12 bg-[#FBF3DC]/60" aria-hidden="true" />

          <h1 className="max-w-[13ch] font-serif text-[2.1rem] font-semibold leading-snug text-[#FBF3DC] text-balance drop-shadow-md md:text-[2.75rem] lg:text-[3.45rem]">
            Encuentra la paz interior y la sabiduría
          </h1>

          <p className="max-w-md font-sans text-[0.95rem] leading-relaxed text-[#FBF3DC]/90 text-balance drop-shadow-sm md:text-base">
            Una experiencia de retiro transformadora en la tradición budista tibetana
          </p>

          <a
            href="#contacto"
            className="mt-2 inline-block rounded-md bg-[#A72F27] px-8 py-4 font-sans text-sm tracking-widest text-white uppercase shadow-lg transition-all hover:bg-[#8B2520] active:scale-95"
          >
            Reservar mi retiro
          </a>

          <div className="h-px w-12 bg-[#FBF3DC]/60" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
