const steps = [
  ['Erstes Gesprach', 'Wir verstehen Unternehmen, Prozesse und aktuelle Engpasse.'],
  ['AI-Potenzialanalyse', 'Wir identifizieren konkrete Anwendungsfalle mit realistischem Nutzen.'],
  ['Konzept & Angebot', 'Sie erhalten eine klare Empfehlung, Priorisierung und Aufwandsschatzung.'],
  ['Implementierung', 'Wir bauen Workflows, Assistenten, Integrationen oder Chatbots.'],
  ['Einfuhrung & Optimierung', 'Wir begleiten das Team, messen Nutzen und verbessern die Losung.']
]

export function ProcessSection() {
  return (
    <section className="section process-section" id="prozess">
      <div className="section-heading compact">
        <p className="eyebrow">Prozess</p>
        <h2>Ein klarer Weg von der Idee zur fertigen Umsetzung.</h2>
      </div>

      <div className="process-list">
        {steps.map(([title, body], index) => (
          <article className="process-step" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
