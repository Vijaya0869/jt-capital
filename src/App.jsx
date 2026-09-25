import Masthead from './components/Masthead.jsx'
import Hero from './components/Hero.jsx'
import Offering from './components/Offering.jsx'
import Thesis from './components/Thesis.jsx'
import Strategy from './components/Strategy.jsx'
import Platform from './components/Platform.jsx'
import Structure from './components/Structure.jsx'
import Criteria from './components/Criteria.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Masthead />
      <main id="top">
        <Hero />
        <Offering />
        <Thesis />
        <Strategy />
        <Platform />
        <Structure />
        <Criteria />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
