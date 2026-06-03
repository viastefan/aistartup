'use client'

import Link from 'next/link'
import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Check, FileText, Lock, ShieldCheck } from 'lucide-react'
import { LeqraMark } from '@/components/leqra-mark'

const fragments = [
  'Kundenfrage offen',
  'Freigabe fehlt',
  'Entscheidung wartet',
  'Scope geändert',
  'Aufgabe ohne Owner',
  'Risiko erkannt',
  'Final_final.pdf',
  'CRM-Notiz',
  'Meeting-Protokoll',
  'Report benötigt',
  'Kunde wartet',
  'Prozess unklar'
]

const lanes = ['Wissen', 'Prozess', 'Aufgabe', 'Entscheidung', 'Freigabe', 'Risiko', 'Workflow', 'Kunde', 'Report']

const problemCards = [
  {
    title: 'Verstreutes Wissen',
    body: 'Wichtige Informationen liegen in Dokumenten, E-Mails, Meetings, Projekttools, Tabellen und Köpfen.'
  },
  {
    title: 'Unsichtbare Arbeit',
    body: 'Aufgaben, Entscheidungen, Risiken und Zusagen verschwinden, bevor daraus verlässliche Arbeit wird.'
  },
  {
    title: 'KI ohne Kontext',
    body: 'KI-Tools können antworten. Sie können aber nicht zuverlässig handeln, wenn der Unternehmenskontext fehlt.'
  }
]

const layers = [
  {
    title: 'Daten- und Wissenslandkarte',
    body: 'Leqra erkennt, wo Unternehmenswissen entsteht, wem es gehört und wie es mit echter Arbeit verbunden ist.'
  },
  {
    title: 'Operative Strukturierung',
    body: 'Aus verstreuten Signalen werden Rollen, Prozesse, Aufgaben, Entscheidungen, Freigaben und Verantwortlichkeiten.'
  },
  {
    title: 'KI-Bereitschafts-Layer',
    body: 'Das Unternehmen wird so vorbereitet, dass KI-Assistenten, Automationen und interne Systeme verlässlich arbeiten können.'
  },
  {
    title: 'Aktivierung in Festag und Tagro',
    body: 'Die strukturierte Intelligenz kann in operative Workspaces, Briefings, Reports und Managementlogik überführt werden.'
  }
]

const relationship = [
  {
    name: 'Leqra',
    line: 'Macht Unternehmen KI-bereit.',
    body: 'Strukturiert Wissen, Prozesse, Daten, Verantwortlichkeiten, Entscheidungen und operative Logik.'
  },
  {
    name: 'Festag',
    line: 'Macht Arbeit steuerbar.',
    body: 'Verwandelt strukturierte Operations in Projekte, Aufgaben, Kunden, Freigaben, Entscheidungen und Dashboards.'
  },
  {
    name: 'Tagro',
    line: 'Macht Fortschritt verständlich.',
    body: 'Übersetzt laufende Arbeit in Management-Briefings, Statusberichte, Risiken und nächste Schritte.'
  }
]

const useCases = [
  {
    title: 'Agenturen und Dienstleister',
    problem: 'Kundenfeedback, Scope-Änderungen und Freigaben liegen in Calls, E-Mails und Tools.',
    leqra: 'Briefings, Phasen, Freigaben, Entscheidungen und Scope-Änderungen.',
    festag: 'Projekte, Kundenbereiche, Aufgaben, Freigaben und Statusberichte.',
    tagro: 'Wochenbriefings, Risiken, offene Punkte und nächste Schritte.'
  },
  {
    title: 'Immobilienunternehmen',
    problem: 'Objektdaten, Leads, Eigentümerkommunikation und Dokumente sind über Systeme und Personen verteilt.',
    leqra: 'Objekte, Eigentümer, Leads, Unterlagen, Bewertungslogik und Updates.',
    festag: 'Objektprojekte, Eigentümerportale, Lead-Flows und Dokumentenlisten.',
    tagro: 'Eigentümerberichte, Besichtigungsstatus und fehlende Unterlagen.'
  },
  {
    title: 'Hotels und Hospitality-Gruppen',
    problem: 'Gästewissen, Serviceanfragen, SOPs und Managementupdates leben in PMS, E-Mails und Teamwissen.',
    leqra: 'Gästefragen, Serviceprozesse, SOPs, Eskalationswege und Wissensupdates.',
    festag: 'Hotel-Operations, interne Aufgaben und Managementübersicht.',
    tagro: 'Operations-Briefings, wiederkehrende Probleme und Verbesserungsvorschläge.'
  },
  {
    title: 'Beratung und B2B-Teams',
    problem: 'Meetings, Entscheidungen, Deliverables und Zuständigkeiten verschwinden in Kommunikation.',
    leqra: 'Kundenziele, Deliverables, Entscheidungen, Risiken, Aufgaben und Reportingzyklen.',
    festag: 'Kundenworkspaces, Freigaben, Zeitpläne und Projekttransparenz.',
    tagro: 'Executive Summaries, Entscheidungslogs und Projektgesundheit.'
  },
  {
    title: 'Interne Operations',
    problem: 'Führungsteams fehlt ein klares Bild von Verantwortlichkeiten, Blockern, Prioritäten und Fortschritt.',
    leqra: 'Prozesse, Ownership, Aufgaben, Risiken, Freigaben und internes Wissen.',
    festag: 'Team-Dashboards, interne Projekte, Prioritäten und Workflows.',
    tagro: 'Management-Briefings, Risikoübersichten und konkrete Action Points.'
  }
]

const features = [
  ['KI-Bereitschafts-Audit', 'Verstehen, wo das Unternehmen steht und welche KI-Projekte wirklich tragfähig sind.'],
  ['Knowledge Core', 'Unternehmenswissen in nutzbaren, geprüften und versionierten Kontext verwandeln.'],
  ['Prozessmodellierung', 'Wiederkehrende Abläufe, Verantwortlichkeiten, Freigaben und Eskalationen strukturieren.'],
  ['WorkGraph-Vorbereitung', 'Menschen, Projekte, Dokumente, Entscheidungen, Risiken, Aufgaben und Reports verbinden.'],
  ['Automation Blueprint', 'Erkennen, was automatisiert werden kann und wo menschliche Freigabe nötig bleibt.'],
  ['Festag-Aktivierung', 'Operations in steuerbare Projekte, Kundenbereiche, Freigaben und Statussysteme bringen.'],
  ['Tagro-Briefinglogik', 'Den Kontext vorbereiten, aus dem klare Berichte, Audios und Managementbriefings entstehen.'],
  ['Kontinuierliche KI-Operations', 'Wissen, Workflows und KI-Systeme laufend aktuell halten, wenn sich das Unternehmen verändert.']
]

const detailGroups = [
  {
    title: 'Wissen',
    body: 'Dokumente, SOPs, Meetingnotizen, Webseiten, CRM-Notizen, interne Regeln und Erfahrungswissen.'
  },
  {
    title: 'Arbeit',
    body: 'Aufgaben, Verantwortliche, Fristen, Status, Blocker, Eskalationen und Übergaben.'
  },
  {
    title: 'Entscheidungen',
    body: 'Was entschieden wurde, wer entschieden hat, welche Grundlage gilt und was daraus folgt.'
  },
  {
    title: 'Freigaben',
    body: 'Angebote, Budgets, Scope, Dokumente, Kundenfeedback und kritische Prozessschritte.'
  },
  {
    title: 'Risiken',
    body: 'Verzögerungen, fehlende Informationen, unklare Ownership, veraltete Daten und offene Kundenpunkte.'
  },
  {
    title: 'Berichte',
    body: 'Status, Fortschritt, nächste Schritte, Managementsicht, Kundenupdates und Teambriefings.'
  }
]

const before = [
  'Wissen in Dokumenten versteckt',
  'Aufgaben in E-Mails verloren',
  'Kunden fragen nach Status',
  'Manuelle Reportings',
  'KI-Tools ohne Unternehmenskontext',
  'Entscheidungen nicht dokumentiert',
  'Freigaben fehlen',
  'Status lebt in Köpfen'
]

const after = [
  'KI-bereites Unternehmenswissen',
  'Strukturierte Projekte und Workflows',
  'Klare Verantwortlichkeiten',
  'Gesteuerte Freigaben und Entscheidungen',
  'Festag-bereite Operations',
  'Tagro-basierte Klarheit',
  'Automatisierbare Statusbriefings',
  'Frühe Risikoerkennung'
]

