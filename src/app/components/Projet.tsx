'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Vision Blog',
    description: 'Architected and Created Vision Blog platform utilizing Vanilla javascript and Tailwind. Integrated features for User, Blog, Role management, Search, Filtration, and Comment management.',
    tech: 'Vanilla Javascript, Tailwind CSS'
  },
  {
    title: 'Admin Panel',
    description: 'Optimized performance, SEO, and accessibility by converting admin panel from PHP to Next.js. Developed scheduling system and automated notifications. Implemented custom email templates.',
    tech: 'NextJs, ReactJs, Javascript, CSS'
  },
  {
    title: 'AI Tutor',
    description: 'Developed an AI Tutor with features for image upload, chat, and voice interaction for writing assistance. Integrated text-to-speech functionality.',
    tech: 'NextJs, ReactJs, Tailwind CSS'
  }
]

export default function Projects() {
  return (
    <section className="py-20" id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-bold text-[#FF6B00] mb-4">{project.title}</h3>
            <p className="text-white/60 mb-4">{project.description}</p>
            <p className="text-white/40 text-sm mb-6">{project.tech}</p>
            {/* <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

