import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { LeqraMark } from '@/components/leqra-mark'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

type SubpageTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  metric?: string
  metricLabel?: string
  blocks: Array<{
    title: string
    body: string
    points: string[]
  }>
  secondary?: Array<{
    title: string
    body: string
  }>
}

export function SubpageTemplate({ eyebrow, title, intro, metric, metricLabel, blocks, secondary = [] }: SubpageTemplateProps) {
  return (
    <>
      <SiteHeader />
      <main className="leqra-subpage">
        <section className="leqra-subpage-hero">
          <div className="leqra-subpage-signal" aria-hidden="true">
            <LeqraMark />
          </div>
          <div className="leqra-subpage-copy">
            <p className="leqra-kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="leqra-actions">
              <Link className="nw-button nw-button-primary" href="/kontakt">
                Audit starten
                <ArrowRight size={16} />
              </Link>
              <Link className="nw-button nw-button-secondary" href="/">
                Zur Startseite
              </Link>
            </div>
          </div>
          <aside className="leqra-subpage-panel">
            <span>{metricLabel ?? 'Bereitschafts-Fokus'}</span>
            <strong>{metric ?? 'Struktur'}</strong>
            <p>Wissen, Arbeit, Entscheidungen, Freigaben und Risiken werden zu einem nutzbaren Operations-System.</p>
          </aside>
        </section>

        <section className="leqra-subpage-grid">
          {blocks.map((block) => (
            <article className="leqra-subpage-card" key={block.title}>
              <h2>{block.title}</h2>
              <p>{block.body}</p>
              <ul>
                {block.points.map((point) => (
                  <li key={point}>
                    <Check size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {secondary.length > 0 ? (
          <section className="leqra-subpage-detail">
            {secondary.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </section>
        ) : null}

        <section className="leqra-subpage-cta">
          <LeqraMark />
          <p className="leqra-kicker">Nächster Schritt</p>
          <h2>Finde heraus, welche Struktur dein Unternehmen vor KI wirklich braucht.</h2>
          <Link className="nw-button nw-button-primary" href="/kontakt">
            KI-Bereitschafts-Audit anfragen
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
