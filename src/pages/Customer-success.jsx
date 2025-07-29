import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/App.css';

function CustomerSuccess() {
  return (
    <div>
      <Header />
      <section className="careers-hero-section">
             <div className="careers-hero-left-content">
               <p className="big-heading-text-white">
                 Welcome message
     
               </p>
               <p className="text-white">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     
               </p>
     
     
                <a href="/" className="main-button-blue">
               <span>EXPLORE ALL ROLES CTA </span>
               <span>
                 <i className="bi bi-arrow-up"></i>
               </span>
             </a>
               </div>
     
     
     
                <div className="careers-hero-right-content">
            
               </div>
     
           </section>
      <Footer />
    </div>
  );
}

export default CustomerSuccess;