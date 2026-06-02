import Link from 'next/link'
import { Sparkle } from 'lucide-react'

const links = ['Leistungen', 'AI-Check', 'Prozess', 'Preise', 'Kontakt', 'Impressum', 'Datenschutz']

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="site-logo">
          <span className="logo-symbol">
            <Sparkle size={14} />
          </span>
          <span>Neuralwerk</span>
        </Link>
        <p>AI-Implementierung fur den deutschen Mittelstand.</p>
      </div>
      <nav aria-label="Footer Navigation">
        {links.map((link) => (
          <Link
            key={link}
            href={
              link === 'AI-Check'
                ? '/#ai-check'
                : link === 'Prozess'
                  ? '/prozess'
                  : link === 'Preise'
                    ? '/preise'
                    : link === 'Leistungen'
                      ? '/leistungen'
                      : link === 'Kontakt'
                        ? '/#ai-check'
                        : '/'
            }
          >
            {link}
          </Link>
        ))}
      </nav>
      <a href="mailto:hello@neuralwerk.ai">hello@neuralwerk.ai</a>
    </footer>
  )
}
