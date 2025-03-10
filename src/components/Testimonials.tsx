import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Interlink changed my life! I went from barely speaking English to getting accepted into my dream university in California. The support was amazing.",
      university: "University of California"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "The online program was perfect for me. I could prepare while still working in my home country, and when I arrived in the U.S., I was ready for university.",
      university: "Michigan State University"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "I was nervous about studying abroad, but Interlink made the transition so smooth. Their small classes and personal attention helped me succeed.",
      university: "Boston University"
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          See How Others Made It Happen!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-5 -right-5">
                <Quote className="h-10 w-10 text-secondary opacity-20" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-primary"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.country}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-primary font-medium">{testimonial.university}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
