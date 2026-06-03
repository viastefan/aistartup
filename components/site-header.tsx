import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LeqraMark } from '@/components/leqra-mark'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/system', label: 'System' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/use-cases', label: 'Anwendungsfälle' },
  { href: '/prozess', label: 'Prozess' },
  { href: '/preise', label: 'Preise' },
  { href: '/sicherheit', label: 'Sicherheit' }
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Leqra Startseite">
        <span className="logo-symbol">
          <LeqraMark />
        </span>
        <span>Leqra</span>
      </Link>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Button asChild>
        <Link href="/kontakt">
          Audit starten
          <ArrowRight size={15} />
        </Link>
      </Button>
    </header>
  )
}
