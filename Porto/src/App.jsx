import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Service from './sections/Service'
import Portfolio from './sections/Portfolio'
import Resume from './sections/Resume'
import Sertifikat from './sections/Sertifikat'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Resume />
        <Sertifikat />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
