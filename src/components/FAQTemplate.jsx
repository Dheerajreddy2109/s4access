import React, { useState } from "react";
import "../css/Header.css";
import "../css/Services.css";

const FAQTemplate = ({ title = "FAQs", faqs = [] }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <section className="faq-section">
      <h2 className="big-heading-text-black" style={{ marginBottom: 40 }}>{title}</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(idx)}>
              <span>{faq.question}</span>
              <span className="faq-arrow">
                {openIndexes.includes(idx) ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14l5-5 5 5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </button>
            <div
              className="faq-answer"
              style={{ display: openIndexes.includes(idx) ? "block" : "none" }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQTemplate;
