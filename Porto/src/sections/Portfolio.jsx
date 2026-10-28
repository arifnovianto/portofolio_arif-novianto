import { useState } from 'react'
import './Section.css'
import './Portfolio.css'

const categories = ['Semua', 'Web', 'UI/UX', 'Mobile']

// image  → taruh file di /public/portofolio/nama-file.png
// demo   → link deploy vercel/netlify (isi '#' kalau belum ada)
// repo   → link repository GitHub
const projects = [
  {
    id: 1,
    title: 'Dekorasi Citayam',
    category: 'Web',
    tech: ['React', 'Node.js', 'MongoDB'],
    desc: 'Website dekorasi dengan fitur pemesanan dan katalog produk lengkap.',
    color: '#aa3bff',
    image: '/portofolio/dekorasi.png',
    demo: 'https://dekorasi-citayam.vercel.app',   // ganti dengan url deploy kamu
    repo: 'https://github.com/arifnovianto/Dekorasi_Citayam_', // ganti dengan url repo kamu
  },
  {
    id: 2,
    title: 'Portofolio',
    category: 'Web',
    tech: ['React', 'Tailwind', 'Chart.js'],
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
    tech: ['Figma', 'Prototyping'],
    desc: 'Pengenalan wajah berbasis website,yang digunakan untuk absensi mahasiswa.',
    color: '#f59e0b',
    image: '/portofolio/facerecog.png',
    demo: '#',
    repo: 'https://github.com/arifnovianto/backend',
  },
  {
    id: 4,
    title: 'Landing Page',
    category: 'Web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Landing page modern untuk startup teknologi dengan animasi smooth.',
    color: '#10b981',
    image: '',
    demo: '#',
    repo: '#',
  },
  {
    id: 5,
    title: 'Travel App Design',
    category: 'UI/UX',
    tech: ['Figma', 'Adobe XD'],
    desc: 'Desain aplikasi perjalanan wisata dengan UX yang menyenangkan.',
    color: '#f43f5e',
    image: '/portofolio/dekor.png',
    demo: '#',
    repo: '#',
  },
  {
    id: 6,
    title: 'Chat Application',
    category: 'Mobile',
    tech: ['React Native', 'Firebase'],
    desc: 'Aplikasi chat real-time dengan fitur grup dan notifikasi.',
    color: '#0ea5e9',
    image: '',
    demo: '#',
    repo: '#',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Proyek Terbaru Saya</h2>
          <p className="section-subtitle">
            Kumpulan proyek yang telah saya kerjakan 
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map(({ id, title, category, tech, desc, color, image, demo, repo }) => (
            <div key={id} className="portfolio-card">
              {/* Thumbnail — gambar jika ada, fallback ke warna */}
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
              </div>

              <div className="portfolio-info">
                <span className="portfolio-category">{category}</span>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 6}}>
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
    </section>
  )
}
