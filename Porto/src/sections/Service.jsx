import { useEffect, useRef, useState } from 'react'
import './Section.css'
import './Service.css'

const services = [
  {
    color: '#1dc8c8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    title: 'Software Development',
    desc: 'Membangun aplikasi web modern yang responsif menggunakan teknologi terkini seperti React, Django, dan Laravel.',
  },
  {
    color: '#a855f7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Merancang tampilan antarmuka yang menarik, intuitif, dan berpusat pada pengalaman pengguna terbaik.',
  },
  {
    color: '#f59e0b',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: 'Computer Vision & AI',
    desc: 'Membangun solusi Computer Vision, Machine Learning, dan Artificial Intelligence untuk menganalisis dan menyelesaikan masalah kompleks.',
  },
]

export default function Service() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="service" className="section" ref={ref}>
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Apa yang Saya Tawarkan</h2>
          <p className="section-subtitle">
            Saya menyediakan berbagai layanan untuk membantu bisnis dan proyek Anda berkembang.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ color, icon, title, desc }, i) => (
            <div
              key={title}
              className={`service-card${animated ? ' visible' : ''}`}
              style={{
                '--card-color': color,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Strip atas */}
              <div className="service-strip" />

              {/* Glow bg */}
              <div className="service-glow" />

              {/* Icon */}
              <div className="service-icon-wrap">
                {icon}
              </div>

              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>

              {/* Nomor urut */}
              <span className="service-number">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
