import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';


function Contact() {
  return (
    <div>
      <Header />

      <section className="contact-hero-section">
             
                <p className="big-heading-text-white">
                  Contact Us
      
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      
                </p>
      
      
        
          
      

      
            </section>
      
      
      <div className="contact-container">
      <div className="contact-content">
       
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
}

export default Contact;