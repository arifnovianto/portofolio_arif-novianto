import { useState, useEffect } from 'react'
import './Home.css'
import heroImg from '../assets/foto_profile.jpg'

const roles = ['FullStack Developer', 'Computer Vision', 'UI/UX Designer']

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    let timeout

    if (!isDeleting && charIndex <= current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 80)
    } else if (!isDeleting && charIndex > current.length) {
      // Pause sebelum hapus
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && charIndex > 0) {
      // Menghapus
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 45)
    } else if (isDeleting && charIndex === 0) {
      // Ganti ke role berikutnya
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-greeting">Halo, saya</h1>
        <h1 className="home-name">Arif Novianto</h1>
        <h2 className="home-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </h2>
        <p className="home-desc">
          Saya seorang developer yang bersemangat membangun pengalaman web yang indah dan fungsional.
          Spesialisasi dalam React, UI/UX, dan pengembangan front-end modern.
        </p>
        <div className="home-actions">
          <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
          <a href="#portfolio" className="btn btn-outline">Lihat Portfolio</a>
        </div>
      </div>
      <div className="home-image">
        <div className="image-wrapper">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  )
}
