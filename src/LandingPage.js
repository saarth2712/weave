import React from 'react';
import './LandingPage.css';
import logo from './Weave_Logo2.jpg';
import banner from './Weave_Intro.png';
import banner2 from './Weave_Exp.png';
import fyre from './FYRE (6).jpg';
import nurture from './Nurture_Final.jpg';
import aire from './Aire_Final_Logo.jpg';
import kamakhya from './WhatsApp Image 2023-08-12 at 3.43.00 PM.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services');
  };

  const goToContactUs = () =>{
    navigate('/contact-us')
  }


  return (
    <div className="landing-page">
      <div className="header">
        <div className="logo-container">
          <img src = {logo} alt="Weave Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact Us</a>
        </div> 
      </div>
      <div className='banner'>
        <div className='caption'> Your thoughts, our pen. <br /> 
        Weave your words with us! </div>
      </div>
      <div className='body'>
        <div className='about-us'>
          <div className='se1'>
            <img src={banner} alt='egami' className='ban'></img>
            <div className='section'>
              <label> Introduction </label>
              <p>  We craft compelling narratives that captivate, inform and engage your target audience. We use words to shape perspectives, inspire action, and transform businesses.  </p>
            </div>
          </div>
          <div className='se2'>
            <img src={banner2} alt='egami' className='ban2'></img>
            <div className='section2'>
              <label> Experience </label>
              <p> Our team consists of seasoned content writers from diverse backgrounds, ranging from marketing to lifestyle to beauty to healthcare. This ensures your content is created by experts who truly understand the industry. 
                <br/><button onClick={goToServices}> SEE WHAT WE OFFER </button>
              </p>
            </div>
          </div>
        </div>
        <div className='line'/>
        <div className='pow'>
          <label>Brands we work with</label>
          <div className='brands'>
            <div className='brand'>
              <div className='brand-container'>
              <img src= {fyre} alt='Fyre' className='bran'></img>
              </div>
            </div>
            <div className='brand'>
              <div className='brand-container'>
              <img src= {nurture} alt='Nurture' className='bran'></img>
            </div>
            </div>
            <div className='brand'>
              <div className='brand-container'>
              <img src= {aire} alt='Aire' className='bran' style={{ marginTop: '15%' }}></img>
              </div>
            </div>
            <div className='brand'>
              <div className='brand-container'>
              <img src= {kamakhya} alt='Kamakhya' className='bran'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonials'>
          <div className='quote'>
            " The advertising copies have increased our inbound inquiries by 30% " 
          </div>
          <div className='by'>
            — Tejal D, Head Educator at Nurture Special Education Center
          </div>
        </div>
      </div>
      <div className='line2'/>
      <div className='liked'>
        <p>Like our portfolio? Want to work together? <br/> Drop us a message and we will get back to you in no time.</p>
        <button onClick={goToContactUs}> GET IN TOUCH TODAY </button>
      </div>
      <div className="footer">
        <div className='footy'>
            <label> Weave </label>
            <p> Kalyani Nagar, Pune <br/> +91702092215/9999032419 <br/> weave.ink@gmail.com </p>
            <p> &copy; {new Date().getFullYear()} Weave </p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </div>
        </div>
        <div className = 'nav'>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>    
    </div>
  );
};

export default LandingPage;
