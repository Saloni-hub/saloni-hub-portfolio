'use client'

import { motion } from 'framer-motion'
import { Star, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-white text-black px-4 py-2 rounded-full mb-4 relative">
              Hello!
              <div className="absolute -right-2 -bottom-2 text-[#FF6B00] text-2xl">✨</div>
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I'm <span className="text-[#FF6B00]">Saloni</span>,<br />
            Frontend Developer
          </h1>
          <p className="text-white/60 mb-8 max-w-md">
            A passionate frontend developer creating exceptional digital experiences with modern web technologies.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#FF6B00] rounded-full font-medium hover:bg-[#FF6B00]/90 transition-colors"
            >
              Portfolio →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/10 rounded-full font-medium backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              Hire me
            </motion.a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]" />
              ))}
            </div>
            <div className="text-white/60">
              <span className="text-white font-bold">3+ Years</span> Experience
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <motion.a
              href="https://github.com/Saloni-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pandey-saloni/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-full bg-[#FF6B00]/20 backdrop-blur-md relative overflow-hidden lg:w-[70%]">
            <Image
              src="/saloni_img.jpeg"
              alt="Saloni Pandey"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

