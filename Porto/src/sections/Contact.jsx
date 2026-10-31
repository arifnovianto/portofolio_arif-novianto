import { useState } from 'react'
import './Section.css'
import './Contact.css'

const contactInfo = [
  { icon: '📍', label: 'Lokasi',    value: 'Depok , Jawa Barat.',       color: '#f43f5e' },
  { icon: '📧', label: 'Email',     value: 'noviantoarif88@gmail.com', color: '#1dc8c8' },
  { icon: '📱', label: 'WhatsApp',  value: '+62 858-8530-7312',        color: '#10b981' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arifnvnt_',
    color: '#e1306c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6285885307312',
    color: '#25d366',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arif-novianto',
    color: '#0077b5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Hubungi Saya</h2>
        </div>

        <div className="contact-wrapper">

          {/* ── Kiri ── */}
          <div className="contact-left">

            {/* Tagline card */}
            <div className="contact-tagline">
              <div className="contact-tagline-glow" />
              <p className="contact-tagline-text">
                Saya terbuka untuk <strong>kolaborasi </strong>  
                atau <strong>diskusi teknologi</strong> 
              </p>
            </div>

            {/* Info items */}
            <div className="contact-items">
              {contactInfo.map(({ icon, label, value, color }) => (
                <div key={label} className="contact-item" style={{ '--item-color': color }}>
                  <div className="contact-icon-wrap">{icon}</div>
                  <div>
                    <span className="contact-label">{label}</span>
                    <strong className="contact-value">{value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="social-links">
              {socials.map(({ label, href, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{ '--social-color': color }}
                  aria-label={label}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Kanan: Form ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-glow" />

            {sent && (
              <div className="form-success" role="alert">
                ✅ Pesan terkirim! Saya akan segera menghubungi Anda.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input id="name" type="text" name="name" placeholder="Nama Anda"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="email@example.com"
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input id="subject" type="text" name="subject" placeholder="Subjek pesan"
                value={form.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" rows={4} placeholder="Tulis pesan Anda..."
                value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Kirim Pesan ✉️
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
