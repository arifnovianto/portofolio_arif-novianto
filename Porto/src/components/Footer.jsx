import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">My<span className="accent">Porto</span></span>
        <p className="footer-copy">
          © {new Date().getFullYear()} Nama Kamu. Dibuat dengan ❤️ menggunakan React.
        </p>
        <a href="#home" className="footer-top" aria-label="Kembali ke atas">↑ Atas</a>
      </div>
    </footer>
  )
}
