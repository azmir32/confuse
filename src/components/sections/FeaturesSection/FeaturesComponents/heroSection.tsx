'use client'

import { motion } from 'framer-motion'
import { BackgroundPattern } from '@/components/ui/BackgroundPattern'

export function HeroSection() {
  return (
    <section className="relative py-24 bg-blue-500 text-white">
      <BackgroundPattern fade="up" />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Elevate Your Digital Presence</h1>
          <p className="text-xl mb-8">
            Transform your ideas into powerful, scalable web solutions with cutting-edge technology
          </p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}
