"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    sideNav: "Education",
    link: "#education",
  },
  {
    sideNav: "Projects",
    link: "#projects",
  },
  {
    sideNav: "Contact",
    link: "#contact",
  },
  {
    sideNav: "Services",
    link: "#services",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("");

 
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "contact", "services", "education"];
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

  const handleTabClick = (href: string) => {
    setActiveTab(href)
  }

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-8 space-y-4 block">
      {features.map((feature, index) => (
        <Link key={index} href={feature.link} className="flex flex-col gap-2"
        onClick={() => handleTabClick(feature.link)}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm
              ${
                activeTab === feature.link
                  ? "text-[#fb8632] font-semibold"
                  : "text-white/80"
              }
              `}
          >
            {feature.sideNav}
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
