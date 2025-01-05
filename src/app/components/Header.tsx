'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header({ darkMode, setDarkMode }:any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white dark:bg-primary-dark shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-dark dark:text-accent">
          Saloni Pandey
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">About</Link>
          <Link href="#education" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Education</Link>
          <Link href="#experience" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Experience</Link>
          <Link href="#skills" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Skills</Link>
          <Link href="#projects" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Projects</Link>
          <Link href="#certificates" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Certificates</Link>
          <Link href="#contact" className="text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-primary-dark dark:text-accent" /> : <Menu className="text-primary-dark dark:text-accent" />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-primary-dark px-4 py-2"
        >
          <Link href="#about" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">About</Link>
          <Link href="#education" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Education</Link>
          <Link href="#experience" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Experience</Link>
          <Link href="#skills" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Skills</Link>
          <Link href="#projects" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Projects</Link>
          <Link href="#certificates" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Certificates</Link>
          <Link href="#contact" className="block py-2 text-primary-dark dark:text-accent hover:text-primary-light dark:hover:text-white">Contact</Link>
        </motion.nav>
      )}
    </motion.header>
  )
}

