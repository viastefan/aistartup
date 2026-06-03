import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leqra - Make Your Company AI-Ready',
  description:
    'Leqra structures company knowledge, workflows and operations so businesses can use AI systems, automations and intelligent workspaces like Festag and Tagro.',
  applicationName: 'Leqra',
  openGraph: {
    title: 'Leqra - Make Your Company AI-Ready',
    description:
      'Leqra structures company knowledge, workflows and operations so businesses can use AI systems, automations and intelligent workspaces like Festag and Tagro.',
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
