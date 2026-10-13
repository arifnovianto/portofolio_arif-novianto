import { useState } from 'react'
import './Section.css'
import './Contact.css'

const contactInfo = [
  { icon: '📍', label: 'Lokasi', value: 'Jakarta, Indonesia' },
  { icon: '📧', label: 'Email', value: 'email@example.com' },
  { icon: '📱', label: 'WhatsApp', value: '+62 812-3456-7890' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: integrate with email service here
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Kontak</span>
          <h2 className="section-title">Hubungi Saya</h2>
          <p className="section-subtitle">
            Punya proyek menarik? Atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Mari Terhubung</h3>
            <p>Saya terbuka untuk peluang freelance, kolaborasi proyek, atau diskusi seputar teknologi.</p>

            <div className="contact-items">
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} className="contact-item">
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <span className="contact-label">{label}</span>
                    <strong className="contact-value">{value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a href="#" className="social-btn" aria-label="GitHub">GH</a>
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Instagram">Ig</a>
              <a href="#" className="social-btn" aria-label="Twitter">Tw</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {sent && (
              <div className="form-success" role="alert">
                ✅ Pesan berhasil dikirim! Saya akan segera menghubungi Anda.
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subjek pesan"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                value={form.message}
                onChange={handleChange}
                required
              />
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
