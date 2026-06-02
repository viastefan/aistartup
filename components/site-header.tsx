import Link from 'next/link'
import { ArrowRight, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/#ai-check', label: 'AI-Check' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/prozess', label: 'Prozess' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/preise', label: 'Preise' },
  { href: '/#faq', label: 'FAQ' }
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Neuralwerk Startseite">
        <span className="logo-symbol">
          <Sparkle size={14} />
        </span>
        <span>Neuralwerk</span>
      </Link>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Button asChild>
        <Link href="/#ai-check">
          AI-Check starten
          <ArrowRight size={15} />
        </Link>
      </Button>
    </header>
  )
}
