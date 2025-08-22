import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaCogs, FaUserShield, FaUsersCog, FaUserTie, FaClipboardCheck, FaIdBadge, FaDraftingCompass, FaBalanceScale, FaUserSecret, FaShieldAlt, FaSyncAlt, FaArrowRight } from "react-icons/fa";
import "../css/Header.css";
import "../css/MegaMenu.css";

const services = [
  { category: "SAP Access Design", items: [
    { name: "SAP Access Management Review", icon: <FaClipboardCheck />, link: "/sapaccessreview" },
    { name: "SoD Approach", icon: <FaBalanceScale />, link: "/sapsodmanagement" },
    { name: "SAP Access automation", icon: <FaSyncAlt />, link: "/s4ffemergencyuserautomation" }
  ]},
  { category: "SAP Access Projects", items: [
    { name: "S/4 access implementation", icon: <FaCogs />, link: "/sapauthorisationredesign" },
    { name: "SoD / Role redesign", icon: <FaDraftingCompass />, link: "/sapauthorisationconceptdesign" },
    { name: "Reorganisation / M&A projects", icon: <FaProjectDiagram />, link: "/sapaccesssecurityconsulting" }
  ]},
  { category: "SAP Access Services", items: [
    { name: "Outsourced Access Management", icon: <FaUsersCog />, link: "/sapaccessmanagementservice" },
    { name: "Authorisation Concept Owner", icon: <FaUserTie />, link: "/sapauthorisationconceptownerservice" },
    { name: "Security Architect", icon: <FaUserShield />, link: "/sapgrcaccesscontrolservices" }
  ]},
  { category: "SAP Access Solutions", items: [
    { name: "SoD Management", icon: <FaBalanceScale />, link: "/sapsodmanagement" },
    { name: "FF Log review automation", icon: <FaUserSecret />, link: "/s4ffemergencyuserautomation" },
    { name: "SAP Licence optimisation", icon: <FaIdBadge />, link: "/saplicensecompliance" }
  ]}
];

const MegaMenu = ({ show, setShow }) => {
  const hideTimeout = useRef();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (index) => {
    clearTimeout(hideTimeout.current);
    setShow(true);
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setShow(false), 200);
    setHoveredCategory(null);
  };

  return (
    <div
      className={`megamenu${show ? " show" : ""}`}
      onMouseEnter={() => clearTimeout(hideTimeout.current)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="megamenu-content">
        {/* Left: Categories */}
        <div className="megamenu-categories-container">
          <p className="megamenu-title">categories</p>
          {services.map((category, idx) => (
            <div
              key={idx}
              className={`megamenu-category-item ${hoveredCategory === idx ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(idx)}
            >
              <span className="megamenu-category-icon">{category.category === "SAP Access Design" ? "" : category.category === "SAP Access Projects" ? "" : category.category === "SAP Access Services" ? "" : ""}</span>
              <span className="megamenu-category-text">{category.category}</span>
              <span className="megamenu-category-arrow">›</span>
            </div>
          ))}
        </div>
        {/* Right: Services grid */}
        <div className="megamenu-services-container">
          <p className="megamenu-title">Services</p>
          {services.map((category, idx) => (
            <div
              key={idx}
              className="megamenu-services-content"
              style={{ display: hoveredCategory === idx ? 'block' : 'none' }}
            >
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="megamenu-service-item">
                  <span className="megamenu-service-icon">{item.icon}</span>
                  <Link to={item.link} className="megamenu-service-text">{item.name}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;