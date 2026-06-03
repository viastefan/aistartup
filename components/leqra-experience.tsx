'use client'

import Link from 'next/link'
import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Check, FileText, Lock, ShieldCheck } from 'lucide-react'
import { LeqraMark } from '@/components/leqra-mark'

const fragments = [
  'Client asks for update',
  'Decision pending',
  'Approval missing',
  'Scope changed',
  'Task unassigned',
  'Risk detected',
  'Final_final.pdf',
  'CRM note',
  'Meeting note',
  'Report needed',
  'Customer waiting',
  'Process unclear'
]

const lanes = ['Knowledge', 'Process', 'Task', 'Decision', 'Approval', 'Risk', 'Workflow', 'Client', 'Report']

const problemCards = [
  {
    title: 'Scattered Knowledge',
    body: 'Important information lives across documents, emails, tools, meetings and internal conversations.'
  },
  {
    title: 'Lost Work',
    body: 'Tasks, decisions, approvals, risks and promises disappear before they become manageable.'
  },
  {
    title: 'Unready AI',
    body: 'Generic AI can answer questions, but it cannot operate reliably without structured business context.'
  }
]

const layers = [
  {
    title: 'Data & Knowledge Mapping',
    body: 'Leqra identifies where company knowledge lives and how it connects to real operations.'
  },
  {
    title: 'Operational Structuring',
    body: 'Scattered information becomes roles, processes, tasks, decisions, approvals and workflows.'
  },
  {
    title: 'AI Readiness Layer',
    body: 'The company is prepared for LLMs, automations, internal assistants and intelligent systems.'
  },
  {
    title: 'Workspace Activation',
    body: 'Structured intelligence can power systems like Festag and briefing logic like Tagro.'
  }
]

const relationship = [
  {
    name: 'Leqra',
    line: 'Makes the company AI-ready.',
    body: 'Structures knowledge, processes, workflows, data and operational logic.'
  },
  {
    name: 'Festag',
    line: 'Makes work manageable.',
    body: 'Turns structured operations into projects, tasks, clients, approvals, decisions and dashboards.'
  },
  {
    name: 'Tagro',
    line: 'Makes progress understandable.',
    body: 'Translates work into calm briefings, reports, audio summaries and clear next steps.'
  }
]

const useCases = [
  {
    title: 'Agencies & Service Companies',
    problem: 'Client feedback, scope changes and approvals are scattered across calls, emails and tools.',
    leqra: 'Briefings, phases, approvals, decisions and scope changes.',
    festag: 'Projects, clients, tasks, approvals and status reports.',
    tagro: 'Weekly client briefings, risks and next steps.'
  },
  {
    title: 'Real Estate Companies',
    problem: 'Object data, leads, owner communication and documents are spread across systems and people.',
    leqra: 'Properties, owners, leads, documents, valuation logic and owner updates.',
    festag: 'Property projects, owner portals, lead workflows and document checklists.',
    tagro: 'Owner reports, viewing updates and missing documents.'
  },
  {
    title: 'Hospitality & Hotel Groups',
    problem: 'Guest knowledge, service requests and management updates live in PMS, emails, SOPs and staff knowledge.',
    leqra: 'Guest questions, service processes, SOPs, escalation paths and knowledge updates.',
    festag: 'Hotel operations projects, internal tasks and management reporting.',
    tagro: 'Operations briefings, recurring guest issues and improvement suggestions.'
  },
  {
    title: 'Consulting & B2B Teams',
    problem: 'Meetings, decisions, deliverables and responsibilities often disappear in communication.',
    leqra: 'Client goals, deliverables, decisions, risks, tasks and reporting cycles.',
    festag: 'Client workspaces, approvals, timelines and project visibility.',
    tagro: 'Executive summaries, decision logs and project health.'
  },
  {
    title: 'Internal Operations',
    problem: 'Leadership lacks a clear picture of responsibilities, blockers, priorities and team progress.',
    leqra: 'Processes, ownership, tasks, risks, approvals and internal knowledge.',
    festag: 'Team dashboards, workspaces, internal projects and priorities.',
    tagro: 'Management briefings, risk summaries and action points.'
  }
]

