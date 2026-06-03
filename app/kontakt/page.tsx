import { SubpageTemplate } from '@/components/subpage-template'

export default function KontaktPage() {
  return (
    <SubpageTemplate
      eyebrow="Kontakt"
      title="Starte mit einem KI-Bereitschafts-Audit."
      intro="Schick kurz, welches Unternehmen strukturiert werden soll, welche Tools ihr nutzt und wo Arbeit heute unklar wird. Wir melden uns mit einer ersten Einschätzung und einem sinnvollen nächsten Schritt."
      metric="hello@leqra.ai"
      metricLabel="Kontakt"
      blocks={[
        {
          title: 'Was wir wissen müssen',
          body: 'Ein erster Überblick reicht. Wichtig ist nicht Perfektion, sondern ein klarer Startpunkt.',
          points: ['Unternehmen und Branche', 'aktuelle Toollandschaft', 'größte operative Engpässe', 'gewünschter Zielzustand']
        },
        {
          title: 'Was du bekommst',
          body: 'Nach dem Gespräch ist klar, ob ein Audit sinnvoll ist und welcher Scope dafür passt.',
          points: ['erste Einschätzung', 'passender Audit-Scope', 'Aufwandsschätzung', 'nächste Schritte']
        },
        {
          title: 'Typische Starts',
          body: 'Leqra kann klein beginnen: ein Team, ein Prozess, ein Kundenworkflow oder ein Wissensbereich.',
          points: ['Kundenprojekte', 'interne Operations', 'Reporting', 'Freigaben und Entscheidungen']
        },
        {
          title: 'Direkter Kontakt',
          body: 'Die Kontaktadresse ist bewusst schlicht. Kein unnötiges Formular, kein künstlicher Funnel.',
          points: ['hello@leqra.ai', 'KI-Bereitschafts-Audit', 'Operations-Aufbau', 'laufende Betreuung']
        }
      ]}
      secondary={[
        {
          title: 'E-Mail Betreff',
          body: 'Am besten: KI-Bereitschafts-Audit. Dann sehen wir direkt, dass es um Leqra und die Strukturierung des Unternehmens geht.'
        },
        {
          title: 'Erste gute Frage',
          body: 'Wo entsteht in eurem Unternehmen heute am meisten wertvolle Information, ohne dass daraus automatisch steuerbare Arbeit wird?'
        }
      ]}
    />
  )
}
