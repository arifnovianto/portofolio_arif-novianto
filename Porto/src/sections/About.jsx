import { useEffect, useRef, useState } from 'react'
import './Section.css'
import './About.css'

const skills = [
  { name: 'JavaScript', level: 85, color: '#f7df1e' },
  { name: 'React JS',   level: 80, color: '#1dc8c8' },
  { name: 'Laravel',    level: 75, color: '#f43f5e' },
  { name: 'Django',     level: 70, color: '#10b981' },
]

function CircleSkill({ name, level, color, animate }) {
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const progress = animate ? (level / 100) * circumference : 0

  return (
    <div className="circle-skill">
      <div className="circle-wrap">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Track */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(29,200,200,0.1)"
            strokeWidth="7"
          />
          {/* Progress */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            transform="rotate(-90 50 50)"
            style={{
              transition: animate ? 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' : 'none',
              filter: `drop-shadow(0 0 6px ${color}88)`,
            }}
          />
          {/* Persentase */}
          <text
            x="50" y="44"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#d6eef2"
            fontSize="16"
            fontWeight="700"
            fontFamily="system-ui"
          >
            {animate ? `${level}%` : '0%'}
          </text>
          {/* Label */}
          <text
            x="50" y="60"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={color}
            fontSize="8"
            fontWeight="600"
            fontFamily="system-ui"
            letterSpacing="0.5"
          >
            {name.toUpperCase()}
          </text>
        </svg>
        {/* Rotating ring dekorasi */}
        <div className="circle-ring" style={{ borderColor: `${color}33` }} />
      </div>
      <p className="circle-name">{name}</p>
    </div>
  )
}

export default function About() {
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
    <section id="about" className="section" ref={ref}>
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Kenali Saya Lebih Dekat</h2>
        </div>

        <div className="about-content">
          {/* ── Kiri: bio + info ── */}
          <div className={`about-text slide-left${animated ? ' visible' : ''}`}>
            {/* Card bio */}
            <div className="bio-card">
              <div className="bio-card-glow" />
              <p>
                Saya adalah seorang <strong>Software Developer</strong> yang bersemangat dalam membangun
                antarmuka web yang menarik dan mudah digunakan. Saya menikmati setiap proses dari desain
                hingga implementasi.
              </p>
              <p>
                Dengan pengalaman menggunakan teknologi modern seperti React, saya selalu berusaha
                menghadirkan kode yang bersih, efisien, dan mudah di-maintain.
              </p>
            </div>

            {/* Info cards grid */}
            <div className="about-info">
              <div className="info-card" style={{'--card-color': '#1dc8c8'}}>
                <div className="info-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Nama</span>
                  <strong className="info-value">Arif Novianto</strong>
                </div>
              </div>

              <div className="info-card" style={{'--card-color': '#6366f1'}}>
                <div className="info-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <strong className="info-value">noviantoarif88@gmail.com</strong>
                </div>
              </div>

              <div className="info-card" style={{'--card-color': '#f43f5e'}}>
                <div className="info-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Lokasi</span>
                  <strong className="info-value">Indonesia</strong>
                </div>
              </div>

              <div className="info-card" style={{'--card-color': '#10b981'}}>
                <div className="info-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Nomor</span>
                  <strong className="info-value">085885307312</strong>
                </div>
              </div>
            </div>

          </div>

          {/* ── Kanan: circular skills ── */}
          <div className={`about-skills slide-right${animated ? ' visible' : ''}`}>
            <div className="skills-card">
              <div className="skills-card-glow" />
              <h3>Skill Saya</h3>
              <div className="skills-circles">
                {skills.map(skill => (
                  <CircleSkill key={skill.name} {...skill} animate={animated} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
