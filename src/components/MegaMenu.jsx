import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaCogs, FaUserShield, FaUsersCog, FaUserTie, FaClipboardCheck, FaIdBadge, FaDraftingCompass, FaBalanceScale, FaUserSecret, FaShieldAlt, FaSyncAlt, FaArrowRight } from "react-icons/fa";
import "../css/Header.css";
import "../css/MegaMenu.css";

const services = [
  { name: "S/4 Access architecture design", icon: <FaProjectDiagram />, link: "/s4accessarchitecturedesign" },
  { name: "S/4 Access projects", icon: <FaCogs />, link: "/s4accessprojects" },
  { name: "SAP access / security consulting", icon: <FaUserShield />, link: "/sapaccesssecurityconsulting" },
  { name: "SAP Access management service", icon: <FaUsersCog />, link: "/sapaccessmanagementservice" },
  { name: "SAP Authorisation concept owner service", icon: <FaUserTie />, link: "/sapauthorisationconceptownerservice" },
  { name: "SAP Access review", icon: <FaClipboardCheck />, link: "/sapaccessreview" },
  { name: "SAP License compliance", icon: <FaIdBadge />, link: "/saplicensecompliance" },
  { name: "SAP Authorisation concept design", icon: <FaDraftingCompass />, link: "/sapauthorisationconceptdesign" },
  { name: "SAP SoD Management", icon: <FaBalanceScale />, link: "/sapsodmanagement" },
  { name: "S/4 FF / Emergency user automation", icon: <FaUserSecret />, link: "/s4ffemergencyuserautomation" },
  { name: "SAP GRC Access control services", icon: <FaShieldAlt />, link: "/sapgrcaccesscontrolservices" },
  { name: "SAP Authorisation redesign", icon: <FaSyncAlt />, link: "/sapauthorisationredesign" }
];

const MegaMenu = ({ show, setShow }) => {
  // Split services into 4 rows, 3 columns each
  const rows = [];
  for (let i = 0; i < 4; i++) {
    rows.push(services.slice(i * 3, i * 3 + 3));
  }
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
        <div className="megamenu-title-container">
          <p className="megamenu-title megamenu-title-large">
            Our Services
            <span className="megamenu-arrow">
              <FaArrowRight />
            </span>
          </p>
        </div>
        {/* Right: Services grid */}
        <div className="megamenu-services-grid">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className={`megamenu-row${rowIdx < 4 ? " megamenu-row-gap" : ""}`}>
              {row.map((service, colIdx) => (
                <div key={colIdx} className="megamenu-list-item megamenu-grid-item">
                  <span className="megamenu-icon megamenu-icon-large">{service.icon}</span>
                  <Link to={service.link} className="megamenu-link">{service.name}</Link>
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
