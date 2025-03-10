import React from 'react'
import { TrendingUp } from 'lucide-react'

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          What's the Real Difference? See for Yourself
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-4 bg-primary text-white p-4">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center font-medium">Non-English Speakers</div>
              <div className="col-span-1 text-center font-medium">English Speakers Who Stayed Home</div>
              <div className="col-span-1 text-center font-medium">Those Who Studied in the U.S.</div>
            </div>
            
            {/* Salary Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 p-4">
              <div className="col-span-1 font-medium text-gray-700">Average Salary</div>
              <div className="col-span-1 text-center">$35,000</div>
              <div className="col-span-1 text-center">$50,000</div>
              <div className="col-span-1 text-center font-semibold text-secondary">$75,000+</div>
            </div>
            
            {/* Career Growth Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 p-4">
              <div className="col-span-1 font-medium text-gray-700">Career Growth</div>
              <div className="col-span-1 text-center">Limited</div>
              <div className="col-span-1 text-center">Moderate</div>
              <div className="col-span-1 text-center font-semibold text-secondary">Excellent</div>
            </div>
            
            {/* Global Opportunities Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 p-4">
              <div className="col-span-1 font-medium text-gray-700">Global Opportunities</div>
              <div className="col-span-1 text-center">Very Few</div>
              <div className="col-span-1 text-center">Some</div>
              <div className="col-span-1 text-center font-semibold text-secondary">Abundant</div>
            </div>
            
            {/* Network Row */}
            <div className="grid grid-cols-4 p-4">
              <div className="col-span-1 font-medium text-gray-700">Professional Network</div>
              <div className="col-span-1 text-center">Local</div>
              <div className="col-span-1 text-center">Regional</div>
              <div className="col-span-1 text-center font-semibold text-secondary">Global</div>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 text-secondary mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Takeaway:</h3>
                <p className="text-gray-700">
                  Learning English and studying in the U.S. opens doors to better jobs, higher salaries, and global careers. 
                  The data clearly shows that international education is one of the best investments you can make in your future.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">Salary Comparison</h3>
              <div className="flex items-end justify-center h-64 space-x-12">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 w-16 h-32 rounded-t-md"></div>
                  <p className="mt-2 text-sm text-gray-600">Non-English Speakers</p>
                  <p className="font-medium">$35,000</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-300 w-16 h-48 rounded-t-md"></div>
                  <p className="mt-2 text-sm text-gray-600">English Speakers at Home</p>
                  <p className="font-medium">$50,000</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-secondary w-16 h-64 rounded-t-md"></div>
                  <p className="mt-2 text-sm text-gray-600">U.S. Study Experience</p>
                  <p className="font-medium">$75,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
