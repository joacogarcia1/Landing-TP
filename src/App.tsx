import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import AnalysisSection from './components/AnalysisSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TechnologySection />
      <AnalysisSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;