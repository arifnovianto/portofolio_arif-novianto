import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Service',    href: '#service' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Resume',     href: '#resume' },
  { label: 'Sertifikat', href: '#sertifikat' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isClickScrolling        = useRef(false) // flag agar klik tidak konflik dengan observer

  // ── Deteksi scroll untuk efek navbar ──────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Update active saat scroll ──────────────────────────────────
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))

    const updateActive = () => {
      if (isClickScrolling.current) return

      // Cari section yang top-nya paling dekat dengan 0 (tepat di viewport atas)
      // tapi sudah lewat navbar (< navbarHeight)
      const navbarHeight = 80

      let activeId = sectionIds[0]
      let minDistance = Infinity

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // Jarak dari top navbar ke top section
        const distance = Math.abs(rect.top - navbarHeight)
        // Section yang top-nya sudah masuk atau lewat navbar
        if (rect.top <= navbarHeight + 10 && distance < minDistance) {
          minDistance = distance
          activeId = id
        }
      }

      const found = navLinks.find(l => l.href === `#${activeId}`)
      if (found) setActive(found.label)
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  // ── Klik menu ─────────────────────────────────────────────────
  const handleNav = (label, href) => {
    setActive(label)
    setMenuOpen(false)

    const el = document.querySelector(href)
    if (!el) return

    isClickScrolling.current = true

    // Khusus Home → scroll ke paling atas (y=0)
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Kompensasi navbar 64px agar konten tidak tertutup
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }

    setTimeout(() => { isClickScrolling.current = false }, 900)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <a
          className="navbar-logo"
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('Home', '#home') }}
        >
          <span className="logo-text">
            Arif<span className="accent"> Novianto</span>
          </span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={active === label ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNav(label, href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
