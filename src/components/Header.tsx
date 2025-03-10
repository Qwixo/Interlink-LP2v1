import React from 'react'
import { GraduationCap } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Interlink Education</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#benefits" className="text-gray-700 hover:text-primary transition">Benefits</a>
          <a href="#comparison" className="text-gray-700 hover:text-primary transition">Why U.S.</a>
          <a href="#options" className="text-gray-700 hover:text-primary transition">Study Options</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition">Success Stories</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition">FAQ</a>
        </nav>
        <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
          Contact Us
        </button>
      </div>
    </header>
  )
}

export default Header
