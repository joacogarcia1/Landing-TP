import Header from './components/Header';
import HeroSection from './components/Primera pantalla';
import TechnologySection from './components/Pantalla tecnologia';
import AnalysisSection from './components/analisis';
import HowItWorksSection from './components/Como funciona';
import TestimonialsSection from './components/Nuestro impacto';
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