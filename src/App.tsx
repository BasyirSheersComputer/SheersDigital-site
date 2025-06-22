import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import DataProtection from './components/DataProtection';

function HomePage() {
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
    <>
      <Header onBookCall={handleBookCall} />
      <Hero onBookCall={handleBookCall} />
      <ProblemAgitation />
      <Solutions onBookCall={handleBookCall} />
      <About />
      <Testimonials />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
      <CTA onBookCall={handleBookCall} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/data-protection" element={<DataProtection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;