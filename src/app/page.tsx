'use client'

import About from "./components/About"
import Certificates from "./components/Certification"
import Contact from "./components/Contact"
import Education from "./components/Eductation"
import Experience from "./components/Experience"
import Features from "./components/Feature"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projet"
import Services from "./components/Services"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />
      <main className="container mx-auto px-10">
        <Hero />
        <About/>
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact/>
        <Services/>
        <Certificates />
      </main>
      <Features />
    </div>
  )
}

