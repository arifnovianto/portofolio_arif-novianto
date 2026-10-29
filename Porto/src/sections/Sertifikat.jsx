import { useState } from 'react'
import './Section.css'
import './Sertifikat.css'

const sertifikatList = [
  { id: 1,  title: 'Final Exam Java Programming',              issuer: 'Oracle Academy',         date: 'Juni 2023',      image: '/sertifikat/Java Programing_final.jpg',  color: '#aa3bff' },
  { id: 2,  title: 'Introduction to Networks',                 issuer: 'Cisco Network Academy',  date: 'Desember 2023',  image: '/sertifikat/CISCO1.jpg',                 color: '#6366f1' },
  { id: 3,  title: 'Switching Routing and Wireless Essentials',issuer: 'Cisco Network Academy',  date: 'Desember 2023',  image: '/sertifikat/CISCO2.jpg',                 color: '#f59e0b' },
  { id: 4,  title: 'Enterprise Networking, Security, and Automation',issuer: 'Cisco Network Academy',  date: 'Desember 2023',  image: '/sertifikat/CISCO3.jpg',                 color: '#aa3bff' },
  { id: 5,  title: 'Final Exam Java Fundamentals',             issuer: 'Oracle Academy',         date: 'Mei 2023',       image: '/sertifikat/Java Fundamental_Final.jpg', color: '#10b981' },
  { id: 6,  title: 'Bootcamp Basic Web Development',           issuer: 'Himti',                  date: 'April 2024',     image: '/sertifikat/frontend.jpg',               color: '#f43f5e' },
  { id: 7,  title: 'Java Programming',                         issuer: 'Oracle Academy',         date: 'Juni 2023',      image: '/sertifikat/java Programing.jpg',         color: '#0ea5e9' },
  { id: 8,  title: 'Java Fundamentals',                        issuer: 'Oracle Academy',         date: 'Mei 2023',       image: '/sertifikat/Java Fundamental.jpg',        color: '#f43f5e' },
  { id: 9,  title: 'Bootcamp UI/UX Design',                   issuer: 'Himiti',                 date: 'Agustus 2024',   image: '/sertifikat/BootcampUI.png',              color: '#0ea5e9' },
  { id: 10,  title: 'AI Basics: Overview of AI',               issuer: 'Huawei',                 date: 'November 2023',  image: '/sertifikat/SERTIFIKAT AI-HUAWEI.png',   color: '#f43f5e' },
  { id: 11, title: 'HCIA-Datacom V1.0 Course',                issuer: 'Huawei',                 date: 'November 2024',  image: '/sertifikat/SERTIFIKAT HUAWEI.png',      color: '#0ea5e9' },
  { id: 12, title: 'Microsoft Excel Fundamental',             issuer: 'Yureka Education Center',date: 'Oktober 2026',  image: '/sertifikat/excel.jpg',                  color: '#10b981' },
]

export default function Sertifikat() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox   = (s) => setLightbox(s)
  const closeLightbox  = () => setLightbox(null)
  const handleBackdrop = (e) => { if (e.target === e.currentTarget) closeLightbox() }

  // Duplikasi untuk loop seamless
  const doubled = [...sertifikatList, ...sertifikatList]

  return (
    <section id="sertifikat" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Sertifikasi & Pencapaian</h2>
          <p className="section-subtitle">
            Sertifikat yang telah saya raih dari berbagai platform pembelajaran online.
          </p>
        </div>
      </div>

      {/* Marquee — full width, di luar section-inner agar edge-to-edge */}
      <div className="marquee-wrapper">
        {/* Fade kiri & kanan */}
        <div className="marquee-fade marquee-fade--left"  />
        <div className="marquee-fade marquee-fade--right" />

        <div className="marquee-track">
          {doubled.map((sertif, i) => (
            <div
              key={`${sertif.id}-${i}`}
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
              </div>
              <div className="sertif-info">
                <span className="sertif-issuer" style={{ color: sertif.color }}>{sertif.issuer}</span>
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
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Tutup">✕</button>
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
                <span style={{ fontSize: 56 }}>🏆</span>
                <p>Tambahkan gambar ke <code>/public/sertifikat/</code></p>
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
