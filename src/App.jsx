import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CopMapPage from './pages/Products/CopMapPage';

import Services from './pages/Services';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollButton/ScrollToTopButton';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
          <div className="min-h-screen w-full bg-white overflow-x-hidden">
            <ScrollToTop />
            
            <Navbar />

            <main className="pt-14 sm:pt-16 w-full">

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/copmap" element={<CopMapPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
              </Routes>
            </main>
            <ScrollToTopButton />
            <Footer />
            <CookieBanner />
          </div>
        </Router>
    </HelmetProvider>
  );
}

export default App;
