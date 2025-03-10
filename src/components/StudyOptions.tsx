import React from 'react'
import { MapPin, Wifi } from 'lucide-react'

const StudyOptions = () => {
  return (
    <section id="options" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Two Ways to Reach Your Goal – Pick What Works Best for You!
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* In-Person Option */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="h-48 bg-primary flex items-center justify-center">
              <MapPin className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">In-Person Learning</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Experience U.S. firsthand with full immersion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Immerse fully in English with native speakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Enjoy campus life & build lasting friendships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Access to university facilities and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Direct cultural experiences and local connections</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Starting from <span className="font-bold text-primary">$1,500</span> per month</p>
              </div>
            </div>
          </div>
          
          {/* Online Option */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="h-48 bg-secondary flex items-center justify-center">
              <Wifi className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Online Learning</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Learn comfortably from your home country</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Transition smoothly to the U.S. later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Flexible schedule with interactive lessons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Save on living expenses while preparing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>Same quality instruction and university pathways</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Starting from <span className="font-bold text-primary">$800</span> per month</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 mb-6">
            Both options provide the same quality education and pathway to U.S. universities. 
            Our flexible programs are designed to fit your budget and lifestyle needs.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-medium">
            Compare Options in Detail
          </button>
        </div>
      </div>
    </section>
  )
}

export default StudyOptions
