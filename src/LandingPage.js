import React from 'react';
import './LandingPage.css';
import logo from './Weave_Logo2.jpg';
import banner from './Weave_Intro.png';
import banner2 from './Weave_Exp.png';
import fyre from './FYRE (6).jpg';
import nurture from './Nurture_Final.jpg';
import aire from './Aire_Final_Logo.jpg';
import kamakhya from './Kamakhya.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services');
  };


  return (
    <div className="landing-page">
      <div className="header">
        <div className="logo-container">
          <img src = {logo} alt="Weave Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div> 
      </div>
      <div className='banner'>
        <div className='caption'> Your thoughts, our pen. <br /> 
        Never write a word again with Weave! </div>
      </div>
      <div className='body'>
        <div className='about-us'>
          <div className='se1'>
            <img src={banner} alt='egami' className='ban'></img>
            <div className='section'>
              <label> Introduction </label>
              <p> We are a small team of seasoned content and copywriters. A smaller team means higher attention to detail, better communication, and efficient management. </p>
            </div>
          </div>
          <div className='se2'>
            <img src={banner2} alt='egami' className='ban2'></img>
            <div className='section2'>
              <label> Experience </label>
              <p>We work with service and product-based companies to deliver high-quality written work which voices your brand personality and meets all your professional needs.
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
      <div className='line'/>
      <div className='liked'>
        <p>Like our portfolio? Want to work together? <br/> Drop us a message and we will get back to you in no time.</p>
        <button onClick={goToServices}> GET IN TOUCH TODAY </button>
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
          <a href="/contact">Contact Us</a>
        </div>
      </div>    
    </div>
  );
};

export default LandingPage;
