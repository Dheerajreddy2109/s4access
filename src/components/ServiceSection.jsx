import React, { useState, useRef } from 'react';
import SmoothLink from '../components/SmoothLink';

const services = [
  {
    category: "SAP Access Design",
    items: [
      { title: 'SAP Access Management Review', desc: 'Comprehensive review of access management processes.' },
      { title: 'SoD Approach', desc: 'Segregation of Duties strategy implementation.' },
      { title: 'SAP Access automation', desc: 'Automated solutions for access control.' }
    ]
  },
  {
    category: "SAP Access Projects",
    items: [
      { title: 'S/4 access implementation', desc: 'End-to-end S/4 access setup and configuration.' },
      { title: 'SoD / Role redesign', desc: 'Redesign of roles for better security compliance.' },
      { title: 'Reorganisation / M&A projects', desc: 'Support for reorganization and merger activities.' }
    ]
  },
  {
    category: "SAP Access Services",
    items: [
      { title: 'Outsourced Access Management', desc: 'Managed access services for outsourcing needs.' },
      { title: 'Authorisation Concept Owner', desc: 'Ownership of authorisation concepts.' },
      { title: 'Security Architect', desc: 'Expert architectural security solutions.' }
    ]
  },
  {
    category: "SAP Access Solutions",
    items: [
      { title: 'SoD Management', desc: 'Ongoing management of Segregation of Duties.' },
      { title: 'FF Log review automation', desc: 'Automated fire-fighter log reviews.' },
      { title: 'SAP Licence optimisation', desc: 'Optimisation of SAP licensing costs.' }
    ]
  }
];

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(0);
  const sectionRefs = useRef([]);

  const handleMouseEnter = (categoryIndex, itemIndex) => {
    setHoveredService(categoryIndex * 10 + itemIndex); // Unique index for each service
  };

  return (
    <div className='our-Service-Section'>
      <div className='our-Service-Section-left-container-sticky'>
        <p className='big-heading-text-black'>Our Services</p>
        <div className='our-Service-left-container-green'>
          {services.map((category, categoryIdx) => (
            <React.Fragment key={categoryIdx}>
              <p className='category-title' style={{ backgroundColor: '#000', color: '#fff', padding: '10px', margin: '10px 0' }}>
                {category.category}
              </p>
              {category.items.map((service, itemIdx) => (
                <SmoothLink
                  key={`${categoryIdx}-${itemIdx}`}
                  to={`#id-${categoryIdx}-${itemIdx}`}
                  className={`text-black ${hoveredService === (categoryIdx * 10 + itemIdx) ? 'active-link' : ''} scrolling-link-our-services`}
                  onMouseEnter={() => handleMouseEnter(categoryIdx, itemIdx)}
                  style={{
                    transition: 'color 0.5s',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                >
                  {service.title}
                </SmoothLink>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='our-Service-Section-right-container'>
        {services.map((category, categoryIdx) =>
          category.items.map((service, itemIdx) => (
            <div
              key={`${categoryIdx}-${itemIdx}`}
              ref={(el) => (sectionRefs.current[categoryIdx * 10 + itemIdx] = el)}
              id={`id-${categoryIdx}-${itemIdx}`}
              className='scrolling-container-our-services'
              style={{ display: hoveredService === (categoryIdx * 10 + itemIdx) ? 'block' : 'none' }}
            >
				<div className='scrolling-link-our-services-container'>
              <p className='sub-big-heading-text-black'>{service.title}</p>
              <p className='text-black'>{service.desc}</p>
              <a href='/' className='main-button-blue'>
                <span>Learn More </span>
                <span>
                  <i className='bi bi-arrow-up'></i>
                </span>
              </a>
			  </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceSection;