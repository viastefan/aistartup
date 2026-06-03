import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leqra - Unternehmen KI-bereit machen',
  description:
    'Leqra strukturiert Wissen, Workflows und Operations, damit Unternehmen KI-Systeme, Automationen, Festag und Tagro zuverlässig nutzen können.',
  applicationName: 'Leqra',
  openGraph: {
    title: 'Leqra - Unternehmen KI-bereit machen',
    description:
      'Leqra strukturiert Wissen, Workflows und Operations, damit Unternehmen KI-Systeme, Automationen, Festag und Tagro zuverlässig nutzen können.',
    locale: 'de_DE',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07090b'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
