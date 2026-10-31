import { useState, useRef } from 'react'
import './Section.css'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Dekorasi Citayam',
    category: 'Web',
    tech: ['React JS', 'Tailwind'],
    desc: 'Website dekorasi dengan fitur pemesanan dan katalog produk lengkap.',
    color: '#aa3bff',
    image: '/portofolio/dekorasi.png',
    demo: 'https://dekorasi-citayam.vercel.app',
    repo: 'https://github.com/arifnovianto/Dekorasi_Citayam_',
  },
  {
    id: 2,
    title: 'Portofolio',
    category: 'Web',
    tech: ['React JS', 'Tailwind'],
    desc: 'Website portofolio yang berisi informasi kontak dan berbagai projek yang telah dikerjakan.',
    color: '#6366f1',
    image: '/portofolio/portoarif.png',
    demo: '#',
    repo: 'https://github.com/arifnovianto/portofolio_arif-novianto',
  },
  {
    id: 3,
    title: 'Face Recognition',
    category: 'Web',
    tech: ['React JS', 'Django', 'PostgreSql'],
    desc: 'Pengenalan wajah berbasis website, digunakan untuk absensi mahasiswa.',
    color: '#f59e0b',
    image: '/portofolio/facerecog.png',
    demo: '#',
    repo: 'https://github.com/arifnovianto/backend',
  },
  {
    id: 4,
    title: 'Penyewaaan Mobil',
    category: 'Web',
    tech: ['Javascript', 'SQLite'],
    desc: 'Penyewaan Mobil dengan berbagai macam mobil dan harganya.',
    color: '#10b981',
    image: '/portofolio/sewa.jpeg',
    demo: '#',
    repo: '#',
  },
  {
    id: 5,
    title: 'UI/UX Dekorasi Citayam',
    category: 'UI/UX WEB',
    tech: ['Figma', 'Canva'],
    desc: 'Desain Website dari penyewaan dekorasi, yang menampilkan berbagai macam jenis dekorasi.',
    color: '#f43f5e',
    image: '/portofolio/dekor.png',
    demo: '#',
    repo: '#',
  },
  {
    id: 6,
    title: 'UI/UX Pemesanan Online',
    category: 'UI/UX Mobile',
    tech: ['Figma', 'Iconfy'],
    desc: 'UI/UX Aplikasi Online dengan ada fitur login dan registrasi ',
    color: '#0ea5e9',
    image: '/portofolio/android.png',
    demo: '#',
    repo: '#',
  },
]

const VISIBLE = 3

export default function Portfolio() {
  const [current, setCurrent] = useState(0)
  const maxIndex = projects.length - VISIBLE

  const prev = () => setCurrent(c => Math.max(c - 1, 0))
  const next = () => setCurrent(c => Math.min(c + 1, maxIndex))

  return (
    <section id="portfolio" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Proyek Terbaru Saya</h2>
          <p className="section-subtitle">
            Kumpulan proyek yang telah saya kerjakan
          </p>
        </div>

        {/* Slider */}
        <div className="port-slider-outer">
          {/* Prev button */}
          <button
            className="port-slider-btn"
            onClick={prev}
            disabled={current === 0}
            aria-label="Sebelumnya"
          >
            ‹
          </button>

          {/* Viewport */}
          <div className="port-slider-viewport">
            <div
              className="port-slider-track"
              style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 6px)))` }}
            >
              {projects.map(({ id, title, category, tech, desc, color, image, demo, repo }) => (
                <div key={id} className="portfolio-card">
                  {/* Thumb */}
                  <div
                    className="portfolio-thumb"
                    style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)` }}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="portfolio-thumb-img"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    ) : (
                      <div className="thumb-icon" style={{ color }}>{'</>'}</div>
                    )}
                    {/* Color strip atas */}
                    <div className="portfolio-strip" style={{ background: color }} />
                  </div>

                  <div className="portfolio-info">
                    <span className="portfolio-category" style={{ color }}>{category}</span>
                    <h3 className="portfolio-title">{title}</h3>
                    <p className="portfolio-desc">{desc}</p>
                    <div className="portfolio-tech">
                      {tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href={demo}
                        target={demo !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        🚀 Live Demo
                      </a>
                      <a
                        href={repo}
                        target={repo !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 5 }}>
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            className="port-slider-btn"
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Selanjutnya"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="port-slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`port-slider-dot${current === i ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
