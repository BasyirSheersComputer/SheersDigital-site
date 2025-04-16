import React from 'react';
import { useEffect } from 'react';
import TopCTAStrip from './components/TopCTAStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeResources from './components/FreeResources';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const startTime = Date.now();
    let clickCount = 0;

    const countClick = () => {
      clickCount++;
    };

    window.addEventListener('click', countClick);

    const sendTrackingData = () => {
      const endTime = Date.now();
      const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

      fetch('http://localhost:3001/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ip_address: '', // will use server IP if needed later
          page_url: window.location.href,
          time_spent_seconds: timeSpentSeconds,
          click_count: clickCount
        })
      }).catch(console.error);
    };

    window.addEventListener('beforeunload', sendTrackingData);

    return () => {
      window.removeEventListener('click', countClick);
      window.removeEventListener('beforeunload', sendTrackingData);
    };
  }, []);
  
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