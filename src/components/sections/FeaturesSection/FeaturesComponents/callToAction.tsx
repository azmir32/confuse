'use client'

export function CallToAction() {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's transform your ideas into reality. Contact us today for a free consultation.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-blue-400 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}