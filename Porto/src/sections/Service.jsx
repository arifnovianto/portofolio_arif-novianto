import './Section.css'
import './Service.css'

const services = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Merancang tampilan antarmuka yang menarik, intuitif, dan berpusat pada pengalaman pengguna terbaik.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Membangun website modern yang responsif menggunakan teknologi terkini seperti React dan Vite.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Memastikan website tampil sempurna di semua perangkat, dari desktop hingga mobile.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    desc: 'Mengoptimalkan kecepatan dan performa website untuk memberikan pengalaman terbaik.',
  },
  {
    icon: '🔧',
    title: 'Web Maintenance',
    desc: 'Menyediakan layanan pemeliharaan dan pembaruan website agar selalu berjalan optimal.',
  },
  {
    icon: '🚀',
    title: 'Deployment & Hosting',
    desc: 'Membantu proses deployment dan konfigurasi hosting website ke berbagai platform.',
  },
]

export default function Service() {
  return (
    <section id="service" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Layanan</span>
          <h2 className="section-title">Apa yang Saya Tawarkan</h2>
          <p className="section-subtitle">
            Saya menyediakan berbagai layanan pengembangan web untuk membantu bisnis dan proyek Anda berkembang.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="service-card">
              <div className="service-icon">{icon}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
