import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const packages = [
  {
    name: 'AI-Potenzialcheck',
    price: 'ab 490 EUR',
    description: 'Fur Unternehmen, die eine klare Einschatzung wollen, wo AI sinnvoll eingesetzt werden kann.',
    items: ['Erstgesprach', 'Prozessaufnahme', 'Potenzialanalyse', 'konkrete Empfehlungen', 'grobe Aufwandsschatzung']
  },
  {
    name: 'Implementation Sprint',
    price: 'ab 2.900 EUR',
    description: 'Fur Unternehmen, die eine erste konkrete AI-Losung umsetzen mochten.',
    items: ['Losungskonzept', 'technische Umsetzung', 'Integration', 'Testing', 'Einfuhrung', 'Dokumentation']
  },
  {
    name: 'AI Partner',
    price: 'individuell',
    description: 'Fur Unternehmen, die AI langfristig in mehreren Bereichen einfuhren mochten.',
    items: ['laufende Beratung', 'neue Automatisierungen', 'Monitoring', 'Schulung', 'technische Betreuung']
  }
]

export function PricingSection() {
  return (
    <section className="section" id="preise">
      <div className="section-heading">
        <p className="eyebrow">Preise</p>
        <h2>Vom ersten Check bis zur laufenden AI-Betreuung.</h2>
      </div>

      <div className="pricing-grid">
        {packages.map((item) => (
          <article className="price-card" key={item.name}>
            <p className="price-name">{item.name}</p>
            <strong>{item.price}</strong>
            <p>{item.description}</p>
            <ul>
              {item.items.map((feature) => (
                <li key={feature}>
                  <Check size={14} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant={item.name === 'Implementation Sprint' ? 'default' : 'secondary'}>
              <Link href="#ai-check">Anfragen</Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
