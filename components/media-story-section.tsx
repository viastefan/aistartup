import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const mediaCards = [
  {
    title: 'AI-Workshop im Unternehmen',
    label: 'Video Slot',
    image: '/media/session.jpg',
    body: 'Prozessaufnahme, Tool-Landkarte und erste Use Cases in einem gefuhrten Workshop.'
  },
  {
    title: 'Implementation Session',
    label: 'Photo Story',
    image: '/media/workshop.jpg',
    body: 'Aus der Idee wird ein konkreter Workflow mit Schnittstellen, Rollen und sauberer Einfuhrung.'
  },
  {
    title: 'Operating System fur AI',
    label: 'Motion Design',
    image: '/media/office.jpg',
    body: 'Wenige klare Systeme statt Tool-Wildwuchs. Sichtbar, messbar, im Alltag nutzbar.'
  }
]

export function MediaStorySection() {
  return (
    <section className="media-story-section" aria-label="Neuralwerk Media Design">
      <div className="section-heading">
        <p className="eyebrow">Design statt AI-Deko</p>
        <h2>Echte Arbeitsmomente. Klare Motion. Keine generischen AI-Bilder.</h2>
        <p>
          Die Website arbeitet mit realen Bildflachen, ruhigen Video-Slots und animierten Produktdetails. So wirkt
          Neuralwerk wie ein echtes Tech-Unternehmen, nicht wie eine austauschbare AI-Agentur.
        </p>
      </div>

      <div className="media-reel">
        {mediaCards.map((card, index) => (
          <article className={`media-card media-card-${index + 1}`} key={card.title}>
            <img src={card.image} alt="" />
            <div className="media-card-overlay" />
            <div className="media-card-content">
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
            {index === 0 && (
              <button className="play-button" type="button" aria-label="Video ansehen">
                <Play size={18} fill="currentColor" />
              </button>
            )}
          </article>
        ))}
      </div>

      <div className="motion-system">
        <div className="motion-copy">
          <span>
            <Sparkles size={16} />
            Live System Map
          </span>
          <h3>Vom Prozess zum AI-System.</h3>
          <p>
            Motion zeigt nicht „Magie“, sondern Struktur: Daten, Tools, Entscheidungen und Automationen bewegen sich
            sichtbar durch den Prozess.
          </p>
          <Link href="/prozess">
            Prozess ansehen
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="motion-board" aria-hidden="true">
          <span className="motion-node node-a" />
          <span className="motion-node node-b" />
          <span className="motion-node node-c" />
          <span className="motion-path path-a" />
          <span className="motion-path path-b" />
          <span className="motion-scan" />
        </div>
      </div>
    </section>
  )
}
