import { useState } from 'react'

interface WorkItem {
  src: string
  alt: string
  category: string
}

const works: WorkItem[] = [
  // Bowls
  { src: '/assets/work/bowls/sundial-bowls-on-grass.jpeg', alt: 'Sundial bowls on grass', category: 'Bowls' },
  { src: '/assets/work/bowls/sundial-bowls-glazed-pair.jpeg', alt: 'Sundial bowls — glazed pair', category: 'Bowls' },
  { src: '/assets/work/bowls/terracotta-white-interior-bowl-angle.jpeg', alt: 'Terracotta bowl with white interior', category: 'Bowls' },
  { src: '/assets/work/bowls/sun-design-bowl-lit-window.jpeg', alt: 'Sun design bowl by the window', category: 'Bowls' },
  { src: '/assets/work/bowls/small-blue-speckled-bowl.jpeg', alt: 'Small blue speckled bowl', category: 'Bowls' },
  { src: '/assets/work/bowls/large-terracotta-bowl-plants.jpeg', alt: 'Large terracotta bowl with plants', category: 'Bowls' },
  { src: '/assets/work/bowls/wide-speckled-interior-bowl.jpeg', alt: 'Wide bowl with speckled interior', category: 'Bowls' },
  { src: '/assets/work/bowls/pair-terracotta-bowls-shelf.jpeg', alt: 'Pair of terracotta bowls on shelf', category: 'Bowls' },

  // Cups
  { src: '/assets/work/cups/botanical-relief-tumbler-front.jpeg', alt: 'Botanical relief tumbler', category: 'Cups' },
  { src: '/assets/work/cups/botanical-relief-tumbler-angle.jpeg', alt: 'Botanical relief tumbler — angle', category: 'Cups' },
  { src: '/assets/work/cups/pair-green-mugs-front.jpeg', alt: 'Pair of green mugs', category: 'Cups' },
  { src: '/assets/work/cups/green-speckled-mug-1.jpeg', alt: 'Green speckled mug', category: 'Cups' },
  { src: '/assets/work/cups/handled-mug-held-in-hand.jpeg', alt: 'Handled mug held in hand', category: 'Cups' },
  { src: '/assets/work/cups/blue-glaze-mug.jpeg', alt: 'Blue glaze mug', category: 'Cups' },
  { src: '/assets/work/cups/cream-brown-handled-mug.jpeg', alt: 'Cream and brown handled mug', category: 'Cups' },
  { src: '/assets/work/cups/pink-terracotta-inlay-cup.jpeg', alt: 'Pink terracotta inlay cup', category: 'Cups' },

  // Plates
  { src: '/assets/work/plates/three-glazed-plates.jpeg', alt: 'Three glazed plates', category: 'Plates' },
  { src: '/assets/work/plates/stacked-glazed-plates.jpeg', alt: 'Stacked glazed plates', category: 'Plates' },
  { src: '/assets/work/plates/blue-glaze-plate.jpeg', alt: 'Blue glaze plate', category: 'Plates' },

  // Plants
  { src: '/assets/work/plants/wave-planter-large.jpeg', alt: 'Large wave planter', category: 'Planters' },
  { src: '/assets/work/plants/wave-planter-four-chamber.jpeg', alt: 'Four-chamber wave planter', category: 'Planters' },
  { src: '/assets/work/plants/wave-planter-three-chamber.jpeg', alt: 'Three-chamber wave planter', category: 'Planters' },

  // Decorations
  { src: '/assets/work/decorations/fish-wall-hanging-1.jpeg', alt: 'Fish wall hanging', category: 'Decorations' },
  { src: '/assets/work/decorations/fish-wall-hanging-2.jpeg', alt: 'Fish wall hanging — detail', category: 'Decorations' },
  { src: '/assets/work/decorations/bud-vases-lineup.jpeg', alt: 'Lineup of bud vases', category: 'Decorations' },
  { src: '/assets/work/decorations/tall-speckled-vase-1.jpeg', alt: 'Tall speckled vase', category: 'Decorations' },
  { src: '/assets/work/decorations/pumpkin-brown-glazed.jpeg', alt: 'Brown glazed pumpkin sculpture', category: 'Decorations' },
  { src: '/assets/work/decorations/sculptural-pinch-pot.jpeg', alt: 'Sculptural pinch pot', category: 'Decorations' },
  { src: '/assets/work/decorations/stone-glaze-bud-vase.jpeg', alt: 'Stone glaze bud vase', category: 'Decorations' },
  { src: '/assets/work/decorations/white-vase-held-studio.jpeg', alt: 'White vase held in the studio', category: 'Decorations' },

  // In Progress
  { src: '/assets/work/inprogress/teapot-wheel-front-view.jpeg', alt: 'Teapot on the wheel — front view', category: 'In Progress' },
  { src: '/assets/work/inprogress/glazing-pieces-in-progress.jpeg', alt: 'Glazing pieces in progress', category: 'In Progress' },
  { src: '/assets/work/inprogress/vases-lined-up-shelf.jpeg', alt: 'Vases lined up on the shelf', category: 'In Progress' },
  { src: '/assets/work/inprogress/wave-vessel-greenware-side.jpeg', alt: 'Wave vessel greenware — side view', category: 'In Progress' },
  { src: '/assets/work/inprogress/greenware-pieces-table.jpeg', alt: 'Greenware pieces on the table', category: 'In Progress' },
  { src: '/assets/work/inprogress/faceted-vessel-drying.jpeg', alt: 'Faceted vessel drying', category: 'In Progress' },
]

const categories = ['All', 'Bowls', 'Cups', 'Plates', 'Planters', 'Decorations', 'In Progress']

export default function WorkCreations() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? works : works.filter(w => w.category === active)

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
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((item, i) => (
            <div key={`${item.src}-${i}`} className="work-tile">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