const features = [
  ['AI Readiness Audit', 'Understand where your company stands before implementing AI.'],
  ['Knowledge Core', 'Structure company knowledge into usable, verified operational context.'],
  ['Process Mapping', 'Map recurring workflows, responsibilities, approvals and escalation paths.'],
  ['WorkGraph Preparation', 'Connect people, projects, documents, decisions, risks, tasks and reports.'],
  ['Automation Blueprint', 'Identify what can be automated safely and what needs human approval.'],
  ['Festag Activation', 'Turn operations into manageable projects, clients, approvals and status systems.'],
  ['Tagro Briefing Logic', 'Prepare the context Tagro needs to create clear reports and briefings.'],
  ['Continuous AI Operations', 'Keep knowledge, workflows and AI systems updated as the company changes.']
]

const before = [
  'Knowledge hidden in documents',
  'Tasks lost in emails',
  'Clients asking for status',
  'Manual reporting',
  'AI tools without context',
  'Decisions not documented',
  'Approvals missing',
  'Status hidden in people heads'
]

const after = [
  'AI-ready company knowledge',
  'Structured projects and workflows',
  'Clear responsibilities',
  'Managed approvals and decisions',
  'Festag-ready operations',
  'Tagro-powered clarity',
  'Automated status briefings',
  'Operational risk detection'
]

const process = [
  ['Audit', 'We analyze data sources, communication patterns, workflows, tools and bottlenecks.'],
  ['Structure', 'We turn scattered knowledge into roles, decisions, approvals, tasks and knowledge layers.'],
  ['Activate', 'We connect company logic to AI systems, automations and workspaces like Festag.'],
  ['Operate', 'We improve the system as teams, clients, processes and knowledge evolve.']
]

const pricing = [
  {
    name: 'AI Readiness Audit',
    price: 'from EUR 1,500',
    body: 'For companies that want to understand where AI can create real operational value.',
    items: ['data and workflow analysis', 'AI opportunity map', 'readiness score', 'recommended roadmap'],
    cta: 'Start Audit'
  },
  {
    name: 'Leqra Operations Setup',
    price: 'from EUR 7,500',
    body: 'For companies that want to become AI-ready and prepare work for intelligent management.',
    items: ['knowledge structuring', 'process mapping', 'Festag-ready project structures', 'automation blueprint'],
    cta: 'Plan Setup'
  },
  {
    name: 'Continuous AI Operations',
    price: 'from EUR 1,500/month',
    body: 'For companies that want to keep their AI-ready structure alive and improving.',
    items: ['knowledge updates', 'workflow optimization', 'Tagro briefing optimization', 'ongoing advisory'],
    cta: 'Request Retainer'
  }
]

