'use client'

import { motion } from 'framer-motion'
import {
  HeroSection,
  TechnicalSkills,
  Testimonials,
  CallToAction
} from '@/components/sections/FeaturesSection'

export default function FeaturesPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <HeroSection />
      <TechnicalSkills />
      <Testimonials />
      <CallToAction />
    </motion.main>
  )
}