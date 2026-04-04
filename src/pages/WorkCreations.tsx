const gallery = Array.from({ length: 16 }, (_, i) =>
  i % 2 === 0 ? '/placeholder.png' : '/placeholder.jpg'
)

const categories = ['All', 'Vessels', 'Dinnerware', 'Sculptural', 'Commissions']

export default function WorkCreations() {
  return (
    <div className="page work-page">
      <div className="page-hero">
        <div className="container">
          <span className="about-eyebrow">Portfolio</span>
          <h1>Work &amp; Creations</h1>
          <p className="page-hero-sub">
            A selection of functional and sculptural pieces made in Leah's Seattle studio.
            Each piece is thrown, trimmed, and glazed by hand.
          </p>
        </div>
      </div>

      <div className="container work-body">
        <div className="work-filters">
          {categories.map(cat => (
            <button key={cat} className="filter-btn">{cat}</button>
          ))}
        </div>

        <div className="work-grid">
          {gallery.map((src, i) => (
            <div key={i} className="work-tile">
              <img src={src} alt={`Work ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
