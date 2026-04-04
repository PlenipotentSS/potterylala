import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-text">
          <span className="about-eyebrow">The Studio</span>
          <h2>Made by hand,<br />shaped with intention.</h2>
          <div className="about-divider" />
          <p>
            Pottery Lala is founded by Leah Stevenson. Leah holds a Bachelor of Arts and brings a background in illustrative design,
            letterpress printing, and graphic arts to the pottery wheel. What began as curiosity
            became a calling — she now creates functional and sculptural work from her home studio
            in Los Angeles.
          </p>
          <p>
            Her pieces carry the warmth of the process: unhurried, personal, and built to last.
            Each form is thrown, trimmed, and glazed by her own hands.
          </p>
        </div>
        <div className="about-images">
          <img src="/placeholder.png" alt="Leah at the wheel" />
          <img src="/placeholder.jpg" alt="Leah's studio space" />
        </div>
      </div>
    </section>
  )
}
