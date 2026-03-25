import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Centro de Retiros Budistas — Paz Interior y Sabiduría',
  description: 'Bienvenidos a nuestro centro de retiros espirituales budistas. Descubra la paz interior y la sabiduría a través de prácticas meditativas en la tradición budista tibetana.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/LOGO-DAKINI-transparent.png', type: 'image/png' }],
    shortcut: '/LOGO-DAKINI-transparent.png',
    apple: '/LOGO-DAKINI-transparent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
