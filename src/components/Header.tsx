import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={close}>
          <img src="/assets/logo.svg" alt="Pottery Lala" className="logo" />
          <span className="brand-text">Pottery Lala</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/my-story">My Story</NavLink>
          <NavLink to="/work">Work &amp; Creations</NavLink>
          <a href="/#contact" className="nav-cta">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav-burger${open ? ' nav-burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          <NavLink to="/my-story"  onClick={close}>My Story</NavLink>
          <NavLink to="/work"      onClick={close}>Work &amp; Creations</NavLink>
          <a href="/#contact" onClick={close} className="mobile-nav-cta">Contact</a>
        </nav>
      )}
    </header>
  )
}
