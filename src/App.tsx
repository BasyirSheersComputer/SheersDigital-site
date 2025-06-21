import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';

function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookCall = () => {
    setIsCalendlyOpen(true);
	// Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule');
    }							 
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookCall={handleBookCall} />
      <Hero onBookCall={handleBookCall} />
      <ProblemAgitation />
      <Solutions onBookCall={handleBookCall} />
      <Testimonials />
      <CTA onBookCall={handleBookCall} />
      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </div>
  );
}

export default App;