import { useEffect, useState } from "react";
import SmoothLink from '../components/SmoothLink';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../css/Home.css';
import banner1 from '../assets/images/home-img/home-bgimg.jpg'
// import ctaImg from '../assets/images/home-img/cta-bg.jpg'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
            <p className="small-text-black">Risks analyzed</p>
            <p className="big-number-text-black">000+</p>
          </div>

          <div>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus eius ad dolores, ipsa maxime eos
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">Risks analyzed</p>
            <p className="big-number-text-black">000+</p>
          </div>

          <div>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus eius ad dolores, ipsa maxime eos
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">Risks analyzed</p>
            <p className="big-number-text-black">000+</p>
          </div>

          <div>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus eius ad dolores, ipsa maxime eos
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
              <p className="sub-heading-text-white">SAP S/4</p>
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
              <p className="sub-heading-text-white">SAP S/4</p>
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
              <p className="sub-heading-text-white">SAP S/4</p>
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
              <p className="sub-heading-text-white">SAP S/4</p>
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
              <p className="sub-heading-text-white">SAP S/4</p>
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
      <section className="Customer-success-stories-section">
        <div>
          <p className="big-heading-text-black">Customer success stories</p>
        </div>

        <div className="coustomer-success-container">
          <div className="innercoustomer-success-container-left">
            <div>
              <p className="sub-heading-text-white">SAP S/4</p>
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

          <div className="innercoustomer-success-container-left">
            <div>
              <p className="sub-heading-text-white">SAP S/4</p>
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

          <div className="innercoustomer-success-container-right">
            <div className="innercoustomer-heading-cont">
              <p className="sub-heading-text-white">SAP S/4</p>
               <a href="#" className="read-more-btn">
                  View More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
            </div>

            <div className="inner-scroll-container">
              <div className="scroll-item">
                <p className="text-white">How we Made This..</p>

                <a href="#" className="read-more-btn">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
              <div className="scroll-item">
                <p className="text-white">How we Made This..</p>

                <a href="#" className="read-more-btn">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
              <div className="scroll-item">
                <p className="text-white">How we Made This..</p>

                <a href="#" className="read-more-btn">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
              <div className="scroll-item">
                <p className="text-white">How we Made This..</p>

                <a href="#" className="read-more-btn">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default Home;
