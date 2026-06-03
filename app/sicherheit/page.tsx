import { SubpageTemplate } from '@/components/subpage-template'

export default function SicherheitPage() {
  return (
    <SubpageTemplate
      eyebrow="Sicherheit und Datenkontrolle"
      title="KI-Bereitschaft ohne unkontrollierten Datenzugriff."
      intro="Leqra startet mit klar abgegrenzten Wissensbereichen, kontrollierten Rechten und menschlicher Freigabe für kritische Workflows."
      metric="Kontrolliert"
      metricLabel="Datenprinzip"
      blocks={[
        {
          title: 'Scope statt Vollzugriff',
          body: 'Zu Beginn werden nur freigegebene Daten- und Wissensbereiche analysiert.',
          points: ['definierter Datenumfang', 'keine pauschale Tool-Anbindung', 'klare Verantwortliche', 'Auditierbarkeit']
        },
        {
          title: 'Rechte und Rollen',
          body: 'Strukturierte Arbeit braucht klare Zugriffe: Wer darf sehen, ändern, freigeben oder automatisieren?',
          points: ['Rollenmodell', 'Projektzugriff', 'Freigabeebenen', 'Owner-Logik']
        },
        {
          title: 'Human-in-the-loop',
          body: 'Kritische Aktionen bleiben unter menschlicher Kontrolle, bevor sie automatisiert oder ausgeführt werden.',
          points: ['Freigabeprozesse', 'Risiko-Checks', 'Entscheidungspflichten', 'Eskalation']
        },
        {
          title: 'Verträge und Datenschutz',
          body: 'NDA, AV-Verträge und projektspezifische Datenregeln können vor der Umsetzung definiert werden.',
          points: ['NDA möglich', 'AV-Vertrag möglich', 'Datenminimierung', 'Dokumentation']
        }
      ]}
      secondary={[
        {
          title: 'Keine Nutzung für fremdes Modelltraining',
          body: 'Der Fokus liegt auf der Strukturierung deines Unternehmens. Unternehmensdaten werden nicht als Trainingsmaterial für fremde Zwecke behandelt.'
        },
        {
          title: 'Sicherer Start',
          body: 'Der erste Schritt kann mit öffentlich verfügbarem Wissen, freigegebenen Prozessen und Beispielworkflows beginnen, bevor sensible Systeme angebunden werden.'
        }
      ]}
    />
  )
}
