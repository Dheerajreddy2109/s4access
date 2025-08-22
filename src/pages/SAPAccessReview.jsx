import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";
import image from "../assets/images/About-img/Top-banner-img.jpg";

export default function SAPAccessReview() {



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
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="big-heading-text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-white">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita repellendus, earum quia nobis hic, nesciunt nisi omnis iste ea dolores quas voluptates necessitatibus distinctio recusandae laboriosam fugiat assumenda in.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img src={image} alt="cloud compliance" />
          </div>
        </div>
      </section>

      <section className="service-cards-container">
        <h2 className="big-heading-text-black">Lorem ipsum dolor </h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem ipsum dolor</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem ipsum dolor</h3>
              <p className="text-black">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit cumque earum. Voluptatum, cumque! Autem?
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum dolor.</h3>
              <p className="text-black">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus vitae eos non recusandae inventore culpa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="big-heading-text-white">Lorem ipsum dolor sit amet.</h2>
          <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum pariatur soluta quae laudantium laboriosam, dolorum totam.
          </p>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <p className="small-text-black">⭐ 4.7 (Rating)</p>
            <p className="text-black">
              The compliance tools made it easy to stay on top of regulations
              without overwhelming our team.
            </p>
            <h3 className="sub-heading-text-black">Sarah L.</h3>
            <p className="text-black">Compliance Officer, DataSafe</p>


            <div className="image-container-showcase">
              {/* <img src={image} alt="testimonial" /> */}
            </div>
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">ComplyTrend</h3>
            <h4 className="text-black">50% faster compliance audits</h4>
            <p className="text-black">
              Streamlined processes reduce audit times and improve accuracy.
            </p>

           <div className="image-container-showcase">
              {/* <img src={image} alt="testimonial" /> */}
            </div>
          </div>
        </div>
      </section>


      <section className="strength-bottom">
        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black ">30,000+</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">Compliance checks completed</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black ">200M+</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">Regulated data points secured</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black ">4.8</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">Client satisfaction rating</li>
            </ul>
          </div>
        </div>
      </section>









     {/* FAQs section start */}
      <FAQTemplate title="FAQs" faqs={faqs} />
      {/* FAQs section end */}











      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-images">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
          </div>
          <div className="cta-contents">
            <h1 className=" extra-big-heading-text-white ">Lorem ipsum dolor sit amet.</h1>
            <p className="text-white ">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, vero.
            </p>
          </div>
          <div className="cta-buttons">
            <Link to="/Contact" className="button-green">
              Get Started
            </Link>
            <Link to="/Contact" className="border-button ">
              Watch Demo  <span>
            <i className="bi bi-arrow-up"></i>
          </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
