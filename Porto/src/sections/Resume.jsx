import { useEffect, useRef, useState, useCallback } from 'react'
import './Section.css'
import './Resume.css'

const experiences = [
  {
    period: 'Okt 2025 – Des 2025',
    title: 'Junior Software Developer',
    company: 'Faculty of Computer Science, UI',
    desc: 'Pembuatan Pengenalan Wajah Berbasis Web menggunakan stack React–Django.',
    color: '#1dc8c8',
    icon: '💻',
  },
  {
    period: 'Jun 2025 – Agu 2025',
    title: 'Koordinator PDD',
    company: 'Kuliah Kerja Nyata',
    desc: 'Bertanggung jawab atas Publikasi, Dokumentasi & Desain di lapangan.',
    color: '#a855f7',
    icon: '📋',
  },
  {
    period: 'Feb 2022 – Mei 2023',
    title: 'UI/UX Designer',
    company: 'Dekorasi Citayam',
    desc: 'Merancang antarmuka website yang menarik, fungsional, dan ramah pengguna.',
    color: '#f59e0b',
    icon: '🎨',
  },
]

const educations = [
  {
    period: '2022 – 2026',
    title: 'Teknik Informatika',
    company: 'UIN Syarif Hidayatullah Jakarta',
    desc: 'GPA : 3.77',
    color: '#10b981',
    icon: '🎓',
  },
  {
    period: '2019 – 2022',
    title: 'IPA',
    company: 'SMAS Sejahtera 1 Depok',
    desc: 'Rata-rata Nilai : 85',
    color: '#f43f5e',
    icon: '📚',
  },
]

// Card 3D dengan tilt effect
function Card3D({ period, title, company, desc, color, icon, animated, delay }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotY = ((x - cx) / cx) * 12   // max ±12deg
    const rotX = -((y - cy) / cy) * 8   // max ±8deg
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`
    // Geser shine sesuai mouse
    const shine = card.querySelector('.card3d-shine')
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 70%)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    const shine = card.querySelector('.card3d-shine')
    if (shine) shine.style.background = 'none'
  }, [])

  return (
    <div
      className={`card3d-wrap${animated ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s`, '--dot-color': color }}
    >
      <div
        ref={cardRef}
        className="card3d"
        style={{ '--card-color': color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine overlay */}
        <div className="card3d-shine" />
        {/* Glow bg */}
        <div className="card3d-glow" />
        {/* Strip atas */}
        <div className="card3d-strip" />

        {/* Header */}
        <div className="card3d-header">
          <span className="card3d-icon">{icon}</span>
          <span className="card3d-period">{period}</span>
        </div>

        <h4 className="card3d-title">{title}</h4>
        <p className="card3d-company">{company}</p>
        {desc && <p className="card3d-desc">{desc}</p>}
      </div>
    </div>
  )
}

export default function Resume() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Pengalaman & Pendidikan</h2>
          <p className="section-subtitle">
            Perjalanan profesional dan pendidikan yang membentuk saya menjadi developer.
          </p>
        </div>

        {/* Pengalaman */}
        <div className="resume-row-label">
          <span className="resume-label">💼 Pengalaman Kerja</span>
        </div>
        <div className="resume-cards-row">
          {experiences.map((item, i) => (
            <Card3D key={item.title} {...item} animated={animated} delay={i * 0.12} />
          ))}
        </div>

        {/* Pendidikan */}
        <div className="resume-row-label" style={{ marginTop: 36 }}>
          <span className="resume-label">🎓 Pendidikan</span>
        </div>
        <div className="resume-cards-row resume-cards-center">
          {educations.map((item, i) => (
            <Card3D key={item.title} {...item} animated={animated} delay={0.4 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
