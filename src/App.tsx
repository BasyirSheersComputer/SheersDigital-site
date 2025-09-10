import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import QuickWinServices from './components/QuickWinServices';
import WasteWisePlatform from './components/WasteWisePlatform';
import SEOHead from './components/SEOHead';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
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
          <Hero />
          <PainPoints />
          <QuickWinServices />
          <WasteWisePlatform />
          <Benefits />
          <Testimonials />
          <CallToAction />
          <Footer />
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
    </Routes>
  );
}

export default App;