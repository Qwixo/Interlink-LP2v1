import React from 'react'
import { DollarSign, Globe, School, Award, Trophy } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Better Career Opportunities",
      description: "Higher salaries & global job access after graduating from a U.S. institution"
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "International Experience",
      description: "Make global connections & friends that last a lifetime"
    },
    {
      icon: <School className="h-10 w-10 text-primary" />,
      title: "Top Education",
      description: "Quality education at renowned universities recognized worldwide"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "TOEFL Waiver & Direct University Entry",
      description: "Easier university admission through our specialized programs"
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Life-Changing Experience",
      description: "Gain fluency, independence, and personal growth in a new culture"
    }
  ]

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Studying in the U.S. Can Change Your Life Forever
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Happy international students" 
            className="rounded-lg mx-auto max-w-full h-auto shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
