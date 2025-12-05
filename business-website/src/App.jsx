<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solution = lazy(() => import('./pages/Solution'));
const Product = lazy(() => import('./pages/Product'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Support = lazy(() => import('./pages/Support'));
const Career = lazy(() => import('./pages/Career'));

// Loading component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--bg-primary)',
    color: 'var(--neon-cyan)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(0, 255, 255, 0.3)',
      borderTopColor: 'var(--neon-cyan)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/product" element={<Product />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Suspense>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solution from './pages/Solution';
import Product from './pages/Product';
import Demand from './pages/Demand';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/career" element={<Career />} />
      </Routes>
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
    </Router>
  );
}

export default App;
