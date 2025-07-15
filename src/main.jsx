import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CustomerSuccess from './pages/Customer-success.jsx';
import Insights from './pages/Insights.jsx';
import Services from './pages/Services.jsx';
import Lenis from '@studio-freight/lenis';

console.log('Main.jsx loaded'); // Test log

// Initialize Lenis globally
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
window.lenis = lenis; // Make Lenis accessible globally
console.log('Lenis initialized:', lenis); // Debug log

// Animation frame loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer-success" element={<CustomerSuccess />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);