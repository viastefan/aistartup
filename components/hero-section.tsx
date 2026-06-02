import Link from 'next/link'
import { ArrowRight, Check, MessageSquareText, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustPoints = [
  'Spezialisiertes AI-Team',
  'Fur Mittelstand & operative Prozesse',
  'Analyse, Umsetzung und Betreuung',
  'DSGVO-bewusste Implementierung'
]

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">AI-Implementierung fur den deutschen Mittelstand.</p>
          <h1>AI, die im Unternehmen wirklich ankommt.</h1>
          <p className="hero-lede">
            Wir helfen mittelstandischen Unternehmen in Bayern und Deutschland, kunstliche Intelligenz sinnvoll
            einzufuhren - von der ersten Prozessanalyse bis zur fertigen Automatisierung.
          </p>
          <p className="hero-line">Kein Hype. Keine Tool-Flut. Sondern klare Umsetzung.</p>

          <div className="hero-actions">
            <Button asChild>
              <Link href="#ai-check">
                AI-Check starten
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#leistungen">Leistungen ansehen</Link>
            </Button>
          </div>

          <div className="trust-grid" aria-label="Vertrauenspunkte">
            {trustPoints.map((point) => (
              <span key={point}>
                <Check size={15} />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-product-stage" aria-label="AI-Assessment Vorschau">
          <div className="stage-nav">
            <span>Neuralwerk Assessment</span>
            <span className="stage-state">Live Preview</span>
          </div>

          <div className="hero-chat-preview">
            <div className="preview-message assistant">
              <span className="preview-icon">
                <Sparkles size={15} />
              </span>
              <p>
                Beschreiben Sie kurz Ihr Unternehmen. Ich prufe, wo AI und Automatisierung sinnvoll eingesetzt
                werden konnen.
              </p>
            </div>
            <div className="preview-message user">
              <p>
                Wir sind ein Immobilienunternehmen mit 18 Mitarbeitern und verlieren viel Zeit bei Exposes,
                Anfragen und Terminabstimmung.
              </p>
            </div>
            <div className="preview-message assistant">
              <span className="preview-icon">
                <MessageSquareText size={15} />
              </span>
              <p>
                Ich sehe drei Ansatzpunkte: Anfragequalifizierung, Expose-Erstellung und Termin-Workflows.
                Starten wir mit einer kurzen Einschatzung?
              </p>
            </div>
          </div>

          <div className="preview-input">
            <span>Mein Unternehmen ist...</span>
            <Link href="#ai-check">
              Analyse starten
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="stage-metrics">
            <span>
              <Workflow size={15} />
              Prozesse
            </span>
            <span>
              <ShieldCheck size={15} />
              Datenschutz
            </span>
            <span>
              <Sparkles size={15} />
              Potenziale
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
