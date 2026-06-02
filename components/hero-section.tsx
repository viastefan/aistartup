import Link from 'next/link'
import { ArrowRight, Check, MessageSquareText, Sparkles } from 'lucide-react'
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
      <div className="hero-carousel-shell">
        <div className="hero-peek hero-peek-left" aria-hidden="true">
          <img src="/media/workshop.jpg" alt="" />
        </div>
        <div className="hero-peek hero-peek-right" aria-hidden="true">
          <img src="/media/office.jpg" alt="" />
        </div>

        <div className="hero-media-card">
          <video
            className="hero-media-img"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/session.jpg"
            aria-hidden="true"
          >
            <source src="/media/neuralwerk-workshop-motion.mp4" type="video/mp4" />
          </video>
          <div className="hero-media-wash" />
          <div className="hero-motion-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Neuralwerk</p>
            <h1>AI, die im Unternehmen wirklich ankommt.</h1>
            <p className="hero-lede">
              Wir analysieren Prozesse, bauen Automatisierungen und implementieren AI-Systeme fur den deutschen
              Mittelstand.
            </p>

            <div className="hero-actions">
              <Button asChild>
                <Link href="#ai-check">
                  AI-Check starten
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/leistungen">Leistungen ansehen</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/prozess">Prozess</Link>
              </Button>
            </div>

            <Link className="hero-chat-pill" href="#ai-check">
              <span>
                <MessageSquareText size={15} />
              </span>
              Beschreiben Sie Ihr Unternehmen. Wir zeigen die ersten AI-Potenziale.
            </Link>
          </div>
        </div>

        <div className="hero-bottom-row">
          <span>Explore Neuralwerk</span>
          <div className="trust-grid" aria-label="Vertrauenspunkte">
            {trustPoints.map((point) => (
              <span key={point}>
                <Check size={15} />
                {point}
              </span>
            ))}
          </div>
          <div className="hero-mini-controls" aria-hidden="true">
            <button type="button">‹</button>
            <button type="button">›</button>
          </div>
        </div>
      </div>

      <div className="hero-product-stage" aria-label="AI-Assessment Vorschau">
        <div className="hero-chat-preview">
          <div className="preview-message assistant">
            <span className="preview-icon">
              <Sparkles size={15} />
            </span>
            <p>
              Beschreiben Sie kurz Ihr Unternehmen. Ich prufe, wo AI und Automatisierung sinnvoll eingesetzt werden
              konnen.
            </p>
          </div>
          <div className="preview-message user">
            <p>
              Wir sind ein Immobilienunternehmen mit 18 Mitarbeitern und verlieren viel Zeit bei Exposes, Anfragen
              und Terminabstimmung.
            </p>
          </div>
          <div className="preview-message assistant">
            <span className="preview-icon">
              <MessageSquareText size={15} />
            </span>
            <p>
              Ich sehe drei Ansatzpunkte: Anfragequalifizierung, Expose-Erstellung und Termin-Workflows. Starten wir
              mit einer kurzen Einschatzung?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
