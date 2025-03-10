import React from 'react'
import { FileText } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Your Step-by-Step Guide is Ready – Start Your Journey Now!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We've sent a copy to your email, but you can also access it instantly below. 
            Take the first step towards your future today!
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-8 border-l-4 border-primary">
            <h3 className="font-medium text-gray-800 mb-2">Preview of your guide:</h3>
            <p className="text-gray-600 text-sm">
              "Studying in the United States offers unparalleled opportunities for international students. 
              This guide will walk you through everything from application requirements to visa processes, 
              housing options, and how to thrive in American academic culture..."
              <button className="text-primary font-medium ml-1 hover:underline">Read more</button>
            </p>
          </div>
          
          <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition text-lg">
            Want to turn this dream into reality? Let's talk about your study plan!
          </button>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="bg-white shadow-xl rounded-lg p-6 transform rotate-3 border border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary">Your Complete Guide to Studying in the U.S.</h3>
              </div>
              <div className="h-64 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying at a university campus" 
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By Interlink Education</span>
                <span className="text-sm font-medium text-primary">24 pages</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-full p-3 shadow-lg">
              <FileText className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
