export type AssessmentInput = {
  companyName: string
  industry: string
  employees: string
  website?: string
  timeConsumingProcesses: string
  currentTools: string
  goals: string
  contactName: string
  email: string
  phone?: string
}

export type AssessmentResult = {
  companyName: string
  summary: string
  potentials: string[]
  automations: string[]
  nextStep: string
  effort: string
}

const industryProfiles: Record<
  string,
  {
    potentials: string[]
    automations: string[]
    nextStep: string
  }
> = {
  immobilien: {
    potentials: ['Expose-Automatisierung', 'Anfragequalifizierung', 'Terminabstimmung und CRM-Follow-ups'],
    automations: ['Eingehende Anfragen strukturiert vorqualifizieren', 'Expose-Daten aus Objektinfos und Dokumenten vorbereiten'],
    nextStep: 'Ein kleiner Pilot fur Anfragequalifizierung plus Expose-Vorbereitung.'
  },
  hotel: {
    potentials: ['Gastekommunikation', 'Reservierungsanfragen', 'Bewertungsmanagement und interne Reports'],
    automations: ['Standardanfragen priorisieren und beantworten', 'Wochentliche Gaste- und Bewertungsreports erstellen'],
    nextStep: 'Ein Guest-Communication-Flow fur E-Mail, Website und interne Ubergaben.'
  },
  agentur: {
    potentials: ['Projektstatus', 'Content-Prozesse', 'Angebotserstellung und Kundenkommunikation'],
    automations: ['Briefings in Aufgaben und Timelines ubersetzen', 'Statusupdates aus Projekttools vorbereiten'],
    nextStep: 'Ein interner Projektassistent fur Briefings, Status und Angebotsvorbereitung.'
  }
}

function detectProfile(industry: string) {
  const value = industry.toLowerCase()
  if (/immobilien|makler|hausverwaltung|real estate/.test(value)) return industryProfiles.immobilien
  if (/hotel|gastro|tourismus|resort|restaurant/.test(value)) return industryProfiles.hotel
  if (/agentur|marketing|design|software|beratung|studio/.test(value)) return industryProfiles.agentur

  return {
    potentials: [
      'E-Mail-Automatisierung',
      'Dokumentenverarbeitung',
      'Interne Wissensdatenbank',
      'Reporting',
      'Lead-Qualifizierung'
    ],
    automations: [
      'Wiederkehrende E-Mails und Anfragen vorsortieren',
      'Dokumente auswerten und als Entscheidungsgrundlage zusammenfassen'
    ],
    nextStep: 'Eine fokussierte Prozessaufnahme mit anschliessendem Automation Sprint.'
  }
}

export function createAssessmentResult(input: AssessmentInput): AssessmentResult {
  const profile = detectProfile(input.industry)
  const companyName = input.companyName.trim() || 'Ihr Unternehmen'
  const employeeText = input.employees ? ` mit ca. ${input.employees} Mitarbeitenden` : ''

  return {
    companyName,
    summary: `${companyName}${employeeText} hat nach der ersten Einschatzung konkrete Ansatzpunkte fur AI und Automatisierung. Besonders relevant wirken Prozesse rund um ${input.timeConsumingProcesses || 'Kommunikation, Dokumente und interne Ablaufe'}.`,
    potentials: profile.potentials.slice(0, 3),
    automations: profile.automations.slice(0, 2),
    nextStep: profile.nextStep,
    effort: 'Erster produktiver Pilot realistisch in 2 bis 4 Wochen, abhangig von Tool-Zugangen und Datenlage.'
  }
}
