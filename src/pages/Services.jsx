import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Services.css"

function Services() {
  return (
    <div>
      <Header />



      {/* services-page-hero-banner start */}
      <section className="services-page-hero-banner">

        <div className="services-hero-left">
           <p className="big-heading-text-white">
     Services designed to solve <br />
SAP access management challenges
    </p>
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
          
        </div>

        <div className="services-hero-right">

        </div>

      </section>
      {/* services-page-hero-banner End */}
      
      <Footer />
    </div>
  );
}

export default Services;