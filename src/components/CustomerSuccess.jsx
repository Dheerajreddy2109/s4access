import React from "react";
import "../css/Home.css";

const CustomerSuccess = ({ onViewMore, onReadMore }) => (
  <section className="Customer-success-stories-section">
    <div>
      <p className="big-heading-text-black">Customer success stories</p>
    </div>
    <div className="coustomer-success-container">
      <div className="innercoustomer-success-container-left">
        <div>
          <p className="sub-heading-text-white">SAP S/4</p>
          <p className="small-text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius in molestiae reprehenderit quos laudantium praesentium doloremque perferendis veritatis eos?
          </p>
        </div>
        <div>
          <a href="#" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
      </div>
      <div className="innercoustomer-success-container-left">
        <div>
          <p className="sub-heading-text-white">SAP S/4</p>
          <p className="small-text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius in molestiae reprehenderit quos laudantium praesentium doloremque perferendis veritatis eos?
          </p>
        </div>
        <div>
          <a href="#" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
      </div>
      <div className="innercoustomer-success-container-right">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">SAP S/4</p>
          <a href="#" className="read-more-btn" onClick={onViewMore}>
            View More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>
        <div className="inner-scroll-container">
          <div className="scroll-item">
            <p className="text-white">How we Made This..</p>
            <a href="#" className="read-more-btn" onClick={onReadMore}>
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">How we Made This..</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">How we Made This..</p>
            <a href="#" className="read-more-btn">
              Read More <i className="bi bi-arrow-right arrow-icon"></i>
            </a>
          </div>
          <div className="scroll-item">
            <p className="text-white">How we Made This..</p>
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
