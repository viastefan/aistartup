import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCta() {
  return (
    <section className="final-cta">
      <p className="eyebrow">AI-Check starten</p>
      <h2>Finden wir heraus, wo AI Ihr Unternehmen wirklich entlasten kann.</h2>
      <p>
        Starten Sie mit einer ersten Einschatzung. Danach wissen Sie klarer, welche Prozesse sich fur AI,
        Automatisierung oder individuelle Software eignen.
      </p>
      <Button asChild>
        <Link href="#ai-check">
          AI-Check starten
          <ArrowRight size={16} />
        </Link>
      </Button>
    </section>
  )
}
