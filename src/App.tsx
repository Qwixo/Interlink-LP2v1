import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import ComparisonSection from './components/ComparisonSection'
import InterlinkBenefits from './components/InterlinkBenefits'
import InterlinkDifference from './components/InterlinkDifference'
import StudyOptions from './components/StudyOptions'
import Testimonials from './components/Testimonials'
import NextSteps from './components/NextSteps'
import PersonalMessage from './components/PersonalMessage'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ComparisonSection />
        <InterlinkBenefits />
        <InterlinkDifference />
        <StudyOptions />
        <Testimonials />
        <NextSteps />
        <PersonalMessage />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
