import { NextResponse } from "next/server"
import { z } from "zod"

import { getResend } from "@/lib/resend"

export const runtime = "nodejs"

const DESTINATION_EMAIL = "mariangomezloira@outlook.com"
const DEFAULT_FROM_EMAIL = "La Dakini <onboarding@resend.dev>"

const contactSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  correo: z.string().trim().email().max(320),
  mensaje: z.string().trim().min(10).max(4000),
})

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: "No hemos podido leer los datos del formulario." },
      { status: 400 },
    )
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Revisa el nombre, el correo y el mensaje antes de enviarlo." },
      { status: 400 },
    )
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "El formulario de contacto aún no está configurado." },
      { status: 500 },
    )
  }

  const { nombre, correo, mensaje } = parsed.data
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL
  const resend = getResend()

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #3f2a24;">
      <h1 style="margin-bottom: 16px; color: #A72F27;">Nuevo mensaje desde La Dakini</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(mensaje)}</p>
    </div>
  `

  const text = [
    "Nuevo mensaje desde La Dakini",
    "",
    `Nombre: ${nombre}`,
    `Correo: ${correo}`,
    "",
    "Mensaje:",
    mensaje,
  ].join("\n")

  const { error } = await resend.emails.send({
    from,
    to: [DESTINATION_EMAIL],
    replyTo: correo,
    subject: `Nuevo mensaje desde La Dakini · ${nombre}`,
    html,
    text,
  })

  if (error) {
    console.error("Error al enviar el correo con Resend:", error)

    return NextResponse.json(
      { error: "No hemos podido enviar el mensaje. Inténtalo de nuevo." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
