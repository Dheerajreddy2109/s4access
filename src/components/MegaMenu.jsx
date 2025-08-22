import React, { useRef } from "react";
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
  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    setShow(true);
  };
  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setShow(false), 200);
  };
  return (
    <div
      className={`megamenu${show ? " show" : ""} megamenu-fullwidth`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="megamenu-content megamenu-flex">
        {/* Left: Title at bottom */}
        {/* <div className="megamenu-title-container">
          <p className="megamenu-title megamenu-title-large">
            Our Services
            <span className="megamenu-arrow">
              <FaArrowRight />
            </span>
          </p>
        </div> */}
        {/* Right: Services grid */}
        <div className="megamenu-services-grid">
          {services.map((category, idx) => (
            <div key={idx} className="megamenu-category">
              <h3 className="megamenu-category-title">{category.category}</h3>
              <div className="megamenu-row">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="megamenu-list-item megamenu-grid-item">
                    <span className="megamenu-icon megamenu-icon-large">{item.icon}</span>
                    <Link to={item.link} className="megamenu-link">{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;