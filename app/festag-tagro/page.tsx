import { SubpageTemplate } from '@/components/subpage-template'

export default function FestagTagroPage() {
  return (
    <SubpageTemplate
      eyebrow="Festag und Tagro"
      title="Leqra baut das Fundament. Festag steuert Arbeit. Tagro erklärt Fortschritt."
      intro="Die drei Systeme gehören logisch zusammen: Leqra schafft die Unternehmensstruktur, Festag macht sie operativ nutzbar und Tagro übersetzt Fortschritt in verständliche Briefings."
      metric="3 Systeme"
      metricLabel="Produktlogik"
      blocks={[
        {
          title: 'Leqra',
          body: 'Macht das Unternehmen KI-bereit, bevor Automationen und Assistenten zuverlässig arbeiten sollen.',
          points: ['Wissensstruktur', 'Prozesslogik', 'Entscheidungen', 'Freigaben']
        },
        {
          title: 'Festag',
          body: 'Wird zum Cockpit für Projekte, Kunden, Aufgaben, Freigaben und operative Steuerung.',
          points: ['Projekte', 'Kundenbereiche', 'Aufgaben', 'Dashboards']
        },
        {
          title: 'Tagro',
          body: 'Erklärt Fortschritt, Status, Risiken und nächste Schritte für Teams, Kunden und Management.',
          points: ['Briefings', 'Reports', 'Audio-Zusammenfassungen', 'Action Points']
        },
        {
          title: 'Gemeinsame Wirkung',
          body: 'Aus verstreuter Unternehmensrealität entsteht ein System, das Arbeit sichtbar und KI nutzbar macht.',
          points: ['weniger Statuschaos', 'klare Verantwortlichkeit', 'bessere Entscheidungen', 'skalierbare KI']
        }
      ]}
      secondary={[
        {
          title: 'Leqra funktioniert auch unabhängig',
          body: 'Leqra kann als eigenständiges KI-Bereitschafts- und Operations-System eingesetzt werden. Festag und Tagro werden relevant, wenn diese Struktur direkt in Arbeitssteuerung und Briefings aktiviert werden soll.'
        },
        {
          title: 'Warum das wichtig ist',
          body: 'Viele Unternehmen kaufen KI-Tools, ohne vorher ihre Arbeitslogik zu klären. Leqra dreht die Reihenfolge um: erst Struktur, dann System, dann Automatisierung.'
        }
      ]}
    />
  )
}
