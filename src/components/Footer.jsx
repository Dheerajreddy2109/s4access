import { Link } from "react-router-dom";
import mainlogo from "../assets/images/Mainlogo.png";
import '../css/Footer.css';
import '../css/Header.css';

function Footer() {
  return (
    <footer>
      <div className="left-logo-container-footer">
        <img src={mainlogo} alt="S4access Logo" />
        <p className="text-white">
          A new era of SAP access security has begun. Combining over two decades
          of experience with passion for adopting latest technology we deliver
          new services and solutions to simplify your SAP access management
          challenges.
        </p>
      </div>

      <div className="quicklinks-footer">
        <p className="sub-heading-text-white">Quick Links</p>

        <ul className="footer-nav">
          <li>
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
        
          <li>
            <Link to="/services" className="footer-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/customer-success" className="footer-link">
              Customer Success
            </Link>
          </li>
          <li>
            <Link to="/insights" className="footer-link">
              Insights
            </Link>
          </li>
          <li>
            <Link to="/careers" className="footer-link">
              Careers
            </Link>
          </li>

            <li>
            <Link to="/about" className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="contact-details">
        <p className="sub-heading-text-white">Contact Information</p>

        <div className="info-contact-inner">
          <a href="tel:+358 40 558 9869">
            <span><svg id="fi_17486479" enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m97.4972763 82.1141434c.0027695 8.7985001-7.3660278 15.8329773-16.1520081 15.3636627-17.9030838-.9563217-37.4408378-9.7243195-53.2625522-25.5465851-15.8331375-15.8237877-24.603457-35.3706779-25.5578964-53.2793598-.4681449-8.7840672 6.5623119-16.1518612 15.3588455-16.1518612h9.9519863c2.4168205 0 3.8527546 2.0451765 4.400322 4.4003186l4.3269119 18.7974339c.5525246 2.4003391-.18293 4.9152927-1.9416771 6.6397419l-4.5546856 4.4658546c-3.2576084 3.1940765-3.7772274 8.2572289-1.233017 12.0441971 2.8479004 4.2390022 6.217371 8.3523521 10.0855618 12.2275314 3.8692322 3.8692284 7.9856758 7.2397728 12.2282028 10.0881691 3.7870102 2.5425644 8.8487968 2.022644 12.0422516-1.2343292l4.4671249-4.5559845c1.7244492-1.7587471 4.2394028-2.4941978 6.63974-1.9416733l18.7974396 4.3269119c2.3551407.5475616 4.4003143 1.9827957 4.4003143 4.4003143z" fill-rule="evenodd"></path></svg></span><span>
              +358 40 558 9869
            </span>

          </a>


          
          <a href="mailto:">
            <span><svg id="fi_16935745" enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m45.7953949 57.5565643-43.1575694-31.3894138c-.0835295.0425339-.0542982.0276489-.1378276.0701828v47.5c0 5.2467041 4.2532949 9.5 9.5 9.5h76c5.2467041 0 9.5-4.2532959 9.5-9.5v-47.6137638c-.0153503-.0078182-.0099869-.0050869-.0253372-.012907l-43.2689913 31.4473705c-2.5074387 1.8223762-5.9034691 1.821785-8.4102745-.0014687z"></path><path d="m54.205761 45.826828 38.328907-27.8734989c-1.3426667-.7346668-2.8880005-1.1906662-4.534668-1.1906662h-76c-1.6466665 0-3.166667.4560013-4.534667 1.1906662l38.328906 27.8734989c2.5073853 1.8234177 5.9041367 1.8234177 8.411522 0z"></path></svg></span><span>
              +358 40 558 9869
            </span>

          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
