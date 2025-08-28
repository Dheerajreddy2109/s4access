import React from "react";
import careersBanner from "../assets/images/Careeres-img/carees-banner-1.jpg";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import "../css/Careers.css";
import CareersGallerySection from "../components/CareersGallerySection.jsx";


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
             We believe that great people build great companies. Whether you're just starting your career or looking to take the next big step, we offer opportunities to grow, innovate, and make a real impact. Explore our open roles and discover how you can be part of something meaningful. 
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




      {/* why s4access section start */}
      <section className="careers-why-s4access-section">
        <div className="careers-why-s4access-content">
          <h2 className="big-heading-text-white">Why <br />
            S4access?</h2>
          <p className="text-white">
            <strong style={{fontSize:"30px"}}>We are different</strong> <br /><br />

            At s4access, 'We are different' isn't just a slogan—it's a promise. Here, you might work remote but never alone with a challenge. Whether you're leading a major project or navigating a new role, there's always a colleague ready to support you. We believe in collaboration over competition, and we foster a culture where asking for help is a strength, not a weakness. This is how we grow together—and why our people stay and thrive.
            <br /><br /><br />
            <strong style={{fontSize:"30px"}}>We grow</strong>
            <br /><br />
            Growth brings opportunities for the staff to grow and develop.
          </p>
        </div>
      </section>
      {/* why s4access section End */}



      





      {/* careers Our promise to you section start */}

      <section className="careers-our-promise-section">
        <div className="careers-our-promise-content-left">
          <h2 className="big-heading-text-black">Our promise to you</h2>

        </div>
        <div className="careers-our-promise-content-right">

          <div className="careers-our-promise-content-right-inner">
            <strong><p className="text-black">
              01
            </p></strong>

            <p className="sub-big-heading-text-black-lite">
             Community and teamwork
            </p>

          </div>

          <div className="careers-our-promise-content-right-inner">
            <strong><p className="text-black">
              02
            </p></strong>

            <p className="sub-big-heading-text-black-lite">
             Professional excellence
            </p>

          </div>

          <div className="careers-our-promise-content-right-inner">
            <strong><p className="text-black">
              03
            </p></strong>

            <p className="sub-big-heading-text-black-lite">
             Freedom and responsibility
            </p>

          </div>

          <div className="careers-our-promise-content-right-inner">
            <strong><p className="text-black">
              04
            </p></strong>

            <p className="sub-big-heading-text-black-lite">
            Compensation with modern benefits and good <br /> occupational health care
            </p>

          </div>



        </div>
      </section>
      {/* careers Our promise to you section end */}

      {/* Testimonial section start */}

      <TestimonialCarousel />

      {/* Testimonial section End */}









{/* careers Open roles start */}
      <section className="careers-open-roles-section">
        <div className="careers-open-roles-header">
          <h2 className="big-heading-text-black">Open roles</h2>
          <a href="#" className="read-more-btn-blue ">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
        <div className="careers-open-roles-content">


         



           <div className="open-role-card">
            <div className="open-role-info">
              <h3 className="sub-big-heading-text-black">Role name</h3>
              <div className="sub-heading-text-black">
                <span>Department</span>
                <span className="open-role-divider">|</span>
                <span>Location</span>
                <span className="open-role-divider">|</span>
                <span>Experience level</span>
              </div>
            </div>
            <a href="/" className="main-button-blue ">
              ABOUT&nbsp;US&nbsp;<i className="bi bi-arrow-up-right"></i>
            </a>
          </div>




           <div className="open-role-card">
            <div className="open-role-info">
              <h3 className="sub-big-heading-text-black">Role name</h3>
              <div className="sub-heading-text-black">
                <span>Department</span>
                <span className="open-role-divider">|</span>
                <span>Location</span>
                <span className="open-role-divider">|</span>
                <span>Experience level</span>
              </div>
            </div>
            <a href="/" className="main-button-blue ">
              ABOUT&nbsp;US&nbsp;<i className="bi bi-arrow-up-right"></i>
            </a>
          </div>




           <div className="open-role-card">
            <div className="open-role-info">
              <h3 className="sub-big-heading-text-black">Role name</h3>
              <div className="sub-heading-text-black">
                <span>Department</span>
                <span className="open-role-divider">|</span>
                <span>Location</span>
                <span className="open-role-divider">|</span>
                <span>Experience level</span>
              </div>
            </div>
            <a href="/" className="main-button-blue ">
              ABOUT&nbsp;US&nbsp;<i className="bi bi-arrow-up-right"></i>
            </a>
          </div>




           <div className="open-role-card">
            <div className="open-role-info">
              <h3 className="sub-big-heading-text-black">Role name</h3>
              <div className="sub-heading-text-black">
                <span>Department</span>
                <span className="open-role-divider">|</span>
                <span>Location</span>
                <span className="open-role-divider">|</span>
                <span>Experience level</span>
              </div>
            </div>
            <a href="/" className="main-button-blue ">
              ABOUT&nbsp;US&nbsp;<i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
          
        </div>
      </section>
{/* careers Open roles End */}





{/* Careers Gallery Section Start */}
<section className="careers-gallery-section">

<h2 className="big-heading-text-black">Life at S4Access</h2>


<CareersGallerySection/>


</section>
{/* Careers Gallery Section End */}







      <Footer />
    </>
  );
};

export default Careers;
