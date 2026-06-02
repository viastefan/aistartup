import { SubpageTemplate } from '@/components/subpage-template'

export default function LeistungenPage() {
  return (
    <SubpageTemplate
      eyebrow="Leistungen"
      title="AI-Systeme, die in echte Ablaufe passen."
      intro="Neuralwerk implementiert AI nicht als Demo, sondern als nutzbaren Bestandteil von Vertrieb, Operations, Service und Management."
      image="/media/workshop.jpg"
      blocks={[
        {
          title: 'AI-Prozessanalyse',
          body: 'Wir finden die Prozesse, bei denen AI wirklich Zeit spart oder bessere Entscheidungen vorbereitet.',
          points: ['Prozessaufnahme', 'Tool- und Datenlandkarte', 'Priorisierte Use Cases']
        },
        {
          title: 'Assistenten & Chatbots',
          body: 'Interne und externe AI-Assistenten fur Wissen, Dokumente, Leads, Support und operative Fragen.',
          points: ['Website-Chat', 'Wissensassistent', 'Lead-Qualifizierung']
        },
        {
          title: 'Workflow-Automatisierung',
          body: 'Wir verbinden bestehende Systeme und reduzieren manuelle Arbeit zwischen Tools.',
          points: ['CRM', 'E-Mail und Kalender', 'Dokumente und Tabellen']
        }
      ]}
    />
  )
}
