'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#FF6B00] mb-2">Saloni Pandey</h3>
            <p className="text-white/60">Frontend Developer</p>
          </div>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Saloni-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-white/60 hover:text-[#FF6B00] transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pandey-saloni/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-white/60 hover:text-[#FF6B00] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:pandeysaloni4july@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-white/60 hover:text-[#FF6B00] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:8874236285"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-white/60 hover:text-[#FF6B00] transition-colors"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Saloni Pandey. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

