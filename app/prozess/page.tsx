import { SubpageTemplate } from '@/components/subpage-template'

export default function ProzessPage() {
  return (
    <SubpageTemplate
      eyebrow="Prozess"
      title="Von der ersten Analyse zur fertigen Implementierung."
      intro="Wir arbeiten in klaren Schritten: verstehen, priorisieren, bauen, einfuhren und verbessern. Ohne Tool-Chaos, ohne endlose Beratungsphase."
      image="/media/session.jpg"
      blocks={[
        {
          title: '1. Verstehen',
          body: 'Wir betrachten Unternehmen, Rollen, Engpasse, Daten und bestehende Tools.',
          points: ['Erstgesprach', 'Prozessmapping', 'Schnittstellen prufen']
        },
        {
          title: '2. Bauen',
          body: 'Aus einem priorisierten Use Case wird ein konkreter Workflow oder Assistent.',
          points: ['Konzept', 'Integration', 'Testing']
        },
        {
          title: '3. Einfuhren',
          body: 'Das Team bekommt eine Losung, die im Alltag funktioniert und weiter optimiert wird.',
          points: ['Rollout', 'Schulung', 'Monitoring']
        }
      ]}
    />
  )
}
