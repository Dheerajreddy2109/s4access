import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import '../css/Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactCompany: '',
    contactSubject: '',
    contactMessage: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
  const result = await emailjs.send(
    'service_51oe5u6',  // Replace with your Service ID from Step 2 (e.g., 'service_abc123')
    'template_k1szbpq', // Replace with your Template ID from Step 3 (e.g., 'template_def456')
    formData,           // This passes your form data to the template placeholders
    'SvF2Dsw7xViR60Kq_'   // Replace with your Public Key from Step 1
  );
  
  console.log('Email sent successfully:', result.text);
  setSubmitStatus('success');
  setFormData({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactCompany: '',
    contactSubject: '',
    contactMessage: '',
  });
} catch (error) {
  console.error('Submission error:', error.text);
  setSubmitStatus('error');
} finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="contact-form-group">
          <label htmlFor="contact-name" className="contact-label">
            Full Name *
          </label>
          <input
            type="text"
            name="contactName"
            id="contact-name"
            value={formData.contactName}
            onChange={handleChange}
            className="contact-input"
            placeholder="Enter your full name"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="contact-email" className="contact-label">
            Email Address *
          </label>
          <input
            type="email"
            name="contactEmail"
            id="contact-email"
            value={formData.contactEmail}
            onChange={handleChange}
            className="contact-input"
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="contact-form-group">
          <label htmlFor="contact-phone" className="contact-label">
            Phone Number
          </label>
          <input
            type="tel"
            name="contactPhone"
            id="contact-phone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="contact-input"
            placeholder="+1 (555) 000-0000"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="contact-company" className="contact-label">
            Company Name
          </label>
          <input
            type="text"
            name="contactCompany"
            id="contact-company"
            value={formData.contactCompany}
            onChange={handleChange}
            className="contact-input"
            placeholder="Your company name"
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="contact-form-group">
        <label htmlFor="contact-subject" className="contact-label">
          Subject *
        </label>
        <input
          type="text"
          name="contactSubject"
          id="contact-subject"
          value={formData.contactSubject}
          onChange={handleChange}
          className="contact-input"
          placeholder="What is this regarding?"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="contact-form-group">
        <label htmlFor="contact-message" className="contact-label">
          Message *
        </label>
        <textarea
          name="contactMessage"
          id="contact-message"
          value={formData.contactMessage}
          onChange={handleChange}
          className="contact-textarea"
          rows="5"
          placeholder="Please provide details about your inquiry..."
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <div className="contact-form-group">
        <button 
          type="submit" 
          className={`contact-submit-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
      
      {submitStatus === 'success' && (
        <div className="status-message success">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 10L9.5 12L12.5 7.5M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Your message has been sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="status-message error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;