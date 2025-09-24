import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InfluencerTestimonial from './components/InfluencerTestimonial';
import ComparisonTable from './components/ComparisonTable';
import GetStartedCTA from './components/GetStartedCTA';
import CustomerReviews from './components/CustomerReviews';
import ResearchEvidence from './components/ResearchEvidence';
import BenefitCopy from './components/BenefitCopy';
import FAQ from './components/FAQ';
import CommunityMovement from './components/CommunityMovement';
import SEOHead from './components/SEOHead';
import Footer from './components/Footer';
import FloatingNavigation from './components/FloatingNavigation';
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

function App() {
  const homeSEO = getSEOConfig('home');
  
  return (
    <Routes>
      {/* Home Page */}
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
            <section id="hero">
              <Hero />
            </section>
            <section id="testimonials">
              <InfluencerTestimonial />
            </section>
            <section id="comparison">
              <ComparisonTable />
            </section>
            <section id="pricing">
              <GetStartedCTA />
            </section>
            <section id="reviews">
              <CustomerReviews />
            </section>
            <section id="research">
              <ResearchEvidence />
            </section>
            <section id="benefits">
              <BenefitCopy />
            </section>
            <section id="faq">
              <FAQ />
            </section>
            <section id="community">
              <CommunityMovement />
            </section>
          </main>
          <Footer />
          <FloatingNavigation />
        </div>
      } />

      {/* Individual Pages */}
      <Route path="/inventory-integration" element={<InventoryIntegration />} />
      <Route path="/waste-logging-automation" element={<WasteLoggingAutomation />} />
      <Route path="/supplier-integration" element={<SupplierIntegration />} />
      <Route path="/ai-forecasting" element={<AIForecasting />} />
      <Route path="/compliance-automation" element={<ComplianceAutomation />} />
      <Route path="/wastewise-platform" element={<WasteWisePlatformPage />} />
      <Route path="/roi-calculator" element={<ROICalculator />} />
      <Route path="/industry-reports" element={<IndustryReports />} />
      <Route path="/implementation-guide" element={<ImplementationGuide />} />
      <Route path="/support-center" element={<SupportCenter />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/servora-development" element={<ServoraDevelopment />} />
    </Routes>
  );
}

export default App;