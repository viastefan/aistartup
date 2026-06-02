const useCases = [
  {
    title: 'Immobilien',
    situation: 'Exposes, Anfragen und Termine kosten im Alltag viel manuelle Zeit.',
    solution: 'AI strukturiert Anfragen, bereitet Exposes vor und koordiniert Follow-ups.',
    result: 'Schnellere Reaktion und weniger operative Reibung.'
  },
  {
    title: 'Hotels',
    situation: 'Gastekommunikation, Reservierungen und Bewertungen landen in vielen Kanalen.',
    solution: 'AI beantwortet Standardfragen, fasst Feedback zusammen und erstellt interne Reports.',
    result: 'Konstantere Kommunikation bei weniger Aufwand.'
  },
  {
    title: 'Agenturen',
    situation: 'Briefings, Angebote und Projektstatus werden immer wieder manuell aufbereitet.',
    solution: 'AI macht aus Inputs klare Aufgaben, Angebote und Statusupdates.',
    result: 'Mehr Fokus auf Kundenarbeit statt Administration.'
  },
  {
    title: 'Handwerk & Buro',
    situation: 'Kundenanfragen, Dokumentenablage und Angebotsvorbereitung verzogern Ablaufe.',
    solution: 'AI sortiert Anfragen, extrahiert Infos und bereitet Antworten vor.',
    result: 'Bessere Ubersicht und schnellere Bearbeitung.'
  },
  {
    title: 'Vertrieb',
    situation: 'Leads, CRM-Notizen und Follow-ups bleiben uneinheitlich.',
    solution: 'AI priorisiert Leads, fasst Gesprache zusammen und plant Nachfasslogik.',
    result: 'Mehr Struktur und weniger verlorene Chancen.'
  },
  {
    title: 'Management',
    situation: 'Entscheidungen brauchen Status, Zahlen und Kontext aus mehreren Tools.',
    solution: 'AI erstellt Wochenberichte, Risiko-Hinweise und Entscheidungsgrundlagen.',
    result: 'Mehr Klarheit ohne zusatzliche Reporting-Schichten.'
  }
]

export function UseCasesSection() {
  return (
    <section className="section" id="use-cases">
      <div className="section-heading">
        <p className="eyebrow">Use Cases</p>
        <h2>Typische Einsatzbereiche im Mittelstand.</h2>
      </div>

      <div className="use-case-grid">
        {useCases.map((item) => (
          <article className="use-case-card" key={item.title}>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>Ausgangslage</dt>
                <dd>{item.situation}</dd>
              </div>
              <div>
                <dt>AI-Losung</dt>
                <dd>{item.solution}</dd>
              </div>
              <div>
                <dt>Ergebnis</dt>
                <dd>{item.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}
