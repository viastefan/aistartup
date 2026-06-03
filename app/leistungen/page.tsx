import { SubpageTemplate } from '@/components/subpage-template'

export default function LeistungenPage() {
  return (
    <SubpageTemplate
      eyebrow="Leistungen"
      title="Von verstreutem Unternehmenswissen zu KI-fähigen Operations."
      intro="Leqra baut nicht einfach einen Chatbot. Leqra schafft die Struktur, die ein Unternehmen braucht, damit KI-Assistenten, Automationen, Festag und Tagro belastbar funktionieren."
      metric="8 Module"
      metricLabel="Leqra Leistungssystem"
      blocks={[
        {
          title: 'KI-Bereitschafts-Audit',
          body: 'Wir prüfen, welche Daten, Prozesse, Rollen und Entscheidungen bereits nutzbar sind und wo Struktur fehlt.',
          points: ['Bereitschafts-Score', 'Daten- und Tool-Landkarte', 'Anwendungsfall-Priorisierung', '90-Tage-Fahrplan']
        },
        {
          title: 'Wissensstrukturierung',
          body: 'Unternehmenswissen wird in kontrollierte, aktuelle und nutzbare Wissensbereiche überführt.',
          points: ['Dokumente und SOPs', 'Meeting- und Kundenwissen', 'Versionierung', 'offizieller Kontext']
        },
        {
          title: 'Operations-Aufbau',
          body: 'Prozesse werden so modelliert, dass daraus Aufgaben, Freigaben, Entscheidungen und Risiken entstehen können.',
          points: ['Rollen und Ownership', 'Workflow-Design', 'Freigabelogik', 'Eskalationspfade']
        },
        {
          title: 'Automation Blueprint',
          body: 'Wir definieren, was automatisiert werden darf, was menschliche Prüfung braucht und was bewusst manuell bleibt.',
          points: ['Automationspotenziale', 'Risikoanalyse', 'Human-in-the-loop', 'Umsetzungsreihenfolge']
        }
      ]}
      secondary={[
        {
          title: 'Warum zuerst Struktur?',
          body: 'Ohne klare Daten- und Prozesslogik wird KI schnell ein zusätzliches Tool. Mit Struktur wird KI Teil der operativen Steuerung.'
        },
        {
          title: 'Was entsteht am Ende?',
          body: 'Ein belastbares Fundament für interne Assistenten, Projektcockpits, Kundenbriefings, Managementreports und sichere Automationen.'
        }
      ]}
    />
  )
}
