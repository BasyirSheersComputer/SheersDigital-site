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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import DataProtection from './components/DataProtection';

// Service Pages
import CloudMigration from './components/services/CloudMigration';
import Cybersecurity from './components/services/Cybersecurity';
import MobileAppDevelopment from './components/services/MobileAppDevelopment';
import WebApplicationDevelopment from './components/services/WebApplicationDevelopment';
import ProcessAutomation from './components/services/ProcessAutomation';
import ITConsulting from './components/services/ITConsulting';
import SupportMaintenance from './components/services/SupportMaintenance';

function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookCall = () => {
    setIsCalendlyOpen(true);
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
      <Testimonials />
      <CTA onBookCall={handleBookCall} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </>
  );
}

function ServicePageWrapper({ children }: { children: React.ReactNode }) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookCall = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <Header onBookCall={handleBookCall} />
      {React.cloneElement(children as React.ReactElement, { onBookCall: handleBookCall })}
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
          <Route path="/privacy-policy" element={<><Header onBookCall={() => {}} /><PrivacyPolicy /></>} />
          <Route path="/terms-of-service" element={<><Header onBookCall={() => {}} /><TermsOfService /></>} />
          <Route path="/data-protection" element={<><Header onBookCall={() => {}} /><DataProtection /></>} />
          
          {/* Service Pages */}
          <Route path="/services/cloud-migration" element={
            <ServicePageWrapper>
              <CloudMigration />
            </ServicePageWrapper>
          } />
          <Route path="/services/cybersecurity" element={
            <ServicePageWrapper>
              <Cybersecurity />
            </ServicePageWrapper>
          } />
          <Route path="/services/mobile-app-development" element={
            <ServicePageWrapper>
              <MobileAppDevelopment />
            </ServicePageWrapper>
          } />
          <Route path="/services/web-application-development" element={
            <ServicePageWrapper>
              <WebApplicationDevelopment />
            </ServicePageWrapper>
          } />
          <Route path="/services/process-automation" element={
            <ServicePageWrapper>
              <ProcessAutomation />
            </ServicePageWrapper>
          } />
          <Route path="/services/it-consulting" element={
            <ServicePageWrapper>
              <ITConsulting />
            </ServicePageWrapper>
          } />
          <Route path="/services/support-maintenance" element={
            <ServicePageWrapper>
              <SupportMaintenance />
            </ServicePageWrapper>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;