'use client'

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Working with this team has been incredible. They delivered our project on time and exceeded our expectations.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Sarah Smith",
    role: "CTO, Innovation Labs",
    content: "Their technical expertise and attention to detail made our complex project a success.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupX",
    content: "The team's ability to transform our vision into reality was remarkable. Highly recommended!",
    image: "/api/placeholder/100/100"
  }
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}