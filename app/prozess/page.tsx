import { SubpageTemplate } from '@/components/subpage-template'

export default function ProzessPage() {
  return (
    <SubpageTemplate
      eyebrow="Prozess"
      title="Ein klarer Weg von Unternehmenschaos zu KI-bereiter Struktur."
      intro="Leqra arbeitet nicht in abstrakten Strategiephasen. Wir gehen durch konkrete Datenquellen, echte Workflows, reale Verantwortlichkeiten und bauen daraus ein nutzbares Operations-Fundament."
      metric="4 Phasen"
      metricLabel="Implementierungslogik"
      blocks={[
        {
          title: '1. Audit',
          body: 'Wir erfassen, wo Wissen entsteht, welche Tools genutzt werden, wo Arbeit hängen bleibt und welche Risiken sich wiederholen.',
          points: ['Datenquellen', 'Toollandschaft', 'Kommunikationsmuster', 'Engpässe']
        },
        {
          title: '2. Struktur',
          body: 'Aus verstreuten Informationen entsteht ein Modell aus Rollen, Aufgaben, Freigaben, Entscheidungen und Wissensbereichen.',
          points: ['Knowledge Core', 'Prozessmodell', 'Entscheidungslogik', 'Freigaben']
        },
        {
          title: '3. Aktivierung',
          body: 'Die Struktur wird in operative Systeme, Festag-Workspaces, Automationen und Tagro-Briefinglogik überführt.',
          points: ['Festag Setup', 'Tagro Kontext', 'Pilot-Workflow', 'Automation Blueprint']
        },
        {
          title: '4. Betrieb',
          body: 'Das System bleibt aktuell, wenn sich Teams, Kunden, Prozesse, Dokumente und Prioritäten verändern.',
          points: ['Wissensupdates', 'Monitoring', 'Optimierung', 'neue Anwendungsfälle']
        }
      ]}
      secondary={[
        {
          title: 'Kein Big-Bang-Projekt',
          body: 'Leqra startet kontrolliert. Erst ein klarer Scope, dann ein belastbarer Kern, danach Ausbau in weitere Teams und Workflows.'
        },
        {
          title: 'Kein Tool-Chaos',
          body: 'Bestehende Systeme werden nicht pauschal ersetzt. Leqra macht sichtbar, welche Tools bleiben, welche verbunden werden und wo Festag oder Tagro sinnvoll werden.'
        }
      ]}
    />
  )
}
