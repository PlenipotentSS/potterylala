import { Link } from 'react-router-dom'

const items = [
  { src: '/assets/work/bowls/sundial-bowls-glazed-pair.jpeg', alt: 'Sundial bowls — glazed pair' },
  { src: '/assets/work/cups/botanical-relief-tumbler-angle.jpeg', alt: 'Botanical relief tumbler' },
  { src: '/assets/work/decorations/fish-wall-hanging-1.jpeg', alt: 'Fish wall hanging' },
  { src: '/assets/work/plates/three-glazed-plates.jpeg', alt: 'Three glazed plates' },
  { src: '/assets/work/cups/pair-green-mugs-front.jpeg', alt: 'Pair of green mugs' },
  { src: '/assets/work/plants/wave-planter-large.jpeg', alt: 'Large wave planter' },
  { src: '/assets/work/bowls/terracotta-white-interior-bowl-angle.jpeg', alt: 'Terracotta bowl with white interior' },
  { src: '/assets/work/decorations/tall-speckled-vase-1.jpeg', alt: 'Tall speckled vase' },
]

export default function CreationsGrid() {
  return (
    <section id="creations" className="section creations-section">
      <div className="container">
        <h2>Work &amp; Creations</h2>
        <p className="lead">Functional forms &amp; sculptural work</p>
        <div className="creations-grid">
          {items.map((item, i) => (
            <div key={i} className={`tile tile-${(i % 5) + 1}`}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        <div className="creations-footer">
          <Link to="/work" className="btn-ghost">
            View all work &amp; creations
          </Link>
        </div>
      </div>
    </section>
  )
}
