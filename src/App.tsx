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
import SignupPage from './components/SignupPage';

function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookDemo = () => {
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
      <Header onBookCall={handleBookDemo} />
      <Hero onBookCall={handleBookDemo} />
      <ProblemAgitation />
      <Solutions onBookCall={handleBookDemo} />
      <About />
      <Testimonials />
      <CTA onBookCall={handleBookDemo} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
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