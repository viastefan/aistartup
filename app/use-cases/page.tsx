import { SubpageTemplate } from '@/components/subpage-template'

export default function UseCasesPage() {
  return (
    <SubpageTemplate
      eyebrow="Use Cases"
      title="AI-Anwendungen fur normale, operative Unternehmensprozesse."
      intro="Die besten AI-Projekte beginnen selten abstrakt. Sie starten dort, wo jeden Tag Zeit verloren geht."
      image="/media/office.jpg"
      blocks={[
        {
          title: 'Immobilien & Vertrieb',
          body: 'Anfragen, Exposes, Termine und Follow-ups werden strukturiert und schneller bearbeitet.',
          points: ['Expose-Vorbereitung', 'Anfragefilterung', 'CRM-Zusammenfassungen']
        },
        {
          title: 'Service & Kommunikation',
          body: 'AI hilft, eingehende Nachrichten zu verstehen, zu priorisieren und Antwortvorschlage zu erstellen.',
          points: ['Support-Triage', 'E-Mail-Flows', 'Website-Chat']
        },
        {
          title: 'Management & Reporting',
          body: 'Status, Zahlen und Risiken werden aus bestehenden Tools zu verwertbaren Briefings.',
          points: ['Wochenberichte', 'Projektstatus', 'Entscheidungsgrundlagen']
        }
      ]}
    />
  )
}
