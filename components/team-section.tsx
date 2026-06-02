import { Cable, Compass, LayoutTemplate, LifeBuoy } from 'lucide-react'

const trustCards = [
  { icon: Compass, title: 'Strategie & Prozessverstandnis' },
  { icon: Cable, title: 'Automatisierung & Integration' },
  { icon: LayoutTemplate, title: 'UX & nutzbare Interfaces' },
  { icon: LifeBuoy, title: 'laufende Betreuung' }
]

export function TeamSection() {
  return (
    <section className="section team-section">
      <div className="team-copy">
        <p className="eyebrow">Team</p>
        <h2>Kleines Team. Klare Spezialisierung.</h2>
        <p>
          Wir sind ein spezialisiertes Team aus Strategie, Automatisierung, Design und Entwicklung. Unser Fokus
          liegt nicht auf theoretischer AI-Beratung, sondern auf Losungen, die Unternehmen wirklich nutzen konnen.
        </p>
        <div className="team-card-grid">
          {trustCards.map((card) => {
            const Icon = card.icon
            return (
              <span key={card.title}>
                <Icon size={16} />
                {card.title}
              </span>
            )
          })}
        </div>
      </div>

      <div className="team-photo-placeholder" aria-label="Platzhalter fur echtes Teamfoto">
        <div>
          <span>Neuralwerk</span>
          <strong>Hier spater echtes Teamfoto einsetzen</strong>
          <p>6 Personen. Strategie, Automatisierung, Design, Entwicklung.</p>
        </div>
      </div>
    </section>
  )
}
