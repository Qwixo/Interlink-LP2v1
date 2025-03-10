import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs = [
    {
      question: "Do I need a TOEFL score to apply?",
      answer: "No! One of the biggest advantages of Interlink is that we don't require TOEFL scores for admission. Our program is designed to help you improve your English skills and prepare for university studies without this barrier."
    },
    {
      question: "How long are your programs?",
      answer: "Our programs range from 8 weeks to 12 months, depending on your current English level and academic goals. During your initial consultation, we'll assess your needs and recommend the optimal program length for your situation."
    },
    {
      question: "Can I start online and then continue in-person?",
      answer: "Absolutely! Many of our students begin with our online program while still in their home country, then transition to in-person learning in the U.S. when they're ready. This hybrid approach offers flexibility and can help ease the transition."
    },
    {
      question: "What is the approximate cost of your programs?",
      answer: "Our online programs start at $800 per month, while in-person programs start at $1,500 per month. These costs include all instruction, materials, and support services. We also offer payment plans and scholarship opportunities for qualified students."
    },
    {
      question: "I'm not sure if I'm ready for this. How can I know?",
      answer: "This is a common concern, and it's completely normal to feel uncertain. We offer a free initial assessment to evaluate your current English level and academic readiness. Our advisors will provide honest feedback and recommendations based on your goals. Remember, most of our students start with some doubts but quickly gain confidence with our supportive approach."
    }
  ]
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 border rounded-lg overflow-hidden ${openIndex === index ? 'border-primary' : 'border-gray-200'}`}
            >
              <button 
                className="w-full flex justify-between items-center p-5 bg-white text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-primary" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                }
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
