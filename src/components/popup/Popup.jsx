import React, { useEffect } from "react";
import "../../css/Popup.css";


const Popup = ({
  open,
  onClose,
  image = '',
  category = '',
  title = '',
  description = '',
  image2 = '',
  image3 = '',
  description2 = '',
  description3 = '',
  title2 = '',
  title3 = ''
}) => {
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

          {image2 && (
              <img src={image2} alt="Popup banner" className="popup-image-down" />
            )}
          {title2 && (
            <h2 className="sub-heading-text-black ">{title2}</h2>
          )}
          {description2 && (
            <p className="text-black">{description2}</p>
          )}
          {image3 && (
              <img src={image3} alt="Popup banner" className="popup-image-down" />
            )}
          {title3 && (
            <h2 className="sub-heading-text-black ">{title3}</h2>
          )}
          {description3 && (
            <p className="text-black">{description3}</p>
          )}
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
