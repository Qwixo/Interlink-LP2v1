import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const InterlinkDifference = () => {
  const comparisonItems = [
    {
      feature: "TOEFL Waiver",
      interlink: true,
      others: false
    },
    {
      feature: "Personalized Learning",
      interlink: "Small Classes",
      others: "Large Classes"
    },
    {
      feature: "University Partnerships",
      interlink: "Direct Entry",
      others: "Requires TOEFL"
    },
    {
      feature: "Support & Mentorship",
      interlink: "Full",
      others: "Limited or None"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Choose Interlink Over Other Options?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-white p-4">
              <div className="col-span-1 font-medium">Feature</div>
              <div className="col-span-1 text-center font-medium">Interlink</div>
              <div className="col-span-1 text-center font-medium">Others</div>
            </div>
            
            {comparisonItems.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index !== comparisonItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="col-span-1 font-medium text-gray-700">{item.feature}</div>
                <div className="col-span-1 text-center">
                  {typeof item.interlink === 'boolean' ? (
                    item.interlink ? 
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : 
                      <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                  ) : (
                    <span className="text-green-600 font-medium">{item.interlink}</span>
                  )}
                </div>
                <div className="col-span-1 text-center">
                  {typeof item.others === 'boolean' ? (
                    item.others ? 
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : 
                      <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                  ) : (
                    <span className="text-red-500 font-medium">{item.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2">Most programs just teach English—we prepare you for real success!</h3>
            <p className="text-gray-700">
              At Interlink, we don't just focus on language skills. We provide a comprehensive pathway to academic 
              and career success in the United States, with personalized support every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InterlinkDifference
