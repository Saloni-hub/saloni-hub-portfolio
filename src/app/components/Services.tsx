'use client'

import { motion } from 'framer-motion'

const services = [
    {
      title: 'Convert Figma to Next.js',
      description: 'Transforming Figma designs into pixel-perfect Next.js applications',
      icon: '🔄'
    },
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites',
      icon: '💻'
    },
    {
      title: 'Bug Fixes & Optimization',
      description: 'Identifying and fixing issues to ensure smooth functionality',
      icon: '🐞'
    },
    {
      title: 'Mentorship',
      description: 'Guiding students in front-end development with hands-on coding projects',
      icon: '🎓'
    }
  ]
  

export default function Services() {
  return (
    <section className="py-20" id='services'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Services
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/60">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

