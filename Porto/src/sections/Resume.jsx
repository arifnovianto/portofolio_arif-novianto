import './Section.css'
import './Resume.css'

const experiences = [
  {
    period: 'Oktober 2025 - Desember 2025',
    title: 'Junior Software Development ',
    company: 'Faculty of Computer Science, University of Indonesia.',
    desc: 'Bertanggung Jawab Pembuatan Pengenalan Wajah Berbasis Web menggunakan stack REACT-DJANGO.',
  },
  {
    period: 'Juni 2025 - Agustus 2025',
    title: 'Koordinator Publikasi, Dokumentasi & Desain (PDD) ',
    company: 'Kuliah Kerja Nyata',
    desc: 'Bertanggung Jawab atas apa yang terjadi dilapangan dari segi Publikasi,Dokumentasi & Desain.',
  },
  {
    period: 'Februari 2022 - Mei 2023',
    title: 'Dekorasi Citayam',
    company: 'UI/UX Designer ',
    desc: 'Bertanggung jawab merancang antarmuka website yang menarik, fungsional, dan ramah pengguna.',
  },
]

const educations = [
  {
    period: '2022 - 2026',
    title: 'Universitas Islam Negeri Syarif Hidayatullah Jakarta.',
    institution: 'Teknik Informatika, GPA : 3.77.',
    
  },
  {
    period: '2019 - 2022',
    title: 'SMAS Sejahtera 1 Depok',
    institution: 'IPA',
    
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
