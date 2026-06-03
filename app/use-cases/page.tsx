import { SubpageTemplate } from '@/components/subpage-template'

export default function UseCasesPage() {
  return (
    <SubpageTemplate
      eyebrow="Anwendungsfälle"
      title="Für Unternehmen, in denen Arbeit über Kommunikation verteilt ist."
      intro="Leqra eignet sich besonders dort, wo Kunden, Teams, Dokumente, Entscheidungen und Freigaben täglich in vielen Kanälen entstehen und niemand mehr das ganze Bild sieht."
      metric="5 Felder"
      metricLabel="Fokusbranchen"
      blocks={[
        {
          title: 'Agenturen und Dienstleister',
          body: 'Kundenfeedback, Freigaben, Scope-Änderungen und Projektstatus werden in ein steuerbares Arbeitsmodell gebracht.',
          points: ['Kundenbriefings', 'Freigabe-Workflows', 'Statusberichte', 'Scope-Änderungen']
        },
        {
          title: 'Immobilienunternehmen',
          body: 'Objektdaten, Eigentümerkommunikation, Leads und Unterlagen werden strukturiert und reportingfähig.',
          points: ['Objektlogik', 'Lead-Flows', 'Eigentümerupdates', 'Dokumentenstatus']
        },
        {
          title: 'Hotels und Hospitality',
          body: 'Servicewissen, SOPs, Gästefragen und operative Aufgaben werden in klare Prozesse und Briefings übersetzt.',
          points: ['SOP-Struktur', 'Serviceanfragen', 'Managementbriefings', 'Eskalationen']
        },
        {
          title: 'Beratung und B2B-Teams',
          body: 'Meetings, Entscheidungen, Deliverables und Verantwortlichkeiten werden nachvollziehbar und steuerbar.',
          points: ['Entscheidungslogs', 'Deliverable-Tracking', 'Executive Summaries', 'Risikoübersicht']
        }
      ]}
      secondary={[
        {
          title: 'Gemeinsames Muster',
          body: 'In allen Fällen ist das Problem nicht fehlende KI. Das Problem ist, dass operative Realität nicht sauber genug strukturiert ist.'
        },
        {
          title: 'Ergebnis',
          body: 'Leqra macht aus Kommunikation verwertbare Arbeit: Aufgaben, Entscheidungen, Freigaben, Risiken, Reports und nächster Schritt.'
        }
      ]}
    />
  )
}
