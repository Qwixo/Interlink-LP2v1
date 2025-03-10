import React from 'react'
import { FileCheck, Users, MessageSquare, ClipboardList } from 'lucide-react'

const NextSteps = () => {
  const steps = [
    {
      icon: <FileCheck className="h-10 w-10 text-white" />,
      title: "Free Guide",
      description: "You've already received your comprehensive guide",
      completed: true,
      color: "bg-green-500"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Choose Your Path",
      description: "Decide between online or in-person learning",
      completed: false,
      color: "bg-primary"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Talk to Admissions Team",
      description: "Get personalized advice from our experts",
      completed: false,
      color: "bg-primary"
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-white" />,
      title: "Start Application & Study Plan",
      description: "Begin your journey to studying in the U.S.",
      completed: false,
      color: "bg-primary"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Your Next Steps to Studying in the U.S.
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-10 bottom-10 w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
                  <div className={`${step.color} rounded-full p-4 flex-shrink-0 shadow-md z-10 mb-4 md:mb-0`}>
                    {step.icon}
                  </div>
                  <div className="md:ml-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      {step.completed && (
                        <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-secondary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-medium">
              Let's Talk About Your Study Plan!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextSteps
