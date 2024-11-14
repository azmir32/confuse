'use client'

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Footer from '@/components/Footer';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ProblemsSection } from "@/components/sections/ProblemSection/problems-section"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="relative"
    >
      {/* Hero Section with upward fade */}
      <section className="relative">
        <BackgroundPattern fade="up" />
        <HeroSection />
      </section>

      {/* About Section with downward fade */}
      <section className="relative bg-slate-50">
        <BackgroundPattern fade="down" />
        <AboutSection />
      </section>

      {/* Projects Section with upward fade */}
      <section className="relative">
        <BackgroundPattern fade="up" />
        <ProjectsSection />
      </section>

      {/* Skills Section with no fade */}
      <section className="relative bg-slate-50">
        <BackgroundPattern fade="none" />
        <SkillsSection />
      </section>
      
      <section className="relative">
        <BackgroundPattern fade="down" />
        <ProblemsSection />
      </section>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}