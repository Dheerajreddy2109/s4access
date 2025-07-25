import React, { useEffect } from "react";
import "../../css/Popup.css";


const Popup = ({ open, onClose, image, category, title, description }) => {
  // Prevent mouse wheel from scrolling the body when popup is open
  const handleWheel = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-container" onWheel={handleWheel}>
        <button className="popup-close" onClick={onClose} aria-label="Close popup"><i className="bi bi-x-lg"></i></button>

        <div className="popup-content">

          <div className="popup-image-container">
            {image && (
              <img src={image} alt="Popup banner" className="popup-image" />
            )}
          </div>
          <div
           className="popup-text-content"> 
          {category && (
            <p className="sub-heading-text-black">{category}</p>
          )}
          {title && (
            <h2 className="big-heading-text-black">{title}</h2>
          )}
          {description && (
            <p className="text-black">{description}</p>
          )}
          {/* Case study extra paragraph and image */}
          <div className="case-study-extra">
            <p className="text-black">
              This case study highlights the key challenges, solutions, and outcomes of our SAP S/4 implementation. Our team leveraged best practices and innovative approaches to deliver measurable results for our client.
            </p>
            <img src={image} alt="Case Study" className="case-study-image" style={{ width: '100%', marginTop: '16px', borderRadius: '8px' }} />
          </div>
          <div className="case-study-extra">
            <p className="text-black">
              This case study highlights the key challenges, solutions, and outcomes of our SAP S/4 implementation. Our team leveraged best practices and innovative approaches to deliver measurable results for our client.
            </p>
            <img src={image} alt="Case Study" className="case-study-image" style={{ width: '100%', marginTop: '16px', borderRadius: '8px' }} />
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
