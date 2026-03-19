import Image from "next/image"

export default function NuestroLama() {
  return (
    <section
      id="lama"
      className="bg-[#FFFFFF] px-6 py-16"
      aria-labelledby="lama-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Guía Espiritual
        </p>

        <h2
          id="lama-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Nuestro Lama
        </h2>

        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {/* Portrait */}
        <div className="relative mb-6">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/lama-portrait.jpg"
              alt="Retrato del Venerable Lama Tenzin Dorje"
              width={600}
              height={700}
              className="w-full object-cover"
              sizes="(max-width: 640px) 100vw, 600px"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-[#724E48]/10 rounded-lg" />
          </div>
          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5E2A29]/80 to-transparent px-5 py-5 rounded-b-lg">
            <h3 className="font-serif text-[#FBF3DC] text-xl font-semibold">
              Venerable Lama Tenzin Dorje
            </h3>
            <p className="font-sans text-[#FBF3DC]/80 text-xs tracking-widest uppercase mt-1">
              Maestro del Linaje Kagyu
            </p>
          </div>
        </div>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-5">
          El Venerable Lama Tenzin Dorje nació en el Tíbet y recibió su formación espiritual completa en los grandes monasterios de la tradición Kagyu. Con más de cuarenta años de práctica contemplativa, es reconocido por su profunda realización y su capacidad para transmitir las enseñanzas con claridad y compasión.
        </p>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-6">
          Ha guiado a miles de estudiantes en toda Europa y América Latina, impartiendo enseñanzas sobre Mahamudra, práctica de Vajrayana y meditación de la naturaleza de la mente.
        </p>

        {/* Quotes */}
        <div className="bg-[#FBF3DC] rounded-lg px-5 py-5 border-l-2 border-[#A72F27]">
          <blockquote className="font-serif text-[#5E2A29] text-[0.95rem] italic leading-relaxed">
            "La verdadera práctica espiritual no consiste en huir del mundo, sino en encontrar la paz en el corazón de la experiencia cotidiana."
          </blockquote>
          <cite className="block mt-3 font-sans text-[#A72F27] text-[0.75rem] tracking-wider not-italic">
            — Lama Tenzin Dorje
          </cite>
        </div>
      </div>
    </section>
  )
}
