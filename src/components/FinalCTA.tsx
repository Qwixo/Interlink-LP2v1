import React from 'react'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey Starts Now – Let's Make a Plan!
          </h2>
          <p className="text-lg mb-10 text-blue-100">
            Take the first step toward your future in the U.S. Our advisors are ready to create a personalized study plan just for you.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">WhatsApp (optional)</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="goal" className="block text-gray-700 font-medium mb-2">What's your goal?</label>
                <select 
                  id="goal" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your primary goal</option>
                  <option value="bachelor">Bachelor's Degree in the U.S.</option>
                  <option value="master">Master's Degree in the U.S.</option>
                  <option value="english">English Improvement Only</option>
                  <option value="career">Career Advancement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-secondary text-white px-6 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-medium flex items-center justify-center"
              >
                Talk to an Advisor Now!
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <p className="mt-8 text-sm text-blue-100">
            By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