const process = [
  ['Audit', 'Wir analysieren Datenquellen, Kommunikation, Workflows, Tools, Engpässe und operative Muster.'],
  ['Struktur', 'Wir verwandeln verstreutes Wissen in Rollen, Entscheidungen, Freigaben, Aufgaben und Wissenslayer.'],
  ['Aktivierung', 'Wir verbinden Unternehmenslogik mit KI-Systemen, Automationen und Workspaces wie Festag.'],
  ['Betrieb', 'Wir verbessern das System, während sich Teams, Kunden, Prozesse und Wissen weiterentwickeln.']
]

const auditDeliverables = [
  ['Bereitschafts-Score', 'Ein realistisches Bild, welche Bereiche sofort KI-fähig sind und wo Struktur fehlt.'],
  ['Use-Case Map', 'Priorisierte Anwendungsfälle nach Nutzen, Risiko, Aufwand und Datenverfügbarkeit.'],
  ['Daten- und Tool-Landkarte', 'Welche Quellen relevant sind, welche fehlen und welche nur kontrolliert angebunden werden.'],
  ['90-Tage-Fahrplan', 'Konkrete Schritte für Struktur, Pilot, Festag-Aktivierung, Automationen und laufenden Betrieb.']
]

const pricing = [
  {
    name: 'KI-Bereitschafts-Audit',
    price: 'ab 1.500 EUR',
    body: 'Für Unternehmen, die verstehen wollen, wo KI echten operativen Wert erzeugt.',
    items: ['Daten- und Workflowanalyse', 'KI-Potenzialkarte', 'Bereitschafts-Score', 'empfohlener Fahrplan'],
    cta: 'Audit starten'
  },
  {
    name: 'Leqra Operations-Aufbau',
    price: 'ab 7.500 EUR',
    body: 'Für Unternehmen, die KI-bereit werden und Arbeit in steuerbare Systeme überführen wollen.',
    items: ['Wissensstrukturierung', 'Prozessmodellierung', 'Festag-bereite Projektstrukturen', 'Automation Blueprint'],
    cta: 'Setup planen'
  },
  {
    name: 'Kontinuierliche KI-Operations',
    price: 'ab 1.500 EUR/Monat',
    body: 'Für Unternehmen, die ihre KI-bereite Struktur dauerhaft verbessern und aktuell halten wollen.',
    items: ['Wissensupdates', 'Workflow-Optimierung', 'Tagro-Briefingoptimierung', 'laufende Beratung'],
    cta: 'Betreuung anfragen'
  }
]

const trustItems = [
  'minimaler Datenzugriff zum Start',
  'klar definierter Datenumfang',
  'keine Nutzung für fremdes Modelltraining',
  'projektbasierte Zugriffskontrolle',
  'NDA und AV-Vertrag möglich',
  'menschliche Freigabe für kritische Workflows'
]

