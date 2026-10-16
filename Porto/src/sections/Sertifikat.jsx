import { useState } from 'react'
import './Section.css'
import './Sertifikat.css'

// Taruh file gambar sertifikat kamu di folder /public/sertifikat/
// lalu ganti path di bawah ini sesuai nama file kamu
const sertifikatList = [
  {
    id: 1,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Januari 2024',
    image: '/sertifikat/sertif-1.jpg',
    color: '#aa3bff',
  },
  {
    id: 2,
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    date: 'Maret 2024',
    image: '/sertifikat/sertif-2.jpg',
    color: '#6366f1',
  },
  {
    id: 3,
    title: 'Front-End Web Developer Expert',
    issuer: 'Dicoding Indonesia',
    date: 'Juni 2024',
    image: '/sertifikat/sertif-3.jpg',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'Agustus 2024',
    image: '/sertifikat/sertif-4.jpg',
    color: '#10b981',
  },
  {
    id: 5,
    title: 'Computer Vision with Python',
    issuer: 'Udemy',
    date: 'Oktober 2024',
    image: '/sertifikat/sertif-5.jpg',
    color: '#f43f5e',
  },
  {
    id: 6,
    title: 'Git & GitHub Fundamentals',
    issuer: 'Dicoding Indonesia',
    date: 'November 2024',
    image: '/sertifikat/sertif-6.jpg',
    color: '#0ea5e9',
  },
]

export default function Sertifikat() {
  const [lightbox, setLightbox] = useState(null) // menyimpan objek sertifikat yang dipilih

  const openLightbox = (sertif) => setLightbox(sertif)
  const closeLightbox = () => setLightbox(null)

  // Tutup lightbox saat klik backdrop
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) closeLightbox()
  }

  return (
    <section id="sertifikat" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Sertifikat</span>
          <h2 className="section-title">Sertifikasi & Pencapaian</h2>
          <p className="section-subtitle">
            Sertifikat yang telah saya raih dari berbagai platform pembelajaran online.
          </p>
        </div>

        <div className="sertif-grid">
          {sertifikatList.map((sertif) => (
            <div
              key={sertif.id}
              className="sertif-card"
              onClick={() => openLightbox(sertif)}
              role="button"
              tabIndex={0}
              aria-label={`Lihat sertifikat ${sertif.title}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(sertif)}
            >
              <div
                className="sertif-thumb"
                style={{ background: `linear-gradient(135deg, ${sertif.color}22, ${sertif.color}44)` }}
              >
                <img
                  src={sertif.image}
                  alt={sertif.title}
                  className="sertif-img"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="sertif-overlay">
                  <span className="sertif-zoom-icon">🔍 Lihat</span>
                </div>
                <div className="sertif-placeholder" style={{ color: sertif.color }}>🏆</div>
              </div>
              <div className="sertif-info">
                <span className="sertif-issuer">{sertif.issuer}</span>
                <h3 className="sertif-title">{sertif.title}</h3>
                <span className="sertif-date">📅 {sertif.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={handleBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Sertifikat: ${lightbox.title}`}
        >
          <div className="lightbox-box">
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Tutup"
            >
              ✕
            </button>
            <div className="lightbox-img-wrap">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="lightbox-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div
                className="lightbox-no-img"
                style={{ background: `linear-gradient(135deg, ${lightbox.color}22, ${lightbox.color}44)` }}
              >
                <span style={{ fontSize: 64 }}>🏆</span>
                <p>Tambahkan gambar sertifikat ke<br /><code>/public/sertifikat/</code></p>
              </div>
            </div>
            <div className="lightbox-meta">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.issuer} · {lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
