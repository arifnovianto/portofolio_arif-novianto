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

  // ── IntersectionObserver — update active saat scroll ──────────
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1)) // ['home','about',...]

    const observer = new IntersectionObserver(
      (entries) => {
        // Abaikan selama smooth-scroll dari klik
        if (isClickScrolling.current) return

        // Ambil section yang paling banyak terlihat
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const id    = visible[0].target.id
          const found = navLinks.find(l => l.href === `#${id}`)
          if (found) setActive(found.label)
        }
      },
      {
        // Section dianggap aktif saat 30% area-nya terlihat
        // rootMargin negatif atas agar navbar tidak menutupi deteksi
        rootMargin: '-64px 0px -40% 0px',
        threshold: [0, 0.1, 0.3, 0.5],
      }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
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
