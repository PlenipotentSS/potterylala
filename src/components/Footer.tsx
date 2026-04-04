import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-brand">
          <strong>Pottery Lala</strong> — Leah Stevenson
        </span>
        <nav className="footer-links" aria-label="Footer">
          <a href="mailto:contact@potterylala.com">Email</a>
          <a href="https://www.instagram.com/pottery_lala/" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}
