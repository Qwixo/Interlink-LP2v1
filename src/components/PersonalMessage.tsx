import React from 'react'
import { MessageCircle } from 'lucide-react'

const PersonalMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border-l-4 border-secondary">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            🤫 Pssst… If You're on the Fence, Read This
          </h2>
          
          <div className="flex items-start">
            <div className="mr-6 flex-shrink-0 hidden md:block">
              <div className="bg-primary rounded-full p-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Still Not Sure? Here's My Advice to You…</h3>
              
              <div className="prose text-gray-700">
                <p className="mb-4">
                  I understand that making the decision to study abroad can feel overwhelming. The cost, the distance from home, 
                  the uncertainty of success – these are all valid concerns that many of our students had before taking the leap.
                </p>
                
                <p className="mb-4">
                  But here's what I've seen after helping hundreds of international students: those who take this step almost 
                  always look back and say it was the best decision they ever made. Not just for their careers, but for their 
                  personal growth and confidence.
                </p>
                
                <p className="mb-4">
                  The truth is, there will never be a "perfect" time to make this change. What matters is having the right 
                  support system – and that's exactly what we provide at Interlink. We've designed our programs specifically 
                  for students like you, with all the guidance and resources you need to succeed.
                </p>
                
                <p className="font-medium">
                  Your dreams are possible—and we'll help you get there, one step at a time.
                </p>
                
                <p className="mt-6">
                  Warmly,<br />
                  <span className="font-semibold">Dr. Sarah Johnson</span><br />
                  <span className="text-sm text-gray-600">Director of International Programs, Interlink Education</span>
                </p>
              </div>
              
              <div className="mt-8">
                <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition">
                  Take the first step today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalMessage
