import {
  BrainCircuit,
  Code2,
  FileSearch,
  GraduationCap,
  MessagesSquare,
  PanelsTopLeft,
  Workflow
} from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'AI-Prozessanalyse',
    body: 'Wir prufen, welche Aufgaben, Daten und Kommunikationswege sich wirklich fur AI eignen.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-Assistenten',
    body: 'Interne Assistenten fur Wissen, Dokumente, E-Mails, Angebote, Recherche und operative Fragen.'
  },
  {
    icon: MessagesSquare,
    title: 'Chatbots & Lead-Qualifizierung',
    body: 'Website- und Support-Chats, die Anfragen strukturieren, qualifizieren und weiterleiten.'
  },
  {
    icon: Workflow,
    title: 'Workflow-Automatisierung',
    body: 'Automatisierte Ablaufe zwischen CRM, E-Mail, Kalender, Dokumenten, Tabellen und internen Tools.'
  },
  {
    icon: PanelsTopLeft,
    title: 'Dokumenten- und Datenverarbeitung',
    body: 'AI-gestutzte Auswertung von PDFs, E-Mails, Anfragen, Vertragen, Rechnungen oder Reports.'
  },
  {
    icon: GraduationCap,
    title: 'AI Enablement',
    body: 'Wir zeigen Teams, wie sie AI produktiv, sicher und sinnvoll im Alltag nutzen.'
  },
  {
    icon: Code2,
    title: 'Individuelle AI-Software',
    body: 'Wenn Standardlosungen nicht reichen, bauen wir individuelle Tools, Dashboards und Schnittstellen.'
  }
]

export function ServicesSection() {
  return (
    <section className="section" id="leistungen">
      <div className="section-heading">
        <p className="eyebrow">Leistungen</p>
        <h2>Was wir fur Unternehmen implementieren.</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article className="service-card" key={service.title}>
              <span className="card-icon">
                <Icon size={18} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
