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
              Venerable Lama Dorje Norbu
            </h3>
            <p className="font-sans text-[#FBF3DC]/80 text-xs tracking-widest uppercase mt-1">
              Guía espiritual del Monasterio Shambala Norbu
            </p>
          </div>
        </div>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-5">
          El Venerable Lama Dorje Norbu es el actual responsable espiritual del monasterio y el encargado de preservar y transmitir su legado. Formado en el Tíbet y con una larga trayectoria en la enseñanza de la práctica contemplativa, combina tradición y adaptación para acompañar a quienes llegan en busca de claridad, sentido y transformación personal.
          Su enfoque parte de una idea sencilla: cada experiencia, incluso la más inesperada, puede convertirse en una oportunidad de despertar si se sabe mirar con la actitud adecuada.
        </p>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-6">
          A lo largo de los años, ha guiado a practicantes de distintos lugares del mundo, desarrollando un modelo de retiro que integra silencio, disciplina y acompañamiento personalizado, adaptado a las necesidades de cada visitante.
          En Shambala Norbu, el Lama Dorje no solo enseña: observa, interpreta y acompaña los procesos individuales, entendiendo que cada camino espiritual es único… y que a veces, lo esencial no es cuestionar la experiencia, sino aprender a sostenerla.
        </p>

        {/* Quotes */}
        <div className="bg-[#FBF3DC] rounded-lg px-5 py-5 border-l-2 border-[#A72F27]">
          <blockquote className="font-serif text-[#5E2A29] text-[0.95rem] italic leading-relaxed">
            "La mente busca certezas. El despertar empieza cuando dejamos de necesitarlas."
          </blockquote>
          <cite className="block mt-3 font-sans text-[#A72F27] text-[0.75rem] tracking-wider not-italic">
            — Lama Dorje Norbu
          </cite>
        </div>
      </div>
    </section>
  )
}
