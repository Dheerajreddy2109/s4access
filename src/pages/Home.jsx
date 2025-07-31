import { useEffect, useState } from "react";
import { useContext } from "react";
import { LenisContext } from "../components/LenisContext";
import Popup from '../components/popup/Popup.jsx';
import SmoothLink from '../components/SmoothLink';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomerSuccess from "../components/CustomerSuccess.jsx";
import '../css/Home.css';
import banner1 from '../assets/images/home-img/home-bgimg.jpg';

function Home() {
  const lenis = useContext(LenisContext);




  // Popup handlers
  const handleReadMoreClick = (e) => {
    e.preventDefault();
    setPopupContent({
      image: banner1,
      // category: 'SAP S/4',
      title: 'S4 Transition analysis',
      description: 'A senior consultant analysed the authorization setup of the customers SAP system and familiarised himself with the upgrade project plan, scope, timeline and organization. Also discussions were held with key stakeholders to analyse the customer targets in the best way. The work was carried out in a month by the senior consultant and the deliverable was a power point presentation and a resource plan for the transition to S4.',
      image2: banner1,
      title2: 'Achievements/benefits',
      description2: 'The customer understood the impact of the different decisions they had taken earlier and what work would be involved in the transition project itself. They were able to resource the program in an optimal way and prepare for the work in a timely manner. Without the analysis there would have been key areas left out that would have caused disruptions in the transition itself as well there would have been unnecessary work done.',
      image3: banner1,
      title3: 'Customer comment',
      description3: 'We learned so much in this small work that resulted in clear savings in the program itself but as well in much higher quality in the implementation. We got a good thorough analysis of the system and could prepare better hence.'
    });
    // Open the popup
    setPopupOpen(true);
    if (lenis && typeof lenis.stop === 'function') {
      lenis.stop();
    }
  };
  const handleReadMoreClickTwo = (e) => {
    e.preventDefault();
    setPopupContent({
      image: banner1,
      title: 'Scandinavian Forest & Paper company',
      description: 'S4access team performed a comprehensive review on all three main levels of SAP access management: Governance, Processes and Technical review. Working methods consisted of interviews, system analysis and data analysis using S4access proprietary SAP Access analytics platform.',
      image2: banner1,
      title2: 'Achievements and Benefits',
      description2: 'A broad review revealed several issues and their root causes. A prioritized improvement plan was created to fix the key problems and take external audit findings into account.',
      image3: banner1,
      title3: 'Customer comment',
      description3: 'The customer appreciated the thoroughness and clarity of the review, which helped them address audit findings and improve their SAP access management processes.'
    });
    // Open the popup
    setPopupOpen(true);
    if (lenis && typeof lenis.stop === 'function') {
      lenis.stop();
    }
  };













  const [currentSlide, setCurrentSlide] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const slides = [
    {
      image: banner1,
      text: "Leading SAP Access Management Specialist",
    },
    {
       image: banner1,
      text: "Leading SAP Access Management Specialist",
    },
    {
      image: banner1,
      text: "Leading SAP Access Management Specialist",
    },
    {
       image: banner1,
      text: "Leading SAP Access Management Specialist",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <Header />
      {/* carousle section start */}
      <section className="carousel-section">
        <div className="carousel">
          <div
            className="carousel-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="slide-content">
                  <p>{slide.text}</p>
                  <a href="/" className="slide-button">
                    <span>Learn More </span>
                    <span>
                      <i className="bi bi-arrow-up"></i>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-buttons">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={currentSlide === index ? "active" : ""}
              >
                Slide {index + 1}
              </button>
            ))}
          </div>
        </div>
        <SmoothLink to="#go-down-section" className="go-down-arrow">
          <svg
            id="fi_7242819"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
          >
            <path d="m13.766 289.234a47 47 0 0 1 66.468-66.468l175.766 175.766 175.766-175.766a47 47 0 0 1 66.468 66.468l-209 209a47 47 0 0 1 -66.468 0zm209 0a47 47 0 0 0 66.468 0l209-209a47 47 0 0 0 -66.468-66.468l-175.766 175.766-175.766-175.766a47 47 0 0 0 -66.468 66.468z"></path>
          </svg>
        </SmoothLink>
      </section>
      {/* carousle section End */}

      {/* our-highlightupper section start */}
      <section className="our-highlightupper" id="go-down-section">
        <p className="text-black">
          A new era of SAP access security has begun. Combining over two decades
          of experience with passion for adopting latest technology we deliver
          new services and solutions to simplify your SAP access management
          challenges.
        </p>
        <a href="/" className="main-button-blue">
          <span>Learn More </span>
          <span>
            <i className="bi bi-arrow-up"></i>
          </span>
        </a>
      </section>
      {/* our-highlightupper section end */}

      {/* Our Highlights section start*/}
      <section className="our-hightlights-section">
        <div className="hightlight-tittle-container">
          <p className="big-heading-text-black">
            Our <br /> Highlights
          </p>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">Access Risk Analysis</p>
            <p className="big-number-text-black">~150</p>
          </div>

          <div>
            <p className="text-black">
