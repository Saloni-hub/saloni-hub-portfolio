import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12"
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#FF6B00] sm:text-4xl">
            Saloni Pandey
          </h1>
          <p className="mt-2 text-white/60">Frontend Developer</p>
          <p className="mt-4 text-lg text-white/80">
            I am a passionate Frontend Developer with a strong background in
            Computer Science. With over 3.6 years of professional experience, I
            specialize in creating user-friendly, visually appealing, and
            responsive web applications. My expertise lies in technologies such
            as React, Next.js, and various frontend frameworks.
          </p>
          <p className="mt-4 text-lg text-white/80">
            I have a proven track record of implementing complex features, such
            as Google OAuth integration and custom PDF generation. My experience
            at Vision IAS and Locofast has honed my skills in frontend
            architecture, payment gateway integration, and collaborative
            development.
          </p>
          <p className="mt-4 text-lg text-white/80">
            As a mentor at Newton School, I've guided students in frontend
            development, showcasing my ability to communicate complex concepts
            effectively. I'm always eager to take on new challenges and continue
            growing in the ever-evolving field of web development.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="mailto:pandeysaloni4july@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:8874236285"
              className="text-gray-400 hover:text-gray-500"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Saloni-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pandey-saloni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
