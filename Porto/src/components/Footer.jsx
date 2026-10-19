import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} Arif Novianto. All right reserved
        </p>
      </div>
    </footer>
  )
}
