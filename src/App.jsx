import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solution from './pages/Solution';
import Product from './pages/Product';
import Demand from './pages/Demand';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import Career from './pages/Career';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/product" element={<Product />} />
        <Route path="/demand" element={<Demand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
