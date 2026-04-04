import { useEffect, useRef, useState } from 'react'

const slides = [
  { src: '/placeholder.png', alt: 'Pottery Lala — handmade ceramics' },
  { src: '/placeholder.jpg', alt: 'Leah at the wheel' },
  { src: '/placeholder.png', alt: 'Studio glazing work' },
  { src: '/placeholder.jpg', alt: 'Finished pieces from the kiln' },
]

const AUTO_INTERVAL   = 15_000   // 15 s normal rotation
const STICKY_DURATION = 60_000   // 1 min after bullet click

export default function Hero() {
  const [current, setCurrent]   = useState(0)
  // duration drives the CSS animation length — changes on sticky so the
  // progress bar key changes and the animation restarts at the right speed
  const [duration, setDuration] = useState(AUTO_INTERVAL)
  const stickyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isSticky    = useRef(false)

  useEffect(() => {
    const tick = setInterval(() => {
      if (!isSticky.current) {
        setCurrent(c => (c + 1) % slides.length)
        // duration stays at AUTO_INTERVAL for normal advance — no setDuration needed
      }
    }, AUTO_INTERVAL)
    return () => clearInterval(tick)
  }, [])

  function goTo(index: number) {
    setCurrent(index)
    setDuration(STICKY_DURATION)
    isSticky.current = true
    if (stickyTimer.current) clearTimeout(stickyTimer.current)
    stickyTimer.current = setTimeout(() => {
      isSticky.current = false
      setDuration(AUTO_INTERVAL)
    }, STICKY_DURATION)
  }

  return (
    <section className="hero" aria-label="Featured work">
      <div className="hero-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? ' hero-slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="hero-overlay">
        <div className="hero-copy">
          <span className="hero-eyebrow">Pottery Lala</span>
          <h1>Clay, craft,<br /><em>and a little heart.</em></h1>
          <p>Handmade ceramics from Pottery Lala's studio in Seattle.</p>
        </div>
      </div>

      <div className="hero-bullets" role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`hero-bullet${i === current ? ' hero-bullet--active' : ''}`}
            onClick={() => goTo(i)}
          >
            {i === current && (
              // key forces a full remount (and animation restart) whenever the
              // slide or the sticky duration changes
              <span
                className="bullet-progress"
                key={`${i}-${duration}`}
                style={{ animationDuration: `${duration}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
