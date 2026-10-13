import './Section.css'
import './Blog.css'

const posts = [
  {
    id: 1,
    date: '10 Oktober 2026',
    category: 'React',
    title: 'Memahami React Hooks: useState dan useEffect',
    excerpt: 'Pelajari cara menggunakan React Hooks secara efektif untuk mengelola state dan side effects dalam komponen fungsional.',
    readTime: '5 menit baca',
    color: '#aa3bff',
  },
  {
    id: 2,
    date: '5 Oktober 2026',
    category: 'CSS',
    title: 'Tips Membuat Animasi CSS yang Smooth',
    excerpt: 'Teknik-teknik terbaik untuk membuat animasi CSS yang halus tanpa mengorbankan performa website Anda.',
    readTime: '4 menit baca',
    color: '#6366f1',
  },
  {
    id: 3,
    date: '28 September 2026',
    category: 'JavaScript',
    title: 'Async/Await vs Promises: Kapan Menggunakan yang Mana?',
    excerpt: 'Perbandingan mendalam antara async/await dan Promises untuk penanganan operasi asinkron di JavaScript.',
    readTime: '7 menit baca',
    color: '#f59e0b',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Blog</span>
          <h2 className="section-title">Artikel Terbaru</h2>
          <p className="section-subtitle">
            Berbagi pengetahuan dan pengalaman seputar dunia web development.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map(({ id, date, category, title, excerpt, readTime, color }) => (
            <article key={id} className="blog-card">
              <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)` }}>
                <span className="blog-cat-badge" style={{ background: color }}>{category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">📅 {date}</span>
                  <span className="blog-read">⏱ {readTime}</span>
                </div>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <a href="#" className="blog-link">
                  Baca Selengkapnya <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <a href="#" className="btn btn-outline">Lihat Semua Artikel</a>
        </div>
      </div>
    </section>
  )
}
