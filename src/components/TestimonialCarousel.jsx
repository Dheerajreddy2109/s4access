import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Testimonial.css";
import testimonialImg from "../assets/images/Careeres-img/testimmonial-1.jpg";
import quoteImg from "../assets/images/Careeres-img/Union.png";

const testimonials = [
  {
    text: `“A few months ago, I moved to Finland and started my journey at s4access as an SAP Security Consultant. Since then, it has been an amazing journey – I work on global projects, learn new things every day, and feel truly supported. The team here is incredible, people always ready to help. I enjoy the flexibility, the balance between work and life, and the opportunity to grow in many directions. It’s the most comfortable work environment I’ve ever had.”`,
    name: "Bozhena",
    role: "Role",
  },
  {
    text: `“A few months ago, I moved to Finland and started my journey at s4access as an SAP Security Consultant. Since then, it has been an amazing journey – I work on global projects, learn new things every day, and feel truly supported. The team here is incredible, people always ready to help. I enjoy the flexibility, the balance between work and life, and the opportunity to grow in many directions. It’s the most comfortable work environment I’ve ever had.”`,
    name: "Raoul",
    role: "CEO",
  },
  {
    text: `“A few months ago, I moved to Finland and started my journey at s4access as an SAP Security Consultant. Since then, it has been an amazing journey – I work on global projects, learn new things every day, and feel truly supported. The team here is incredible, people always ready to help. I enjoy the flexibility, the balance between work and life, and the opportunity to grow in many directions. It’s the most comfortable work environment I’ve ever had.”`,
    name: "Raoul",
    role: "CEO",
  },
];

const TestimonialCarousel = () => (
  <section className="testimonial-section">
    <p className="big-heading-text-black ">Employee testimonials</p>
    <Swiper
      slidesPerView={1.5}
      spaceBetween={32}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      style={{ paddingBottom: "40px" }}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <div className="testimonial-card">
            <div className="testimonial-img-container">
              <img src={testimonialImg} alt="Employee" />
            </div>
            <div className="testimonial-content">
              <img src={quoteImg} alt="Quote" className="testimonial-quote-img" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-meta">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default TestimonialCarousel;