import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App