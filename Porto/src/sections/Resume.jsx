import './Section.css'
import './Resume.css'

const experiences = [
  {
    period: '2024 - Sekarang',
    title: 'Frontend Developer',
    company: 'PT. Teknologi Maju',
    desc: 'Membangun dan mengembangkan antarmuka web menggunakan React JS dan Tailwind CSS.',
  },
  {
    period: '2023 - 2024',
    title: 'Junior Web Developer',
    company: 'Startup Digital',
    desc: 'Berkontribusi dalam pengembangan fitur-fitur website menggunakan HTML, CSS, dan JavaScript.',
  },
  {
    period: '2022 - 2023',
    title: 'Web Design Intern',
    company: 'Creative Agency',
    desc: 'Magang sebagai desainer web, membuat mockup dan prototype menggunakan Figma.',
  },
]

const educations = [
  {
    period: '2020 - 2024',
    title: 'S1 Teknik Informatika',
    institution: 'Universitas Teknologi Indonesia',
    desc: 'Lulus dengan predikat cumlaude, fokus pada pengembangan perangkat lunak.',
  },
  {
    period: '2018 - 2020',
    title: 'Kursus Web Development',
    institution: 'Dicoding Academy',
    desc: 'Menyelesaikan program front-end dan back-end web development.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">Pengalaman & Pendidikan</h2>
          <p className="section-subtitle">
            Perjalanan profesional dan pendidikan yang membentuk saya menjadi developer seperti sekarang.
          </p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-col-title">
              <span className="col-icon">💼</span> Pengalaman Kerja
            </h3>
            <div className="timeline">
              {experiences.map(({ period, title, company, desc }) => (
                <div key={title} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-period">{period}</span>
                    <h4 className="timeline-title">{title}</h4>
                    <p className="timeline-place">{company}</p>
                    <p className="timeline-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-col-title">
              <span className="col-icon">🎓</span> Pendidikan
            </h3>
            <div className="timeline">
              {educations.map(({ period, title, institution, desc }) => (
                <div key={title} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-period">{period}</span>
                    <h4 className="timeline-title">{title}</h4>
                    <p className="timeline-place">{institution}</p>
                    <p className="timeline-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-cta">
          <a href="/CV_ARIF NOVIANTO.pdf" download className="btn btn-primary">Download CV Lengkap</a>
        </div>
      </div>
    </section>
  )
}
