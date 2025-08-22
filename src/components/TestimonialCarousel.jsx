import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Testimonial.css";
import testimonialImg from "../assets/images/Careeres-img/testimmonial-1.jpg";
import team1 from '../assets/images/About-img/our-team/Bozhena.jpg'
import team2 from '../assets/images/About-img/our-team/Julius.jpg'
import team3 from '../assets/images/About-img/our-team/Palavi.jpg'
// import team2 from '../assets/images/About-img/our-team/teammate-2.jpg.webp';
// import team3 from '../assets/images/About-img/our-team/teammate-3.jpg.webp';
// import team4 from '../assets/images/About-img/our-team/teammate-4.jpg.webp';
import quoteImg from "../assets/images/Careeres-img/Union.png";

const testimonials = [
{
    "text": "Moving to Finland to join s4access as an SAP Security Consultant was a fantastic decision. I work on diverse global projects that challenge me daily, and the supportive team makes learning seamless. The flexibility here allows me to balance work and life perfectly, creating an ideal environment for growth.",
    "name": "Bozhena",
    "role": "Employee",
    "Images": team1
  },
  {
    "text": "Since joining s4access in Finland, my role as an SAP Security Consultant has been incredibly rewarding. The global projects keep me engaged, and the collaborative team is always ready to assist. I value the work-life balance and the chance to grow in a dynamic, supportive workplace.",
    "name": "Raoul",
    "role": "Employee",
    "Images": testimonialImg
  },
  {
    "text": "Starting at s4access as an SAP Security Consultant has been a highlight of my career. Working on international projects fuels my growth, and the team’s encouragement makes every challenge enjoyable. The flexibility and supportive culture here make it a truly unique workplace.",
    "name": "Julius",
    "role": "Employee",
    "Images": team2
  },
  {
    "text": "As an Employee of s4access, I’m proud to lead a team where SAP Security Consultants thrive on global projects. The collaborative environment fosters innovation and learning, while our focus on flexibility ensures everyone can grow professionally while enjoying life in Finland.",
    "name": "Pallavi",
    "role": "Employee",
    "Images": team3
  }
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
              <img src={testimonial.Images} alt="Employee" />
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