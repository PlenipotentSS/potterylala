const offerings = [
  {
    title: 'Private Lessons',
    desc: 'One-on-one time at the wheel. Tailored to your pace, whether you are a first-timer or returning student.',
  },
  {
    title: 'Group Workshops',
    desc: 'Studio sessions for small groups — birthday parties, creative dates, team events, and more.',
  },
  {
    title: 'Commissions',
    desc: 'Custom pieces made to order. Dinnerware sets, gifts, home objects. Reach out to start a conversation.',
  },
]

export default function LeahAvailable() {
  return (
    <section id="lessons" className="section available-section">
      <div className="container">
        <div className="available-hero">
          <div className="available-hero-text">
            <span className="section-label">Work with Leah</span>
            <h2>Around Town</h2>
            <p>
              Leah is currently accepting new students, workshop bookings, and
              commission inquiries. Whether you have a clear vision or just a
              feeling, she loves working through ideas from the first sketch to
              the final glaze.
            </p>
            <p className="muted">Seattle — by appointment</p>
          </div>
          <div className="available-hero-image">
            <img src="/placeholder.jpg" alt="Leah working in her studio" />
          </div>
        </div>

        <div className="available-grid">
          {offerings.map((o) => (
            <div key={o.title} className="available-card">
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
