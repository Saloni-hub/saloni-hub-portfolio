'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Rajkiya Engineering College, Sonbhadra',
      duration: 'July 2017 – May 2021',
    },
    {
      degree: 'Full Stack Development',
      institution: 'Newton School',
      duration: 'July 2020 – Dec 2020',
    },
  ]

  return (
    <section className="py-20" id='education'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex flex-wrap gap-4 justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-[#FF6B00]">{edu.degree}</h3>
                <p className="text-white/60">{edu.institution}</p>
              </div>
              <span className="text-white/40">{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/resume.pdf"
          download="Saloni_Pandey_Resume.pdf"
          className="inline-block px-6 py-3 bg-[#FF6B00] text-white font-bold rounded-lg hover:bg-[#FF8C33] transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
