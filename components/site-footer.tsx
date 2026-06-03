import Link from 'next/link'
import { LeqraMark } from '@/components/leqra-mark'

const links = [
  { label: 'System', href: '/system' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Anwendungsfälle', href: '/use-cases' },
  { label: 'Prozess', href: '/prozess' },
  { label: 'Preise', href: '/preise' },
  { label: 'Sicherheit', href: '/sicherheit' },
  { label: 'Festag & Tagro', href: '/festag-tagro' },
  { label: 'Kontakt', href: '/kontakt' }
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="site-logo">
          <span className="logo-symbol">
            <LeqraMark />
          </span>
          <span>Leqra</span>
        </Link>
        <p>Leqra macht Unternehmen KI-bereit. Festag macht Arbeit steuerbar. Tagro macht Fortschritt verständlich.</p>
      </div>
      <nav aria-label="Footer Navigation">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a href="mailto:hello@leqra.ai">hello@leqra.ai</a>
    </footer>
  )
}
