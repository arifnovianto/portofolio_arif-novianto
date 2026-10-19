import { useState } from 'react'
import './Section.css'
import './Portfolio.css'

const categories = ['Semua', 'Web', 'UI/UX', 'Mobile']

const projects = [
  { id: 1, title: 'E-Commerce App', category: 'Web', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Aplikasi e-commerce lengkap dengan fitur cart dan pembayaran.', color: '#aa3bff' },
  { id: 2, title: 'Dashboard Admin', category: 'Web', tech: ['React', 'Tailwind', 'Chart.js'], desc: 'Dashboard admin dengan visualisasi data dan manajemen user.', color: '#6366f1' },
  { id: 3, title: 'Food Delivery UI', category: 'UI/UX', tech: ['Figma', 'Prototyping'], desc: 'Desain UI aplikasi pesan antar makanan yang modern dan intuitif.', color: '#f59e0b' },
  { id: 4, title: 'Landing Page', category: 'Web', tech: ['HTML', 'CSS', 'JavaScript'], desc: 'Landing page modern untuk startup teknologi dengan animasi smooth.', color: '#10b981' },
  { id: 5, title: 'Travel App Design', category: 'UI/UX', tech: ['Figma', 'Adobe XD'], desc: 'Desain aplikasi perjalanan wisata dengan UX yang menyenangkan.', color: '#f43f5e' },
  { id: 6, title: 'Chat Application', category: 'Mobile', tech: ['React Native', 'Firebase'], desc: 'Aplikasi chat real-time dengan fitur grup dan notifikasi.', color: '#0ea5e9' },
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
            Kumpulan proyek yang telah saya kerjakan dengan dedikasi dan semangat belajar.
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
          {filtered.map(({ id, title, category, tech, desc, color }) => (
            <div key={id} className="portfolio-card">
              <div className="portfolio-thumb" style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)` }}>
                <div className="thumb-icon" style={{ color }}>
                  {'</>'}
                </div>
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
                  <a href="#" className="btn btn-outline btn-sm">Live Demo</a>
                  <a href="#" className="btn btn-primary btn-sm">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
