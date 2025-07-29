import React from "react";
import careersBanner from "../assets/images/Careeres-img/carees-banner-1.jpg";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Careers.css";

const Careers = () => {
  return (
    <>
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
         <img src={careersBanner} alt="Careers" />
          </div>

      </section>








      {/* careers-management-section start */}
      <section className="careers-management-section">
        <div className="careers-management-content">
          <h2 className="big-heading-text-black">Why is SAP access management 
an attractive career choice?</h2>
          <p className="text-black">
            SAP is one of the most widely used ERP systems in the world, and access management is a critical part of its operation. There is strong and global demand.
            <br /><br />
            
            As organizations increasingly prioritize data protection and regulatory compliance, the growing importance of security and compliance has made SAP Access Management a critical area of focus. It plays a central role in managing user access, safeguarding sensitive information, and ensuring that only the right individuals have access to the right data. This makes the role of an SAP Access Management not only technically vital but also strategically important for modern businesses.
            <br /><br />
The role offers opportunities to grow technically, in business understanding, in project work and client interaction. SAP Access Management has been a significant business for nearly 30 years and can be a long-term career in the future.
          </p>
        
        </div>

      </section>
      {/* careers-management-section End */}
     
      <Footer />
    </>
  );
};

export default Careers;
