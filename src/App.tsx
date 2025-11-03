/**
 * Main App - AG1-Inspired Professional Design
 * Clean, outcome-focused, data-driven
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import SEOHead from './components/SEOHead';
import Footer from './components/Footer';
import { getSEOConfig } from './config/seo';

// Import page components
import InventoryIntegration from './components/pages/InventoryIntegration';
import WasteLoggingAutomation from './components/pages/WasteLoggingAutomation';
import SupplierIntegration from './components/pages/SupplierIntegration';
import AIForecasting from './components/pages/AIForecasting';
import ComplianceAutomation from './components/pages/ComplianceAutomation';
import WasteWisePlatformPage from './components/pages/WasteWisePlatform';
import ROICalculator from './components/pages/ROICalculator';
import IndustryReports from './components/pages/IndustryReports';
import ImplementationGuide from './components/pages/ImplementationGuide';
import SupportCenter from './components/pages/SupportCenter';
import GetStarted from './components/pages/GetStarted';
import ServoraDevelopment from './components/pages/ServoraDevelopment';
import AboutUs from './components/pages/AboutUs';

function App() {
  const homeSEO = getSEOConfig('home');
  
  return (
    <Routes>
      {/* Home Page - Professional, Streamlined */}
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          <SEOHead
            title={homeSEO.title}
            description={homeSEO.description}
            keywords={homeSEO.keywords}
            canonicalUrl={homeSEO.canonicalUrl}
            structuredData={homeSEO.structuredData}
          />
          <Header />
          <main>
            {/* Hero - Outcome-focused value proposition */}
            <Hero />
            
            {/* Proof - Real data, no fake testimonials */}
            <ProofSection />
            
            {/* Pricing - Hormozi value stack with guarantees */}
            <PricingSection />
            
            {/* FAQ - Common questions */}
            <FAQ />
          </main>
          <Footer />
        </div>
      } />

      {/* Individual Solution Pages */}
      <Route path="/inventory-integration" element={<InventoryIntegration />} />
      <Route path="/waste-logging-automation" element={<WasteLoggingAutomation />} />
      <Route path="/supplier-integration" element={<SupplierIntegration />} />
      <Route path="/ai-forecasting" element={<AIForecasting />} />
      <Route path="/compliance-automation" element={<ComplianceAutomation />} />
      <Route path="/wastewise-platform" element={<WasteWisePlatformPage />} />
      
      {/* Utility Pages */}
      <Route path="/roi-calculator" element={<ROICalculator />} />
      <Route path="/industry-reports" element={<IndustryReports />} />
      <Route path="/implementation-guide" element={<ImplementationGuide />} />
      <Route path="/support-center" element={<SupportCenter />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/servora-development" element={<ServoraDevelopment />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
