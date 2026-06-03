import { SubpageTemplate } from '@/components/subpage-template'

export default function PreisePage() {
  return (
    <SubpageTemplate
      eyebrow="Preise"
      title="Mit Struktur starten. Dann in echte KI-Operations skalieren."
      intro="Leqra ist so aufgebaut, dass Unternehmen kontrolliert beginnen können: erst Audit und Klarheit, dann Operations-Aufbau, danach laufender Ausbau."
      metric="3 Stufen"
      metricLabel="Startmodell"
      blocks={[
        {
          title: 'KI-Bereitschafts-Audit',
          body: 'ab 1.500 EUR. Für Unternehmen, die verstehen wollen, wo KI realistisch ansetzen kann.',
          points: ['Bereitschafts-Score', 'Anwendungsfall-Karte', 'Daten- und Tool-Landkarte', '90-Tage-Fahrplan']
        },
        {
          title: 'Leqra Operations-Aufbau',
          body: 'ab 7.500 EUR. Für Unternehmen, die Wissen, Prozesse und Workflows KI-bereit strukturieren wollen.',
          points: ['Knowledge Core', 'Prozessmodellierung', 'Festag-ready Setup', 'Automation Blueprint']
        },
        {
          title: 'Kontinuierliche KI-Operations',
          body: 'ab 1.500 EUR pro Monat. Für laufende Optimierung, neue Anwendungsfälle und aktuelle Unternehmenslogik.',
          points: ['Wissenspflege', 'Workflow-Optimierung', 'Tagro-Briefings', 'laufende Beratung']
        },
        {
          title: 'Enterprise Setup',
          body: 'Individuell. Für Multi-Team-, White-Label- oder besonders datenintensive Implementierungen.',
          points: ['Mehrere Teams', 'erweiterte Rechte', 'Custom Integrationen', 'Sicherheitsprüfung']
        }
      ]}
      secondary={[
        {
          title: 'Warum keine Pauschale für alles?',
          body: 'Jedes Unternehmen hat andere Datenqualität, Toollandschaft und Prozessreife. Deshalb startet Leqra mit einem klaren Scope statt mit einer ungenauen Paketbehauptung.'
        },
        {
          title: 'Wofür zahlst du wirklich?',
          body: 'Nicht für eine Demo. Sondern für eine Struktur, die im Alltag hält: Wissen, Prozesse, Verantwortlichkeiten, Freigaben, Automationslogik und Umsetzungsplan.'
        }
      ]}
    />
  )
}
