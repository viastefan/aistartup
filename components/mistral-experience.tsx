'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Building2, Check, Cpu, Database, Gauge, Lock, MessageSquareText, Workflow } from 'lucide-react'

const newsItems = [
  'AI-Check fur operative Teams',
  'Agenten fur Vertrieb und Service',
  'Automatisierung ohne Tool-Chaos'
]

const proofLogos = ['Immobilien', 'Produktion', 'Beratung', 'Handwerk', 'Verwaltung', 'Operations']

const products = [
  {
    icon: MessageSquareText,
    title: 'AI-Check',
    kicker: 'Analyse',
    body: 'Ein gefuhrter Unternehmens-Check zeigt Prozesse, Datenquellen und die ersten realistischen AI-Potenziale.',
    bullets: ['Prozesskarte', 'Tool-Analyse', 'Priorisierte Roadmap']
  },
  {
    icon: Cpu,
    title: 'Agenten',
    kicker: 'Umsetzung',
    body: 'Wir bauen Assistenten fur Leads, Support, Wissen, Dokumente und interne operative Fragen.',
    bullets: ['Website-Chat', 'Wissensagent', 'Lead-Qualifizierung']
  },
  {
    icon: Workflow,
    title: 'Workflows',
    kicker: 'Automation',
    body: 'Bestehende Systeme werden verbunden, damit wiederkehrende Aufgaben automatisch durchlaufen.',
    bullets: ['CRM', 'E-Mail', 'Kalender', 'Dokumente']
  },
  {
    icon: Gauge,
    title: 'Betrieb',
    kicker: 'Enablement',
    body: 'Teams bekommen klare Einfuhrung, Monitoring und saubere Regeln fur AI im Alltag.',
    bullets: ['Schulung', 'Governance', 'Optimierung']
  }
]

const cases = [
  {
    title: 'Immobilien',
    body: 'Expose-Texte, Anfragequalifizierung, Terminabstimmung und CRM-Updates laufen aus einem Prozess.'
  },
  {
    title: 'Produktion',
    body: 'Wartungsnotizen, interne Wissensfragen und Schichtubergaben werden schneller auffindbar.'
  },
  {
    title: 'Beratung',
    body: 'Recherche, Angebotsvorbereitung, Meeting-Summaries und Projektupdates werden strukturiert.'
  },
  {
    title: 'Verwaltung',
    body: 'E-Mails, Formulare, PDFs und Freigaben werden vorsortiert, zusammengefasst und weitergeleitet.'
  },
  {
    title: 'Service',
    body: 'Kundenfragen werden qualifiziert, mit Wissen abgeglichen und an die richtigen Personen ubergeben.'
  }
]

const deploymentModes = [
  {
    icon: Lock,
    title: 'DSGVO-bewusst',
    body: 'Datenflusse, Anbieter, Rollen und Zugriff werden vor der Umsetzung sauber eingeordnet.'
  },
  {
    icon: Database,
    title: 'Mit euren Tools',
    body: 'CRM, E-Mail, Kalender, Sheets, Dokumente und Website-Formulare bleiben Teil des Systems.'
  },
  {
    icon: Building2,
    title: 'Nah am Betrieb',
    body: 'Jede Losung wird so eingefuhrt, dass Teams sie im Alltag wirklich nutzen.'
  }
]

