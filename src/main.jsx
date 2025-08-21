import { StrictMode } from 'react';
import LenisProvider from './components/LenisProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CustomerSuccess from './pages/Customer-success.jsx';
import Insights from './pages/Insights.jsx';
import Services from './pages/Services.jsx';
import Careers from './pages/Careers.jsx';
import Lenis from '@studio-freight/lenis';
import S4AccessArchitectureDesign from './pages/S4AccessArchitectureDesign.jsx';
import S4AccessProjects from './pages/S4AccessProjects.jsx';
import SAPAccessSecurityConsulting from './pages/SAPAccessSecurityConsulting.jsx';
import SAPAccessManagementService from './pages/SAPAccessManagementService.jsx';
import SAPAuthorisationConceptOwnerService from './pages/SAPAuthorisationConceptOwnerService.jsx';
import SAPAccessReview from './pages/SAPAccessReview.jsx';
import SAPLicenseCompliance from './pages/SAPLicenseCompliance.jsx';
import SAPAuthorisationConceptDesign from './pages/SAPAuthorisationConceptDesign.jsx';
import SAPSoDManagement from './pages/SAPSoDManagement.jsx';
import S4FFEmergencyUserAutomation from './pages/S4FFEmergencyUserAutomation.jsx';
import SAPGRCAccessControlServices from './pages/SAPGRCAccessControlServices.jsx';
import SAPAuthorisationRedesign from './pages/SAPAuthorisationRedesign.jsx';
import ScrollToTop from '../src/components/ScrollToTop.jsx';

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
    <LenisProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer-success" element={<CustomerSuccess />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/s4accessarchitecturedesign" element={<S4AccessArchitectureDesign />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/s4accessprojects" element={<S4AccessProjects />} />
          <Route path="/sapaccesssecurityconsulting" element={<SAPAccessSecurityConsulting />} />
          <Route path="/sapaccessmanagementservice" element={<SAPAccessManagementService />} />
          <Route path="/sapauthorisationconceptownerservice" element={<SAPAuthorisationConceptOwnerService />} />
          <Route path="/sapaccessreview" element={<SAPAccessReview />} />
          <Route path="/saplicensecompliance" element={<SAPLicenseCompliance />} />
          <Route path="/sapauthorisationconceptdesign" element={<SAPAuthorisationConceptDesign />} />
          <Route path="/sapsodmanagement" element={<SAPSoDManagement />} />
          <Route path="/s4ffemergencyuserautomation" element={<S4FFEmergencyUserAutomation />} />
          <Route path="/sapgrcaccesscontrolservices" element={<SAPGRCAccessControlServices />} />
          <Route path="/sapauthorisationredesign" element={<SAPAuthorisationRedesign />} />
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>
);