export function LeqraExperience() {
  const heroRef = useRef<HTMLElement | null>(null)
  const systemRef = useRef<HTMLElement | null>(null)
  const useCaseRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.2 })

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroSignalY = useTransform(heroProgress, [0, 1], ['0px', '190px'])
  const heroSignalScale = useTransform(heroProgress, [0, 1], [1, 0.74])
  const fragmentY = useTransform(heroProgress, [0, 1], ['0px', '-170px'])
  const laneY = useTransform(heroProgress, [0, 1], ['120px', '0px'])

  const { scrollYProgress: systemProgress } = useScroll({ target: systemRef, offset: ['start end', 'end start'] })
  const layerY = useTransform(systemProgress, [0, 1], ['80px', '-80px'])

  const { scrollYProgress: casesProgress } = useScroll({ target: useCaseRef, offset: ['start end', 'end start'] })
  const casesX = useTransform(casesProgress, [0, 1], ['8%', '-42%'])

  return (
    <div className="leqra-page">
      <motion.div className="leqra-scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />

      <section className="leqra-hero" ref={heroRef}>
        <div className="leqra-hero-bg" aria-hidden="true" />
        <motion.div className="leqra-signal" style={{ y: heroSignalY, scale: heroSignalScale }} aria-hidden="true">
          <LeqraMark />
        </motion.div>

        <div className="leqra-fragment-field" aria-hidden="true">
          {fragments.map((fragment, index) => (
            <motion.span key={fragment} style={{ y: index % 2 === 0 ? fragmentY : laneY }}>
              {fragment}
            </motion.span>
          ))}
        </div>

        <div className="leqra-hero-copy">
          <p className="leqra-kicker">KI-Operations Infrastruktur</p>
          <h1>
            <span>Aus verstreuter</span>{' '}
            <span>Arbeit wird strukturierte</span>{' '}
            <span>Intelligenz.</span>
          </h1>
          <p>
            Leqra macht Unternehmen KI-bereit, indem Wissen, Prozesse, Entscheidungen und operative Daten in Systeme
            überführt werden, die steuerbar, automatisierbar und erklärbar sind.
          </p>
          <span>Leqra strukturiert das Unternehmen. Festag steuert die Arbeit. Tagro erklärt den Fortschritt.</span>
          <div className="leqra-actions">
            <Link className="nw-button nw-button-primary" href="/kontakt">
              KI-Bereitschafts-Audit starten
              <ArrowRight size={16} />
            </Link>
            <Link className="nw-button nw-button-secondary" href="/system">
              System ansehen
            </Link>
          </div>
        </div>

        <motion.div className="leqra-lane-board" style={{ y: laneY }} aria-hidden="true">
          {lanes.map((lane) => (
            <span key={lane}>{lane}</span>
          ))}
        </motion.div>
      </section>

      <section className="leqra-problem-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Der eigentliche Engpass</p>
          <h2>Die meisten Unternehmen haben kein KI-Problem. Sie haben ein Strukturproblem.</h2>
          <p>
            Fast jedes Unternehmen besitzt wertvolles Wissen. Es liegt nur verteilt in Dokumenten, Postfächern,
            Meetings, CRM-Systemen, Tabellen und Toollandschaften. Ohne Struktur weiß KI nicht, was offiziell,
            veraltet, verantwortlich, riskant oder handlungsreif ist.
          </p>
        </div>
        <div className="leqra-problem-grid">
          {problemCards.map((card) => (
            <article key={card.title}>
              <FileText size={18} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leqra-system-section" id="system" ref={systemRef}>
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Leqra System</p>
          <h2>Der Intelligenz-Layer, bevor KI zuverlässig arbeiten kann.</h2>
          <p>
            Leqra übersetzt Unternehmensrealität in KI-bereite Struktur: Wissen, Prozesse, Rollen, Entscheidungen,
            Freigaben, Workflows und operative Logik.
          </p>
        </div>
        <motion.div className="leqra-layer-stack" style={{ y: layerY }}>
          {layers.map((layer, index) => (
            <article key={layer.title} style={{ '--layer': index } as CSSProperties}>
              <span>Layer {index + 1}</span>
              <h3>{layer.title}</h3>
              <p>{layer.body}</p>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="leqra-detail-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Was strukturiert wird</p>
          <h2>Leqra ordnet nicht nur Daten. Leqra ordnet Arbeit.</h2>
          <p>
            Der Unterschied zwischen einem Chatbot und echter KI-Operations liegt darin, ob das System die Logik des
            Unternehmens versteht. Leqra baut diese Logik Schritt für Schritt auf.
          </p>
        </div>
        <div className="leqra-detail-grid">
          {detailGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leqra-relationship-section" id="relationship">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Systembeziehung</p>
          <h2>Von KI-Bereitschaft zu operativer Klarheit.</h2>
          <p>Leqra baut das Fundament. Festag wird das Cockpit. Tagro erklärt, was wirklich zählt.</p>
        </div>
        <div className="leqra-flow">
          {relationship.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <strong>{item.line}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="leqra-system-line">Leqra strukturiert das Unternehmen. Festag steuert die Arbeit. Tagro erklärt den Fortschritt.</p>
      </section>

      <section className="leqra-usecase-section" id="use-cases" ref={useCaseRef}>
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Anwendungsfälle</p>
          <h2>Gebaut für Unternehmen, in denen Arbeit in Kommunikation lebt.</h2>
          <p>
            Leqra ist besonders wertvoll dort, wo Kundenwünsche, Entscheidungen, Freigaben und Wissen über Nachrichten,
            Dokumente und Tools verteilt sind.
          </p>
        </div>
        <div className="leqra-usecase-viewport">
          <motion.div className="leqra-usecase-track" style={{ x: casesX }}>
            {useCases.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.problem}</p>
                <dl>
                  <div>
                    <dt>Leqra strukturiert</dt>
                    <dd>{item.leqra}</dd>
                  </div>
                  <div>
                    <dt>In Festag steuerbar</dt>
                    <dd>{item.festag}</dd>
                  </div>
                  <div>
                    <dt>Von Tagro erklärt</dt>
                    <dd>{item.tagro}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="leqra-feature-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Bereitschafts-Engine</p>
          <h2>Kein Chatbot. Eine Bereitschaftsmaschine für das Unternehmen.</h2>
          <p>Leqra beantwortet nicht nur Fragen. Leqra bereitet die operative Struktur vor, die intelligente Systeme brauchen.</p>
        </div>
        <div className="leqra-feature-grid">
          {features.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="leqra-product-console">
          <div>
            <span>KI-Bereitschafts-Score</span>
            <strong>78%</strong>
          </div>
          <div>
            <span>Datenquellen erfasst</span>
            <strong>12</strong>
          </div>
          <div>
            <span>Workflows erkannt</span>
            <strong>34</strong>
          </div>
          <div>
            <span>Fehlende Freigaben</span>
            <strong>5</strong>
          </div>
          <div>
            <span>Automationspotenziale</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Empfohlener nächster Schritt</span>
            <strong>Operations-Aufbau</strong>
          </div>
        </div>
      </section>

      <section className="leqra-before-after-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Vorher / Nachher</p>
          <h2>Vor Leqra ist Arbeit verstreut. Nach Leqra ist Arbeit strukturierte Intelligenz.</h2>
        </div>
        <div className="leqra-compare-grid">
          <article>
            <h3>Verstreute Arbeit</h3>
            {before.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
          <article>
            <h3>Strukturierte Intelligenz</h3>
            {after.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </article>
        </div>
      </section>

      <section className="leqra-audit-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Audit-Ergebnis</p>
          <h2>Nach dem Audit gibt es keinen Nebel mehr. Es gibt einen Plan.</h2>
          <p>
            Das Ziel ist nicht eine lange Präsentation. Das Ziel ist ein belastbarer Fahrplan, was strukturiert,
            implementiert, automatisiert und bewusst nicht automatisiert wird.
          </p>
        </div>
        <div className="leqra-audit-grid">
          {auditDeliverables.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leqra-process-section" id="process">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Prozess</p>
          <h2>Wie Leqra ein Unternehmen transformiert.</h2>
        </div>
        <div className="leqra-process-line">
          {process.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leqra-pricing-section" id="pricing">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Preise</p>
          <h2>Mit Struktur starten. In Intelligenz skalieren.</h2>
        </div>
        <div className="leqra-pricing-grid">
          {pricing.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <p>{item.body}</p>
              <ul>
                {item.items.map((feature) => (
                  <li key={feature}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link className="nw-button nw-button-secondary" href="/kontakt">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
        <p className="leqra-enterprise-line">Enterprise-, Multi-Team- und White-Label-Implementierungen auf Anfrage.</p>
      </section>

      <section className="leqra-trust-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Datenkontrolle</p>
          <h2>Unternehmensdaten bleiben unter Kontrolle.</h2>
          <p>
            Leqra startet mit einem kontrollierten, risikoarmen Datenumfang. Nicht alles wird angebunden. Es werden
            konkrete Wissensbereiche freigegeben, geprüft und strukturiert.
          </p>
        </div>
        <div className="leqra-trust-grid">
          <article>
            <Lock size={18} />
            <h3>Kontrollierter Zugriff</h3>
            <ul>
              {trustItems.map((item) => (
                <li key={item}>
                  <ShieldCheck size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="leqra-permission-panel">
            <span>Öffentliches Unternehmenswissen</span>
            <span>Freigegebene interne Prozesse</span>
            <span>Optionale sensible Systeme</span>
            <span>Ausgeschlossene Daten</span>
            <span>Menschliche Freigabe erforderlich</span>
          </article>
        </div>
      </section>

      <section className="leqra-final-section" id="kontakt">
        <LeqraMark />
        <p className="leqra-kicker">Fundament starten</p>
        <h2>Das Unternehmen ist bereits voller Intelligenz. Leqra macht sie nutzbar.</h2>
        <p>
          Starte mit einem KI-Bereitschafts-Audit und finde heraus, wie Wissen, Workflows und Projekte strukturiert,
          steuerbar und KI-fähig werden.
        </p>
        <div className="leqra-actions">
          <a className="nw-button nw-button-primary" href="mailto:hello@leqra.ai?subject=KI-Bereitschafts-Audit">
            Audit anfragen
            <ArrowRight size={16} />
          </a>
          <Link className="nw-button nw-button-secondary" href="/system">
            Leqra System ansehen
          </Link>
        </div>
      </section>
    </div>
  )
}
