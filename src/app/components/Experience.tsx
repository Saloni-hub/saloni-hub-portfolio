'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Vision IAS',
    location: 'Noida, U.P',
    period: 'March 2023 – Present',
    achievements: [
      'Designed a front-end interface using HTML, CSS, and JavaScript',
      'Developed a Google login and signup form, integrating OAuth 2.0 for secure authentication',
      'Architected a custom PDF generation feature by integrating the jsPDF library into the front-end workflow'
    ]
  },
  {
    title: 'SDE-1',
    company: 'Locofast',
    location: 'Delhi',
    period: 'Sep 2021 – March 2023',
    achievements: [
      'Implementation of design and ensuring user-friendly, visually appealing, and responsive application',
      'Collaboration with colleagues and guide them to achieve the best performance of application',
      'Developed a Razorpay payment screen for seamless online transactions',
      'Integrated the Razorpay payment gateway into the front-end using JavaScript and API calls'
    ]
  },
  {
    title: 'Mentor',
    company: 'Newton School',
    location: 'Remote',
    period: 'March 2022 – Dec 2022',
    achievements: [
      'Mentored 15 students in front-end development, guiding them through hands-on coding projects',
      'Directed daily problem-solving sessions, resolving an average of 5+ operational issues per day'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#FF6B00]">{exp.title}</h3>
                <p className="text-white/60">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-white/40">{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF6B00] mt-1">•</span>
                  <span className="text-white/80">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

