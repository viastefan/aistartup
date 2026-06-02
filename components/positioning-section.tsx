import { ClipboardCheck, Presentation, Shuffle } from 'lucide-react'

const cards = [
  {
    icon: ClipboardCheck,
    title: 'Analyse statt Blindflug',
    body: 'Wir prufen zuerst Prozesse, Daten, Tools und Engpasse. Erst danach entscheiden wir, welche AI-Losung wirklich Sinn macht.'
  },
  {
    icon: Presentation,
    title: 'Umsetzung statt Prasentationen',
    body: 'Unser Ergebnis ist kein Folienstapel, sondern ein nutzbarer Workflow, Assistent, Chatbot oder eine konkrete Automatisierung.'
  },
  {
    icon: Shuffle,
    title: 'Automatisierung statt Tool-Chaos',
    body: 'Wir verbinden bestehende Systeme und reduzieren manuelle Zwischenschritte, statt neue Tools ohne Prozessnutzen einzufuhren.'
  }
]

export function PositioningSection() {
  return (
    <section className="section positioning-section">
      <div className="section-heading">
        <p className="eyebrow">Positionierung</p>
        <h2>Wir sind kein AI-Hype-Anbieter. Wir bauen praktische Systeme.</h2>
        <p>
          Neuralwerk arbeitet mit Unternehmen, die AI nicht nur testen, sondern in echte Ablaufe integrieren
          mochten. Ruhig, sauber und nah an der operativen Realitat.
        </p>
      </div>

      <div className="three-card-grid">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article className="quiet-card" key={card.title}>
              <span className="card-icon">
                <Icon size={18} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
