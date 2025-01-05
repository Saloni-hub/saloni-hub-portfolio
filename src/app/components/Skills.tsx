'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: 'Vanilla Javascript, Reactjs, Nextjs, Redux, SCSS, MaterialUI, ChakraUI, ContextAPI'
  },
  {
    title: 'Languages',
    skills: 'Javascript, Python, Java'
  },
  {
    title: 'Tools',
    skills: 'Git, VS code, Postman, Heroku, Netlify'
  }
]

export default function Skills() {
  return (
    <section className="py-20" id='skills'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-bold text-[#FF6B00] mb-4">{category.title}</h3>
            <p className="text-white/80">{category.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

