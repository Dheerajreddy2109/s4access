import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LenisProvider from './components/LenisProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import About from '../src/pages/About.jsx'
import Contact from './pages/Contact.jsx';
import CustomerSuccess from './pages/Customer-success.jsx';
import Insights from './pages/Insights.jsx';
import Services from './pages/Services.jsx';



createRoot(document.getElementById('root')).render(
<StrictMode>
    <LenisProvider>
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
    </LenisProvider>
  </StrictMode>
)