export function MistralExperience() {
  const heroRef = useRef<HTMLElement | null>(null)
  const productRef = useRef<HTMLElement | null>(null)
  const casesRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.24 })

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0px', '180px'])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.92])
  const heroOpacity = useTransform(heroProgress, [0, 0.82], [1, 0])

  const { scrollYProgress: productProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end start']
  })
  const consoleY = useTransform(productProgress, [0, 1], ['80px', '-120px'])
  const consoleRotate = useTransform(productProgress, [0, 0.5, 1], ['-2deg', '0deg', '2deg'])

  const { scrollYProgress: casesProgress } = useScroll({
    target: casesRef,
    offset: ['start end', 'end start']
  })
  const caseX = useTransform(casesProgress, [0, 1], ['8%', '-42%'])

  return (
    <>
      <motion.div className="mistral-scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />

      <section className="mistral-hero" ref={heroRef}>
        <motion.div className="mistral-hero-inner" style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}>
          <div className="mistral-hero-grid" aria-hidden="true">
            {Array.from({ length: 48 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="mistral-hero-copy">
            <h1>
              AI.
              <span>In Produktion.</span>
            </h1>
            <p>
              Neuralwerk hilft Unternehmen im Mittelstand, AI-Systeme nicht nur zu testen, sondern in Vertrieb,
              Service, Operations und Wissen sauber einzufuhren.
            </p>
            <div className="mistral-hero-actions">
              <Link className="nw-button nw-button-primary" href="#ai-check">
                AI-Check starten
                <ArrowRight size={16} />
              </Link>
              <Link className="nw-button nw-button-secondary" href="/leistungen">
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="mistral-news-rail" aria-label="Aktuelles">
            <span>Neuralwerk OS</span>
            {newsItems.map((item) => (
              <Link key={item} href="#ai-check">
                {item}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mistral-proof-strip" aria-label="Einsatzbereiche">
        <div className="mistral-proof-track">
          {[...proofLogos, ...proofLogos].map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>
      </section>

      <section className="mistral-product-scroll" ref={productRef}>
        <div className="mistral-section-heading">
          <p>Do it all with Neuralwerk.</p>
          <h2>Von der Prozesslandkarte bis zum laufenden AI-System.</h2>
        </div>

        <div className="mistral-product-layout">
          <div className="mistral-product-stack">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.article
                  className="mistral-product-card"
                  key={product.title}
                  style={{ top: 116 + index * 18 }}
                  initial={false}
                  whileInView={{ y: 0, scale: 1 }}
                  viewport={{ once: false, margin: '-20% 0px -25% 0px' }}
                  transition={{ duration: 0.72, ease: [0.2, 0.9, 0.2, 1] }}
                >
                  <div className="mistral-card-index">0{index + 1}</div>
                  <span className="mistral-product-icon">
                    <Icon size={20} />
                  </span>
                  <p>{product.kicker}</p>
                  <h3>{product.title}</h3>
                  <span>{product.body}</span>
                  <ul>
                    {product.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Check size={14} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>

          <motion.div className="mistral-console-sticky" style={{ y: consoleY, rotate: consoleRotate }}>
            <div className="mistral-console">
              <div className="mistral-console-top">
                <span>Neuralwerk System Map</span>
                <i />
              </div>
              <video autoPlay muted loop playsInline preload="auto" poster="/media/session.jpg" aria-hidden="true">
                <source src="/media/neuralwerk-workshop-motion.mp4" type="video/mp4" />
              </video>
              <div className="mistral-console-flow" aria-hidden="true">
                <span className="flow-node node-1">CRM</span>
                <span className="flow-node node-2">Mail</span>
                <span className="flow-node node-3">AI</span>
                <span className="flow-node node-4">Team</span>
                <span className="flow-line line-1" />
                <span className="flow-line line-2" />
                <span className="flow-line line-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mistral-case-scroll" ref={casesRef}>
        <div className="mistral-section-heading">
          <p>Use cases, die sofort Sinn machen.</p>
          <h2>AI beginnt dort, wo Arbeit jeden Tag wiederkehrt.</h2>
        </div>
        <div className="mistral-case-viewport">
          <motion.div className="mistral-case-track" style={{ x: caseX }}>
            {cases.map((item, index) => (
              <article className="mistral-case-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mistral-deploy-section">
        <div className="mistral-deploy-copy">
          <h2>AI-Deployment, das zu eurem Unternehmen passt.</h2>
          <p>
            Ob erster Pilot, interner Assistent oder langfristiger AI-Betrieb: Wir bauen die Losung so, dass sie
            kontrollierbar, nutzbar und anschlussfahig bleibt.
          </p>
          <Link className="nw-button nw-button-primary" href="#ai-check">
            Einsatz prufen
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mistral-deploy-grid">
          {deploymentModes.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={false}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={18} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            )
          })}
        </div>
      </section>
    </>
  )
}
