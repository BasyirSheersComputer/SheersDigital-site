import React, { useState } from 'react';
import TopCTAStrip from './components/TopCTAStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeResources from './components/FreeResources';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PartnerPage from './components/PartnerPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'partner':
        return <PartnerPage />;
      case 'about':
        return <AboutPage />;
      case 'careers':
        return <CareersPage />;
      default:
        return (
          <>
            <Hero />
            <FreeResources />
            <FAQ />
            <Founder />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TopCTAStrip />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;