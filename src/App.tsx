import React from 'react';
import TopCTAStrip from './components/TopCTAStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeResources from './components/FreeResources';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopCTAStrip />
      <Navbar />
      <Hero />
      <FreeResources />
      <FAQ />
      <Founder />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;