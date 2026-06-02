import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuralwerk - AI-Implementierung fur Mittelstand in Bayern & Deutschland',
  description:
    'Neuralwerk analysiert Prozesse, erkennt Automatisierungspotenziale und implementiert AI-Assistenten, Chatbots und Workflows fur mittelstandische Unternehmen.',
  applicationName: 'Neuralwerk',
  openGraph: {
    title: 'Neuralwerk - AI-Implementierung fur Mittelstand in Bayern & Deutschland',
    description:
      'Neuralwerk analysiert Prozesse, erkennt Automatisierungspotenziale und implementiert AI-Assistenten, Chatbots und Workflows fur mittelstandische Unternehmen.',
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