const trustItems = [
  'minimal data access to start',
  'clearly defined data scope',
  'no use for third-party model training',
  'project-based access control',
  'NDA and data processing agreements possible',
  'human approval for critical workflows'
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
          <p className="leqra-kicker">AI Operations Infrastructure</p>
          <h1>
            <span>From scattered</span>{' '}
            <span>work to structured</span>{' '}
            <span>intelligence.</span>
          </h1>
          <p>
            Leqra prepares your company for AI by structuring knowledge, workflows and operations into systems that
            can be managed, automated and explained.
          </p>
          <span>Leqra makes companies AI-ready. Festag makes work manageable. Tagro makes progress understandable.</span>
          <div className="leqra-actions">
            <Link className="nw-button nw-button-primary" href="#contact">
              Start AI Readiness Audit
              <ArrowRight size={16} />
            </Link>
            <Link className="nw-button nw-button-secondary" href="#system">
              Explore the System
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
          <p className="leqra-kicker">The real blocker</p>
          <h2>Companies do not lack AI. They lack structure.</h2>
          <p>
            Most companies already have valuable knowledge. It lives in documents, inboxes, meetings, project tools,
            CRM systems, spreadsheets and people heads. Without structure, AI cannot know what is official, outdated,
            responsible, risky or ready to become work.
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
          <h2>The intelligence layer before AI can work.</h2>
          <p>
            Leqra turns scattered company reality into AI-ready structure: knowledge, processes, roles, decisions,
            approvals, workflows and operational logic.
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

      <section className="leqra-relationship-section" id="relationship">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">System relationship</p>
          <h2>From AI readiness to operational clarity.</h2>
          <p>Leqra builds the foundation. Festag becomes the cockpit. Tagro explains what matters.</p>
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
        <p className="leqra-system-line">Leqra structures the company. Festag manages the work. Tagro explains the progress.</p>
      </section>

      <section className="leqra-usecase-section" id="use-cases" ref={useCaseRef}>
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Use cases</p>
          <h2>Built for companies where work lives in communication.</h2>
          <p>
            Leqra is useful wherever customer requests, decisions, approvals and operational knowledge are scattered
            across messages, documents and tools.
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
                    <dt>Leqra structures</dt>
                    <dd>{item.leqra}</dd>
                  </div>
                  <div>
                    <dt>Managed in Festag</dt>
                    <dd>{item.festag}</dd>
                  </div>
                  <div>
                    <dt>Explained by Tagro</dt>
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
          <p className="leqra-kicker">Readiness engine</p>
          <h2>Not a chatbot. A company readiness engine.</h2>
          <p>Leqra does not simply answer questions. It prepares the operating structure intelligent systems need.</p>
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
            <span>AI readiness score</span>
            <strong>78%</strong>
          </div>
          <div>
            <span>Data sources mapped</span>
            <strong>12</strong>
          </div>
          <div>
            <span>Recurring workflows detected</span>
            <strong>34</strong>
          </div>
          <div>
            <span>Approval flows missing</span>
            <strong>5</strong>
          </div>
          <div>
            <span>Automation opportunities found</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Recommended next step</span>
            <strong>Operations Setup</strong>
          </div>
        </div>
      </section>

      <section className="leqra-before-after-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Before / After</p>
          <h2>Before Leqra, work is scattered. After Leqra, work is structured.</h2>
        </div>
        <div className="leqra-compare-grid">
          <article>
            <h3>Scattered Work</h3>
            {before.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
          <article>
            <h3>Structured Intelligence</h3>
            {after.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </article>
        </div>
      </section>

      <section className="leqra-process-section" id="process">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Process</p>
          <h2>How Leqra transforms a company.</h2>
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
          <p className="leqra-kicker">Pricing</p>
          <h2>Start with structure. Scale into intelligence.</h2>
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
              <Link className="nw-button nw-button-secondary" href="#contact">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
        <p className="leqra-enterprise-line">Enterprise, multi-team and white-label implementations available on request.</p>
      </section>

      <section className="leqra-trust-section">
        <div className="leqra-section-copy">
          <p className="leqra-kicker">Data control</p>
          <h2>Your company data stays under your control.</h2>
          <p>
            Leqra starts with a controlled, low-risk data scope. You do not give Leqra all your data. You approve
            specific knowledge areas for a controlled transformation process.
          </p>
        </div>
        <div className="leqra-trust-grid">
          <article>
            <Lock size={18} />
            <h3>Controlled access</h3>
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
            <span>Public company knowledge</span>
            <span>Approved internal processes</span>
            <span>Optional sensitive systems</span>
            <span>Excluded data</span>
            <span>Human approval required</span>
          </article>
        </div>
      </section>

      <section className="leqra-final-section" id="contact">
        <LeqraMark />
        <p className="leqra-kicker">Start the foundation</p>
        <h2>Your company is already full of intelligence. Leqra makes it usable.</h2>
        <p>
          Start with an AI Readiness Audit and discover how your knowledge, workflows and projects can become
          structured, manageable and AI-powered.
        </p>
        <div className="leqra-actions">
          <a className="nw-button nw-button-primary" href="mailto:hello@leqra.ai?subject=AI%20Readiness%20Audit">
            Book AI Readiness Call
            <ArrowRight size={16} />
          </a>
          <Link className="nw-button nw-button-secondary" href="#system">
            Explore Leqra System
          </Link>
        </div>
      </section>
    </div>
  )
}
