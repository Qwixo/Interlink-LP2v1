import React from 'react'
import { Zap, Target, Building, Globe, Laptop } from 'lucide-react'

const InterlinkBenefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "No TOEFL Required",
      description: "Easy admission without the stress of standardized tests"
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Small Classes",
      description: "Personalized learning with focused attention from instructors"
    },
    {
      icon: <Building className="h-8 w-8 text-secondary" />,
      title: "University Pathways",
      description: "Guaranteed university entry through our partner institutions"
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Cross-Cultural Support",
      description: "Easy adaptation to American culture with our guidance"
    },
    {
      icon: <Laptop className="h-8 w-8 text-secondary" />,
      title: "Online or In-Person",
      description: "Flexible learning options to fit your lifestyle and needs"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          We Make It Easy for You to Study in the U.S.
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="mr-4 mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-secondary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-medium">
            See how Interlink can help YOU take the next step!
          </button>
        </div>
      </div>
    </section>
  )
}

export default InterlinkBenefits
