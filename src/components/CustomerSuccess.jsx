import React from "react";
import "../css/Home.css";

const CustomerSuccess = ({ onReadMore, onReadMoretwo }) => (
  <section className="Customer-success-stories-section">
    <div>
      <p className="big-heading-text-black">Customer success stories</p>
    </div>
    <div className="coustomer-success-container">
      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">S4 Transition analysis  <br /><br /></p>
          <p className="small-text-white">
            A multinational material handling solutions company was preparing for their S4-upgrade project. They needed to plan ahead for the Fiori introduction as well as the authorization work in a setup where the aim was to perform a technical upgrade and only implement some new mandatory features.
          </p>
        </div>
        <div>
          <a href="#" className="read-more-btn" onClick={onReadMore}>
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
      </div>
      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">Scandinavian Forest & Paper company</p>
          <p className="small-text-white">
            Customer began implementing SAP S/4 with a large international service integrator. An external audit identified basic SAP access management issues, raising top management concerns. s4access was hired to conduct a detailed review to assess the severity and propose actionable solutions.
          </p>
        </div>
        <div>
          <a href="#" className="read-more-btn" onClick={onReadMoretwo}>
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
      </div>
      <div className="innercoustomer-success-container-right">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">Coming Soon...</p>
        </div>
        <div className="inner-scroll-container">
          <div className="scroll-item">
            <p className="text-white">Coming Soon...</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">Coming Soon...</p>
            <a href="#" className="read-more-btn" >
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">Coming Soon...</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">Coming Soon...</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">Coming Soon...</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerSuccess;
