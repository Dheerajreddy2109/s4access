import Header from '../components/Header.jsx';
import React from 'react';
import Footer from '../components/Footer.jsx';
import '../css/About.css';
import star from '../assets/images/home-img/star-black.png'
import team1 from '../assets/images/About-img/our-team/teammate-1.jpg.webp'
import team2 from '../assets/images/About-img/our-team/teammate-2.jpg.webp';
import team3 from '../assets/images/About-img/our-team/teammate-3.jpg.webp';
import team4 from '../assets/images/About-img/our-team/teammate-4.jpg.webp';
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';
import Topbanner from '../assets/images/About-img/Top-banner-img.jpg';
// import mapimg from '../assets/images/About-img/googlemap.png'

function About() {


  const [color1, setColor1] = React.useState('white');
  const [color2, setColor2] = React.useState('white');
  const [color3, setColor3] = React.useState('white');
  const [color4, setColor4] = React.useState('white');

  return (
    <div>
      <Header />
      
{/* banner section start */}
<section className="about-banner-section">

  <div className="about-banner-content-left">
    <p className="big-heading-text-white">
      Specialist in SAP<br /> access management
    </p><br />
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

  </div>

  <div className="about-banner-content-right">
    <img src={Topbanner} alt="" srcset="" />
  </div>

</section>

{/* banner section End */}





{/* about-image-section start */}

<section className="about-image-section">

</section>

{/* about-image-section End */}






{/* about-who-we-are-section start */}


<section className="about-who-we-are-section">

  <div className="who-we-are-left-container">
    <span>
      <img src={star} alt="" />
      <p className="text-black">
        Who We Are
      </p>

    </span>
  </div>




  <div className="who-we-are-right-container">

    <p className="extra-big-heading-text-black">
      “Your password to SAP security”
    </p>
    <br /><br />
    <p className="text-black">
      Working in the field of SAP security has never been more interesting and challenging as it is today. Organisations are entering the new era of SAP solutions and at the same time the requirements for solid SAP access security are increasing.
      <br />
      <br />

We believe that this new era demands a new approach, new thinking and new solutions. Together with our partners and customers we will deliver on this promise for better SAP access security. Combining our long experience in the field with one of the largest SAP security experts practice in EMEA we are ready. Are you ?
    </p>

    </div>


</section>





{/* about-who-we-are-section End  */}









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






{/* Our Team section start */}


<section className="our-team-section">
  <p className="big-heading-text-black">
    Our Team 
  </p>



  <div className="inner-about-out-team">



    <div
     className="about-team-container"
      onMouseEnter={() => setColor1('#40FFC9')}
          onMouseLeave={() => setColor1('white')}
        >
      
      <div className="our-team-img-container">


        
        <div className="ourteam-logo">
               <WholeWebsiteIcon color={color1} />
        
        </div>

        <img src={team3} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>Matti Halonen</p>
          <p className='team-ceo-text'>Managing director
</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="tel:+358405589069" className="text-black">
        +358 40 558 9069

        </a>
        <br />
        <a href="mailto:matti.halonen@s4access.com" className="text-black">
        matti.halonen@s4access.com

        </a>

      </div>

    </div>




<div
     className="about-team-container"
      onMouseEnter={() => setColor2('#40FFC9')}
          onMouseLeave={() => setColor2('white')}
        >
      
      <div className="our-team-img-container">


        
        <div className="ourteam-logo">
               <WholeWebsiteIcon color={color2} />
        
        </div>

        <img src={team1} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>Christa Coulter</p>
          <p className='team-ceo-text'>Director, Sap security architect
</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="tel:+358405532204" className="text-black">
        +358 40 553 2204

        </a>
        <br />
        <a href="mailto:christa.coulter@s4access.com" className="text-black">
        christa.coulter@s4access.com

        </a>

      </div>

    </div>





<div
     className="about-team-container"
      onMouseEnter={() => setColor3('#40FFC9')}
          onMouseLeave={() => setColor3('white')}
        >
      
      <div className="our-team-img-container">


        
        <div className="ourteam-logo">
               <WholeWebsiteIcon color={color3} />
        
        </div>

        <img src={team2} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>Heli Kokkala</p>
          <p className='team-ceo-text'>Director, Head of Services</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="tel:+358404823589" className="text-black">
        +358 40 482 3589

        </a>
        <br />
        <a href="mailto:heli.kokkala@s4access.com" className="text-black">
        heli.kokkala@s4access.com

        </a>

      </div>

    </div>





<div
     className="about-team-container"
      onMouseEnter={() => setColor4('#40FFC9')}
          onMouseLeave={() => setColor4('white')}
        >
      
      <div className="our-team-img-container">


        
        <div className="ourteam-logo">
               <WholeWebsiteIcon color={color4} />
        
        </div>

        <img src={team4} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>Sameer Hawaldar</p>
          <p className='team-ceo-text'>Director, Head of projects
</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="tel:+358405807659" className="text-black">
        +358 40 580 7659

        </a>
        <br />
        <a href="mailto:sameer.hawaldar@s4access.com" className="text-black">
       sameer.hawaldar@s4access.com

        </a>

      </div>

    </div>







  </div>
</section>

{/* Our Team section End */}







{/* about-contact-us-section  light color start */}
<section className="about-contact-us-section">
  <p className="big-heading-text-white">
Contact us and reset your<br></br> password to SAP security !
</p>
<p className="text-white">
  We’re here to help with all your SAP security needs. Whether you're a client, partner,<br /> vendor, or potential team member, here's how to reach the right person
</p>

</section>

{/* about-contact-us-section light color End */}






{/* about-contact-us-dark-section start */}

<section className='about-contact-us-dark-section'>

  <div className="about-contact-us-dark-container">

    <div className="about-contact-us-dark-inner-container" style={{  borderLeft: 'none'}}>
      <div className="about-contact-us-dark-inner-top-container">
           <p className="big-heading-text-white">
            Partnerships & Services

      </p>

      </div>


      <div className="about-contact-us-dark-inner-bottom-container">
           <p className="small-text-white ">

            Interested in our services or our partnership with GRC Nordic?

            <br />
            <br />

Reach out to <strong>Matti Halonen</strong> at <br /><br />

  <a href="tel:+358405589069"> +358 40 558 9069</a><br />
  <a href="mailto:matti.halonen@s4access.com">matti.halonen@s4access.com</a>

      </p>

      </div>
   
      

    </div>


    <div className="about-contact-us-dark-inner-container">
      <div className="about-contact-us-dark-inner-top-container">
           <p className="big-heading-text-white">
            Careers<br /><br />

      </p>

      </div>


      <div className="about-contact-us-dark-inner-bottom-container">
           <p className="small-text-white ">

           Want to join the leading community of SAP security professionals?
           <br /><br />

Reach out to <strong>Christa Coulter</strong>  at <br /><br />

 <a href="tel:+358405532204">+358 40 553 2204</a><br />
 <a href="mailto:christa.coulter@s4access.com">christa.coulter@s4access.com</a>
      </p>

      </div>
   
      

    </div>







    <div className="about-contact-us-dark-inner-container">
      <div className="about-contact-us-dark-inner-top-container">
           <p className="big-heading-text-white">
            Administration<br /><br />

      </p>

      </div>


      <div className="about-contact-us-dark-inner-bottom-container">
           <p className="small-text-white ">

           For general administrative inquiries

Reach out to us at <strong><a href='mailto:contact@s4access.com'>contact@s4access.com</a> </strong>


      </p>

      </div>
   
      

    </div>





    <div className="about-contact-us-dark-inner-container">
      <div className="about-contact-us-dark-inner-top-container">
           <p className="big-heading-text-white">
            Vendors <br /><br />

      </p>

      </div>


      <div className="about-contact-us-dark-inner-bottom-container">
           <p className="small-text-white ">

            Please note: We do not accept unsolicited calls from vendors.

All inquiries must be submitted via email: <strong><a href='mailto:contact@s4access.com'>contact@s4access.com</a> </strong>

      </p>

      </div>
   
      

    </div>


  </div>

</section>
{/* about-contact-us-dark-section End */}








{/* about-map-section-start */}
<section className="about-map-section">

<div className="about-map-centainer-left">

  <p className="big-heading-text-black">
    Office located in Helsinki.
    
  </p>
  <a href='https://www.google.com/maps/place/K%C3%A4sity%C3%B6l%C3%A4iskatu+23,+06100+Porvoo,+Finland/@60.3665,25.6632,17z/data=!3m1!4b1!4m6!3m5!1s0x4691a5c5c5c5c5c5:0x5c5c5c5c5c5c5c5!8m2!3d60.3665!4d25.6632!16s%2Fg%2F11c1t1t1t1' className="text-black">

    <span>Käsityöläiskatu 23</span>
          <span>06100 Porvoo </span> 

          <span>Finland</span>

  </a>
</div>
{/* <div className="about-map-centainer-right">
<img src={mapimg} alt="" />
</div> */}
</section>
{/* about-map-section-End */}






      <Footer />
    </div>
  );
}

export default About;