import React, { useState, useEffect } from 'react';
// import './HomeSlider.css';
import banner1 from '../assets/images/home-img/home-bgimg.png';
import banner2 from '../assets/images/home-img/banner-home/1.jpg';
import banner3 from '../assets/images/home-img/banner-home/2.jpg';
import banner4 from '../assets/images/home-img/banner-home/3.jpg';
import { Link } from 'react-router-dom'; // For SmoothLink (assuming it's a wrapper for smooth scrolling)

// SmoothLink component for smooth scrolling (if not already defined)
const SmoothLink = ({ to, className, children }) => (
  <Link
    to={to}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    {children}
  </Link>
);

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      text: 'Leading SAP Access Management Specialist',
    },
    {
      image: banner2,
      text: 'Leading SAP Access Management Specialist',
    },
    {
      image: banner3,
      text: 'Leading SAP Access Management Specialist',
    },
    {
      image: banner4,
      text: 'Leading SAP Access Management Specialist',
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Slide changes every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);



  return (
    <section className="carousel-section">
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="slide-content">
                <p>{slide.text}</p>
                <a href="/" className="slide-button">
                  <span>Learn More</span>
                  <span>
                    <i className="bi bi-arrow-up"></i>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={currentSlide === index ? 'active' : ''}
            >
              Slide {index + 1}
            </button>
          ))}
        </div>
      </div>
      <SmoothLink to="#go-down-section" className="go-down-arrow">
        <svg
          id="fi_7242819"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m13.766 289.234a47 47 0 0 1 66.468-66.468l175.766 175.766 175.766-175.766a47 47 0 0 1 66.468 66.468l-209 209a47 47 0 0 1 -66.468 0zm209 0a47 47 0 0 0 66.468 0l209-209a47 47 0 0 0 -66.468-66.468l-175.766 175.766-175.766-175.766a47 47 0 0 0 -66.468 66.468z"></path>
        </svg>
      </SmoothLink>
    </section>
  );
};

export default HomeSlider;