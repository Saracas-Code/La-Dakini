import type { Metadata } from 'next'
import { Cinzel_Decorative, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '700'],
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
    <html
      lang="es"
      className={`${montserrat.variable} ${cinzelDecorative.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
