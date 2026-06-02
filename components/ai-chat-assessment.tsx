'use client'

import { FormEvent, useMemo, useState } from 'react'
import { ArrowRight, Check, Loader2, Mail, MessageSquareText, Send, Sparkles, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { AssessmentInput, AssessmentResult } from '@/lib/assessment-mock'

type Step = {
  field: keyof AssessmentInput
  question: string
  placeholder: string
  optional?: boolean
  type?: 'text' | 'email' | 'tel' | 'url'
}

const steps: Step[] = [
  {
    field: 'companyName',
    question: 'Wie heisst Ihr Unternehmen?',
    placeholder: 'z.B. Muster Immobilien GmbH'
  },
  {
    field: 'industry',
    question: 'In welcher Branche sind Sie tatig?',
    placeholder: 'z.B. Immobilien, Hotel, Agentur, Handwerk'
  },
  {
    field: 'employees',
    question: 'Wie viele Mitarbeiter haben Sie ungefahr?',
    placeholder: 'z.B. 18'
  },
  {
    field: 'timeConsumingProcesses',
    question: 'Welche Prozesse kosten aktuell am meisten Zeit?',
    placeholder: 'z.B. Anfragen, Exposes, Angebote, E-Mails, Reporting'
  },
  {
    field: 'currentTools',
    question: 'Welche Tools nutzen Sie bereits?',
    placeholder: 'z.B. Outlook, HubSpot, Notion, Excel, Datev'
  },
  {
    field: 'goals',
    question: 'Was mochten Sie verbessern?',
    placeholder: 'z.B. schnellere Angebote, weniger manuelle Ablage, bessere Kundenantworten'
  },
  {
    field: 'website',
    question: 'Gibt es eine Website, die wir mit betrachten sollen?',
    placeholder: 'https://...',
    optional: true,
    type: 'url'
  },
  {
    field: 'contactName',
    question: 'Wie durfen wir Sie ansprechen?',
    placeholder: 'Vorname Nachname'
  },
  {
    field: 'email',
    question: 'Wie konnen wir Sie erreichen?',
    placeholder: 'name@unternehmen.de',
    type: 'email'
  },
  {
    field: 'phone',
    question: 'Telefon optional - falls ein kurzer Ruckruf besser passt.',
    placeholder: '+49 ...',
    optional: true,
    type: 'tel'
  }
]

const emptyInput: AssessmentInput = {
  companyName: '',
  industry: '',
  employees: '',
  website: '',
  timeConsumingProcesses: '',
  currentTools: '',
  goals: '',
  contactName: '',
  email: '',
  phone: ''
}

export function AiChatAssessment() {
  const [data, setData] = useState<AssessmentInput>(emptyInput)
  const [currentStep, setCurrentStep] = useState(0)
  const [draft, setDraft] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [error, setError] = useState('')

  const current = steps[currentStep]
  const progress = Math.round(((result ? steps.length : currentStep) / steps.length) * 100)

  const answeredSteps = useMemo(
    () =>
      steps
        .slice(0, result ? steps.length : currentStep)
        .filter((step) => data[step.field])
        .map((step) => ({ ...step, value: data[step.field] })),
    [currentStep, data, result]
  )

  async function finish(nextData: AssessmentInput) {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nextData)
      })

      if (!response.ok) {
        throw new Error('Assessment konnte nicht erstellt werden.')
      }

      const payload = (await response.json()) as { result: AssessmentResult }
      setResult(payload.result)
    } catch (assessmentError) {
      setError(
        assessmentError instanceof Error
          ? assessmentError.message
          : 'Bitte versuchen Sie es noch einmal.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!current || result) return

    const value = draft.trim()
    if (!value && !current.optional) return

    const nextData = { ...data, [current.field]: value }
    setData(nextData)
    setDraft('')

    if (currentStep === steps.length - 1) {
      void finish(nextData)
      return
    }

    setCurrentStep((step) => step + 1)
  }

  function restart() {
    setData(emptyInput)
    setCurrentStep(0)
    setDraft('')
    setResult(null)
    setError('')
  }

  return (
    <section className="assessment-section" id="ai-check">
      <div className="assessment-copy">
        <p className="eyebrow">AI-Check</p>
        <h2>Starten Sie mit einer ersten AI-Einschatzung.</h2>
        <p>
          Beantworten Sie wenige Fragen zu Ihrem Unternehmen. Sie erhalten direkt eine erste strukturierte
          Einschatzung, welche Prozesse sich fur AI und Automatisierung eignen konnten.
        </p>
      </div>

      <div className="assessment-grid">
        <div className="assessment-chat" aria-live="polite">
          <div className="assessment-top">
            <div>
              <span className="mini-mark">
                <Sparkles size={15} />
              </span>
              <strong>Neuralwerk AI-Assessment</strong>
            </div>
            <span>{result ? 'Abgeschlossen' : `${currentStep + 1} / ${steps.length}`}</span>
          </div>

          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${result ? 100 : progress}%` }} />
          </div>

          <div className="conversation">
            <div className="chat-row assistant">
              <span className="chat-avatar">
                <MessageSquareText size={15} />
              </span>
              <p>
                Beschreiben Sie Ihr Unternehmen Schritt fur Schritt. Ich erstelle daraus eine erste
                Implementierungs-Einschatzung.
              </p>
            </div>

            {answeredSteps.map((step) => (
              <div className="chat-pair" key={step.field}>
                <div className="chat-row assistant">
                  <span className="chat-avatar">
                    <Sparkles size={15} />
                  </span>
                  <p>{step.question}</p>
                </div>
                <div className="chat-row user">
                  <span className="chat-avatar">
                    <UserRound size={15} />
                  </span>
                  <p>{step.value}</p>
                </div>
              </div>
            ))}

            {!result && current && (
              <div className="chat-row assistant active">
                <span className="chat-avatar">
                  <Sparkles size={15} />
                </span>
                <p>{current.question}</p>
              </div>
            )}
          </div>

          {!result && (
            <form className="assessment-input" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="assessment-answer">
                Antwort eingeben
              </label>
              <input
                id="assessment-answer"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={current?.placeholder}
                type={current?.type ?? 'text'}
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || (!draft.trim() && !current?.optional)}>
                {isLoading ? <Loader2 size={17} className="spin" /> : <Send size={17} />}
              </button>
            </form>
          )}

          {error && <p className="form-error">{error}</p>}
        </div>

        <aside className="result-panel">
          {!result ? (
            <>
              <p className="eyebrow">Ergebnisvorschau</p>
              <h3>Nach dem Chat sehen Sie:</h3>
              <ul>
                <li>
                  <Check size={15} />
                  Erste Einschatzung
                </li>
                <li>
                  <Check size={15} />
                  Mogliche AI-Potenziale
                </li>
                <li>
                  <Check size={15} />
                  Automatisierbare Prozesse
                </li>
                <li>
                  <Check size={15} />
                  Empfohlene nachste Schritte
                </li>
                <li>
                  <Check size={15} />
                  Geschatzter Implementierungsaufwand
                </li>
              </ul>
              <div className="result-note">
                <Mail size={16} />
                Wir melden uns danach mit einer konkreten Einschatzung.
              </div>
            </>
          ) : (
            <div className="assessment-result">
              <p className="eyebrow">Erste Einschatzung</p>
              <h3>Erste Einschatzung fur {result.companyName}</h3>
              <p>{result.summary}</p>

              <div className="result-group">
                <span>3 mogliche AI-Potenziale</span>
                <ul>
                  {result.potentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="result-group">
                <span>2 kurzfristige Automatisierungen</span>
                <ul>
                  {result.automations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="result-next">
                <strong>Empfohlener nachster Schritt</strong>
                <p>{result.nextStep}</p>
                <strong>Aufwand</strong>
                <p>{result.effort}</p>
              </div>

              <div className="result-actions">
                <Button type="button">
                  Konkretes Angebot anfragen
                  <ArrowRight size={15} />
                </Button>
                <Button type="button" variant="secondary" onClick={restart}>
                  Neu starten
                </Button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}
