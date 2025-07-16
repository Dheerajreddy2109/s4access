// import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Services.css"
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';
import ServiceSection from '../components/ServiceSection.jsx';
import FAQTemplate from '../components/FAQTemplate.jsx';


function Services() {

  const faqs = [
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 1 goes here. You can customize this content for each page.'
    },
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 2 goes here. You can customize this content for each page.'
    },
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 3 goes here. You can customize this content for each page.'
    }
  ];



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

          {/* <WholeWebsiteIcon color={"red"}  /> */}

        </div>

      </section>


      {/* services-page-hero-banner End */}
















{/* ServiceSection section start */}
<ServiceSection />
      
{/* ServiceSection section End */}








   {/* image-cta start */}
      <section className="image-cta-section">
        <div className="first-container-image-cta">
          <p className="sub-heading-text-white">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat minus debitis soluta aliquam velit ullam, minima cupiditate enim! Voluptates!

          </p>
        </div>

        <a href="/" className="button-green ">
          <span>Learn More </span>
          <span>
            <i className="bi bi-arrow-up"></i>
          </span>
        </a>
      </section>
      {/* image-cta End */}


      

      {/* Partners and alliances section start */}
      <section className="partners-section">
        <div className="partners-container">
          <p className="big-heading-text-black">Partners and alliances</p>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <div className="partners-logos-row">
            <div className="partner-logo-item">
              <WholeWebsiteIcon color="#003366" size={70} />
              <p className="text-black">Logo 1</p>
            </div>
            <div className="partner-logo-item">
              <WholeWebsiteIcon color="#2fffd8" size={70} />
              <p className="text-black">Logo 2</p>
            </div>
            <div className="partner-logo-item">
              <WholeWebsiteIcon color="#333a3d" size={70} />
              <p className="text-black">Logo 3</p>
            </div>
            <div className="partner-logo-item">
              <WholeWebsiteIcon color="#003366" size={70} />
              <p className="text-black">Logo 4</p>
            </div>
            <div className="partner-logo-item">
              <WholeWebsiteIcon color="#003366" size={70} />
              <p className="text-black">Logo 2</p>
            </div>
          </div>
        
      </section>
      {/* Partners and alliances section end */}

      {/* FAQs section start */}
      <FAQTemplate title="FAQs" faqs={faqs} />
      {/* FAQs section end */}

      <Footer />
    </div>
  );
}

export default Services;