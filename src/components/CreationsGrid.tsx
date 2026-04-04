import { Link } from 'react-router-dom'

const items = [
  '/placeholder.png',
  '/placeholder.jpg',
  '/placeholder.png',
  '/placeholder.jpg',
  '/placeholder.png',
  '/placeholder.jpg',
  '/placeholder.png',
  '/placeholder.jpg',
]

export default function CreationsGrid() {
  return (
    <section id="creations" className="section creations-section">
      <div className="container">
        <h2>Work &amp; Creations</h2>
        <p className="lead">Functional forms &amp; sculptural work</p>
        <div className="creations-grid">
          {items.map((src, i) => (
            <div key={i} className={`tile tile-${(i % 5) + 1}`}>
              <img src={src} alt={`Creation ${i + 1}`} />
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
