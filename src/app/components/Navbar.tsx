"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };



  const handleTabClick = (href: string) => {
    setActiveTab(href);
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#certification", label: "Certification" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "certification"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveTab(`#${section}`);
          break;
        } else {
          setActiveTab('');
        }
      }
    };

    // Check for hash in the URL when the page loads
    const initialHash = window.location.hash;
    if (initialHash) {
      setActiveTab(initialHash);
    }

    // Set scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="mx-5 px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#FF6B00]">
            <Image
              src="/logo.webp"
              width="40"
              height="40"
              alt="logo"
              className="h-full w-full rounded-full object-cover"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white/80 hover:text-[#FF6B00] transition-colors ${
                  activeTab === link.href ? "text-[#fb8632] font-semibold" : ""
                }`}
                onClick={() => handleTabClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div className="flex flex-col space-y-4 mt-4 p-4 bg-black/90 rounded-lg">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-white/80 hover:text-[#FF6B00] transition-colors block py-2 ${
                        activeTab === link.href
                          ? "text-[#fb8632] font-semibold"
                          : ""
                      }`}
                      onClick={() => handleTabClick(link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
