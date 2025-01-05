'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certificates = [
  {
    title: 'Problem Solving Certificate',
    issuer: 'HackerRank'
  },
  {
    title: 'FullStack Development',
    issuer: 'Newton School'
  },
  {
    title: 'Participation in IIT BHU Techfest',
    issuer: 'IIT BHU'
  },
  {
    title: 'Certificate of Achievement',
    issuer: 'Locofast'
  }
]

export default function Certificates() {
  return (
    <section className="py-20" id='certification'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Certificates
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <Award className="w-8 h-8 text-[#FF6B00]" />
            <div>
              <h3 className="font-bold text-white">{cert.title}</h3>
              <p className="text-white/60">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

