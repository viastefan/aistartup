import { SubpageTemplate } from '@/components/subpage-template'

export default function SystemPage() {
  return (
    <SubpageTemplate
      eyebrow="Leqra System"
      title="Der Layer, der Unternehmen vor KI strukturiert."
      intro="Leqra baut die operative Logik, die KI-Systeme brauchen: Wissen, Rollen, Prozesse, Entscheidungen, Freigaben, Risiken und Arbeitskontext."
      metric="4 Layer"
      metricLabel="Systemarchitektur"
      blocks={[
        {
          title: 'Knowledge Layer',
          body: 'Alles relevante Unternehmenswissen wird als prüfbarer Kontext organisiert.',
          points: ['Dokumente', 'SOPs', 'Meetingwissen', 'Kundenkontext']
        },
        {
          title: 'Operations Layer',
          body: 'Wiederkehrende Arbeit wird in Rollen, Verantwortlichkeiten, Workflows und Statuslogik überführt.',
          points: ['Aufgaben', 'Owner', 'Fristen', 'Blocker']
        },
        {
          title: 'Decision Layer',
          body: 'Entscheidungen und Freigaben werden sichtbar, nachvollziehbar und für Systeme nutzbar.',
          points: ['Entscheidungslogs', 'Freigaben', 'Eskalationen', 'Human-in-the-loop']
        },
        {
          title: 'Activation Layer',
          body: 'Die Struktur wird für Festag, Tagro, Automationen und KI-Assistenten verwendbar gemacht.',
          points: ['Festag Workspaces', 'Tagro Briefings', 'Automationen', 'Assistenten']
        }
      ]}
      secondary={[
        {
          title: 'Warum dieser Layer wichtig ist',
          body: 'KI kann erst dann zuverlässig helfen, wenn klar ist, welche Informationen gelten, wer verantwortlich ist und welche Aktion als nächstes entstehen darf.'
        },
        {
          title: 'Worin Leqra anders ist',
          body: 'Leqra ist keine Chatbot-Hülle. Leqra arbeitet an der Struktur des Unternehmens, damit mehrere KI- und Arbeitssysteme darauf aufbauen können.'
        }
      ]}
    />
  )
}
