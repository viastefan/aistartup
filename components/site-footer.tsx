import Link from 'next/link'
import { LeqraMark } from '@/components/leqra-mark'

const links = [
  { label: 'System', href: '/#system' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Festag', href: '/#relationship' },
  { label: 'Tagro', href: '/#relationship' }
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
        <p>Leqra makes companies AI-ready. Festag makes work manageable. Tagro makes progress understandable.</p>
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
