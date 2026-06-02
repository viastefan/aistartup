const faqs = [
  [
    'Ist AI fur kleine und mittelstandische Unternehmen sinnvoll?',
    'Ja, wenn der Einstieg uber konkrete Prozesse erfolgt. Besonders sinnvoll sind wiederkehrende Aufgaben, Wissensarbeit, E-Mail-Flows und Dokumentenprozesse.'
  ],
  [
    'Muss unser Unternehmen bereits digitalisiert sein?',
    'Nein. Eine saubere Ausgangslage hilft, aber wir starten oft mit bestehenden Tools, Dateien und manuellen Ablaufen.'
  ],
  [
    'Welche Systeme konnen angebunden werden?',
    'Typisch sind CRM, E-Mail, Kalender, Tabellen, Projekttools, Dokumentenspeicher, Website-Formulare und interne Wissensdatenbanken.'
  ],
  [
    'Arbeitet ihr mit bestehenden Tools?',
    'Ja. Wir ersetzen nicht automatisch alles, sondern verbinden vorhandene Systeme dort, wo es sinnvoll ist.'
  ],
  [
    'Ist das DSGVO-konform?',
    'Wir arbeiten DSGVO-bewusst und prufen je nach Anwendungsfall Datenfluss, Rollen, Anbieter und Zugriffskonzepte.'
  ],
  [
    'Wie schnell kann eine erste Losung umgesetzt werden?',
    'Ein klar begrenzter Pilot ist haufig in 2 bis 4 Wochen realistisch.'
  ],
  [
    'Was kostet eine Implementierung?',
    'Das hangt vom Umfang ab. Ein Potenzialcheck startet ab 490 EUR, ein Implementation Sprint ab 2.900 EUR.'
  ],
  [
    'Wird AI Mitarbeiter ersetzen?',
    'Unser Fokus liegt auf Entlastung und besserer Nutzung vorhandener Zeit, nicht auf pauschalem Personalersatz.'
  ],
  ['Konnen wir klein starten?', 'Ja. Wir empfehlen bewusst einen fokussierten ersten Prozess statt einer grossen Tool-Einfuhrung.']
]

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading compact">
        <p className="eyebrow">FAQ</p>
        <h2>Klare Antworten vor dem ersten Projekt.</h2>
      </div>

      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
