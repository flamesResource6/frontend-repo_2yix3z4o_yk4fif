import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      {/* Hero with 3D animation */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
