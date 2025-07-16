import Header from '../components/Header.jsx';
import React from 'react';
import Footer from '../components/Footer.jsx';
import '../css/About.css';
import star from '../assets/images/home-img/star-black.png'
import team1 from '../assets/images/About-img/our-team/teammate-1.jpg'
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';
import mapimg from '../assets/images/About-img/googlemap.png'

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

  <div>
    <p className="big-heading-text-white">
      Specialist in SAP<br /> access management
    </p>
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

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

        <img src={team1} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>lorem ipsum</p>
          <p className='team-ceo-text'>Ceo</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="/" className="text-black">
        +358 40 558 9069

        </a>
        <br />
        <a href="/" className="text-black">
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

          <p className='team-name-text'>lorem ipsum</p>
          <p className='team-ceo-text'>Ceo</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="/" className="text-black">
        +358 40 558 9069

        </a>
        <br />
        <a href="/" className="text-black">
        matti.halonen@s4access.com

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

        <img src={team1} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>lorem ipsum</p>
          <p className='team-ceo-text'>Ceo</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="/" className="text-black">
        +358 40 558 9069

        </a>
        <br />
        <a href="/" className="text-black">
        matti.halonen@s4access.com

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

        <img src={team1} alt="" />


        <div className="our-team-names">

          <p className='team-name-text'>lorem ipsum</p>
          <p className='team-ceo-text'>Ceo</p>



        </div>




      </div>
      <div className="ourteam-container-contacts">


        <a href="/" className="text-black">
        +358 40 558 9069

        </a>
        <br />
        <a href="/" className="text-black">
        matti.halonen@s4access.com

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

    <div className="about-contact-us-dark-inner-container">
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

+358 40 558 9069
matti.halonen@s4access.com

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

+358 40 558 9069
matti.halonen@s4access.com
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
    Official <br /> Address
    
  </p>
  <p className="text-black">

    <p>Käsityöläiskatu 23</p>
          <p>06100 Porvoo</p>
          <p>Finland</p>

    
  </p>
  
</div>
<div className="about-map-centainer-right">
<img src={mapimg} alt="" />
</div>
</section>
{/* about-map-section-End */}






      <Footer />
    </div>
  );
}

export default About;