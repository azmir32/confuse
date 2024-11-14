'use client'

import { ContactForm } from "@/components/sections/ContactSection/ContactForm"
import { ContactInfo } from "@/components/sections/ContactSection/ContactInfo"


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-16">Let's work together</h1>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <ContactInfo />
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="lg:pl-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}