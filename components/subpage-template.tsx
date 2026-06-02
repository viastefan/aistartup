import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

type SubpageTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  image: string
  blocks: Array<{
    title: string
    body: string
    points: string[]
  }>
}

export function SubpageTemplate({ eyebrow, title, intro, image, blocks }: SubpageTemplateProps) {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-hero">
          <img src={image} alt="" />
          <div className="subpage-hero-overlay" />
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <Button asChild>
              <Link href="/#ai-check">
                AI-Check starten
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>

        <section className="subpage-grid">
          {blocks.map((block) => (
            <article className="subpage-card" key={block.title}>
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
      </main>
      <SiteFooter />
    </>
  )
}