We perform ~150 risk evaluations <br /> annually, proactively addressing <br /> security vulnerabilities.
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">Experience Level</p>
            <p className="big-number-text-black">13+</p>
          </div>

          <div>
            <p className="text-black">
             Our team’s 13+ years of average <br /> experience tackles complex security <br />challenges effectively.
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">Team Diversity</p>
            <p className="big-number-text-black">5</p>
          </div>

          <div>
            <p className="text-black">
            Representing 5 nationalities, our diverse <br /> team enhances problem-solving and <br /> global strategies.
            </p>
          </div>
        </div>
      </section>
      {/* Our Highlights section End */}



      

      {/* services section start */}

      <section className="services-section">
        <div>
          <p className="big-heading-text-white">Services</p>
        </div>

        <div className="sevice-container">
          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">S/4 Access architecture design</p>
              <p className="small-text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius in molestiae reprehenderit quos laudantium praesentium
                doloremque perferendis veritatis eos?
              </p>
            </div>

            <div>
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>


          

          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">S/4 Access projects <br /><br /></p>
      
              <p className="small-text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius in molestiae reprehenderit quos laudantium praesentium
                doloremque perferendis veritatis eos?
              </p>
            </div>

            <div>
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>

          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP access / security consulting</p>
              <p className="small-text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius in molestiae reprehenderit quos laudantium praesentium
                doloremque perferendis veritatis eos?
              </p>
            </div>

            <div>
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>



          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP Authorisation concept owner service</p>
              <p className="small-text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius in molestiae reprehenderit quos laudantium praesentium
                doloremque perferendis veritatis eos?
              </p>
            </div>

            <div>
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>

          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP / Emergency user automation</p>
              <p className="small-text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius in molestiae reprehenderit quos laudantium praesentium
                doloremque perferendis veritatis eos?
              </p>
            </div>

            <div>
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="inner-services-btn">
          <a href="#" className="button-green">
            <span>View All</span>
            <span>
              <i className="bi bi-arrow-up"></i>
            </span>
          </a>
        </div>
      </section>

      {/* services section End */}




      {/* Customer success stories section start */}
      <CustomerSuccess onReadMore={handleReadMoreClick} onReadMoretwo={handleReadMoreClickTwo} />
      {/* Customer success stories section End */}





      {/* image-cta start */}
      <section className="image-cta-section">
        <div className="first-container-image-cta">
          <p className="sub-heading-text-white">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat minus debitis soluta aliquam velit ullam, minima cupiditate enim! Voluptates!

          </p>
        </div>

        <a href="/" className="border-button">
          <span>Learn More </span>
          <span>
            <i className="bi bi-arrow-up"></i>
          </span>
        </a>
      </section>
      {/* image-cta End */}





      {/* news and blogs section start  */}
      <section className="news-blogs-section">
        <div className=" heading-news-blog">
          <p className="big-heading-text-black">News & Blogs</p>

          <a href="#" className="read-more-btn-blue">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
        </div>

        <div className="news-blogs-container">
          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="news-blogs-container">
          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="inner-news-blogs-container">
            <div className="blog-text">
              <p className="text-black">NEWS</p>
              <p className="sub-big-heading-text-black">
                Future of Access <br /> Management
              </p>
            </div>

            <div className="image-hover-text-come">
              <div className="inner-text-come">
                <div>
                  <p className="sub-heading-text-black">SAP S/4</p>
                  <p className="small-text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore eius in molestiae reprehenderit quos laudantium
                    praesentium doloremque perferendis veritatis eos?
                  </p>
                </div>

                <a href="#" className="read-more-btn-blue">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news and blogs section End */}




{/* last-cta-section start */}

      <section className="last-cta-section">
        <div className="inner-end-inner-cta-left">
          <p className="big-heading-text-black">
Find out more
          </p>


          <p className="text-black">
            Contact us and reset your password to SAP security!

          </p>

        </div>



         <a href="/" className="main-button-blue">
          <span>Contact Us </span>
          <span>
            <i className="bi bi-arrow-up"></i>
          </span>
        </a>


      </section>

{/* last-cta-section End  */}
      <Footer />
      <Popup
        open={popupOpen}
        image={popupContent.image}
        category={popupContent.category}
        title={popupContent.title}
        description={popupContent.description}
        image2={popupContent.image2}
        description2={popupContent.description2}
        image3={popupContent.image3}
        description3={popupContent.description3}
        onClose={() => {
          setPopupOpen(false);
          if (lenis && typeof lenis.start === 'function') {
            lenis.start();
          }
        }}
      />
    </div>
  );
}

export default Home;
