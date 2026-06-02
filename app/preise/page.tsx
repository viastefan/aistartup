import { SubpageTemplate } from '@/components/subpage-template'

export default function PreisePage() {
  return (
    <SubpageTemplate
      eyebrow="Preise"
      title="Klarer Einstieg, sauberer Scope, skalierbare Betreuung."
      intro="Wir starten klein genug, um schnell Nutzen zu sehen, und strukturiert genug, um daraus ein dauerhaftes AI-System zu bauen."
      image="/media/session.jpg"
      blocks={[
        {
          title: 'AI-Potenzialcheck',
          body: 'ab 490 EUR fur eine klare Einschatzung und priorisierte Empfehlungen.',
          points: ['Erstgesprach', 'Prozessaufnahme', 'Aufwandsschatzung']
        },
        {
          title: 'Implementation Sprint',
          body: 'ab 2.900 EUR fur eine erste konkrete AI-Losung im Unternehmen.',
          points: ['Konzept', 'Umsetzung', 'Einfuhrung']
        },
        {
          title: 'AI Partner',
          body: 'individuell fur laufende Roadmap, neue Automationen und technische Betreuung.',
          points: ['Monitoring', 'Schulung', 'Weiterentwicklung']
        }
      ]}
    />
  )
}
