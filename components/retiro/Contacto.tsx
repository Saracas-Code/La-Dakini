"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section
      id="contacto"
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Escríbenos
        </p>
        <h2
          id="contacto-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Conectar Con Nosotros
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {/* Contact Form */}
        {enviado ? (
          <div className="bg-[#FFFFFF] rounded-lg p-8 text-center border border-[#E8D8C4] mb-8">
            <div className="text-[#A72F27] text-3xl mb-3 font-serif">🙏</div>
            <h3 className="font-serif text-[#5E2A29] text-lg font-semibold mb-2">
              ¡Gracias por tu mensaje!
            </h3>
            <p className="font-sans text-[#724E48] text-sm leading-relaxed">
              Nos pondremos en contacto contigo a la mayor brevedad. Que el Dharma ilumine tu camino.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="correo" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                value={form.correo}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensaje" className="font-sans text-[#5E2A29] text-[0.78rem] tracking-wide">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                className="bg-[#FFFFFF] border border-[#E8D8C4] rounded-md px-4 py-3 font-sans text-[0.88rem] text-[#5E2A29] placeholder:text-[#724E48]/50 focus:outline-none focus:border-[#A72F27] focus:ring-1 focus:ring-[#A72F27] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A72F27] text-white font-sans text-sm tracking-widest uppercase py-4 rounded-md hover:bg-[#8B2520] active:scale-95 transition-all mt-2 shadow-sm"
            >
              Enviar Mensaje
            </button>
          </form>
        )}

        {/* Map placeholder */}
        <div className="relative rounded-lg overflow-hidden mb-8 border border-[#E8D8C4]">
          <div className="bg-[#E8D8C4] h-44 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-[#A72F27]" size={28} />
              <span className="font-sans text-[#724E48] text-sm">Centro Dharma Karuna</span>
            </div>
          </div>
          {/* Stylized map overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-[#724E48]/10"
                style={{
                  top: `${i * 18}%`,
                  left: 0,
                  right: 0,
                  height: "1px",
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-[#724E48]/10"
                style={{
                  left: `${i * 15}%`,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: <MapPin size={16} className="shrink-0 mt-0.5" />,
              text: "Calle del Dharma 12, Valle de la Paz, 08400 Barcelona, España",
            },
            {
              icon: <Phone size={16} className="shrink-0" />,
              text: "+34 93 123 45 67",
            },
            {
              icon: <Mail size={16} className="shrink-0" />,
              text: "info@centrodharmakaruna.org",
            },
            {
              icon: <Clock size={16} className="shrink-0" />,
              text: "Lun–Vie: 9:00 – 18:00 · Fines de semana: retiros",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-[#5E2A29]">
              <span className="text-[#A72F27]">{item.icon}</span>
              <span className="font-sans text-[0.82rem] leading-relaxed text-[#724E48]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
