export default function MyStory() {
  return (
    <div className="page story-page">
      <div className="page-hero">
        <div className="container">
          <span className="about-eyebrow">The Potter</span>
          <h1>My Story</h1>
        </div>
      </div>

      <div className="container story-body">
        <div className="story-grid">
          <div className="story-text">
            <h2>From design to clay.</h2>
            <div className="about-divider" />
            <p>
              Leah Stevenson holds a Bachelor of Arts and spent years working in
              illustrative design — creating original artwork for clothing brands,
              exploring the texture and craft of letterpress printing, and building
              a career in graphic design. Each medium taught her something about
              patience, precision, and the value of handmade work.
            </p>
            <p>
              Pottery arrived unexpectedly. What began as a weekend experiment
              at a community studio became an obsession, then a practice, then a
              calling. The wheel has a way of demanding your full attention — no
              screen, no shortcut, just clay and hands and time.
            </p>
            <p>
              Today Leah works from her home studio in Seattle, throwing functional
              pieces and sculptural forms that carry the warmth of their process.
              She teaches because she believes the studio is better with more
              people in it — and because staying a student herself keeps the work
              honest.
            </p>

            <h3>On teaching</h3>
            <p>
              Leah teaches private lessons and group workshops out of her home
              studio. She works with beginners through intermediate students, and
              believes the most important thing you bring to the wheel is
              curiosity — not experience.
            </p>

            <h3>On commissions</h3>
            <p>
              Custom work is a large part of what Leah does. Dinnerware sets,
              one-off gifts, decorative objects — she loves the conversation that
              comes with a commission and the challenge of translating someone
              else's vision into clay.
            </p>
          </div>

          <div className="story-images">
            <img src="/placeholder.png" alt="Leah at the wheel" className="story-img story-img--tall" />
            <img src="/placeholder.jpg" alt="Studio shelves" className="story-img" />
            <img src="/placeholder.png" alt="Close up of hands on clay" className="story-img" />
          </div>
        </div>

        <div className="story-quote">
          <blockquote>
            "I came to pottery through art. I stay because of what clay demands —
            you cannot rush it, you cannot fake it."
          </blockquote>
          <cite>— Leah Stevenson</cite>
        </div>
      </div>
    </div>
  )
}
