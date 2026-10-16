import './Section.css'
import './About.css'

const skills = [
  
  { name: 'JavaScript', level: 85 },
  { name: 'React JS', level: 80 },
  { name: 'Laravel', level: 75 },
  { name: 'Django', level: 70 },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Kenali Saya Lebih Dekat</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Saya adalah seorang <strong>Software Development</strong> yang bersemangat dalam membangun
              antarmuka web yang menarik dan mudah digunakan. Saya menikmati setiap proses dari desain
              hingga implementasi.
            </p>
            <p>
              Dengan pengalaman menggunakan teknologi modern seperti React, saya selalu berusaha
              menghadirkan kode yang bersih, efisien, dan mudah di-maintain.
            </p>
            <div className="about-info">
              <div className="info-item"><span>Nama</span><strong>Arif Novianto</strong></div>
              <div className="info-item"><span>Email</span><strong>noviantoarif88@gmail.com</strong></div>
              <div className="info-item"><span>Lokasi</span><strong>Indonesia</strong></div>
              <div className="info-item"><span>Nomor</span><strong>085885307312</strong></div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Skill Saya</h3>
            {skills.map(({ name, level }) => (
              <div key={name} className="skill-item">
                <div className="skill-header">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
