import React from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaCogs, FaUserShield, FaUsersCog, FaUserTie, FaClipboardCheck, FaIdBadge, FaDraftingCompass, FaBalanceScale, FaUserSecret, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import "../css/Header.css";

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

const MegaMenu = ({ show }) => (
  <div className={`megamenu${show ? " show" : ""}`}>
    <div className="megamenu-content">
      <p className="megamenu-title">Our Services</p>
      <ul className="megamenu-list">
        {services.map((service, idx) => (
          <li key={idx} className="megamenu-list-item">
            <span className="megamenu-icon">{service.icon}</span>
            <Link to={service.link}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MegaMenu;
