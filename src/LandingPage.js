import React from 'react';
import './LandingPage.css';
import logo from './Weave_Logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  const niches = ['Education', 'Marketing', 'Beauty', 'E-commerce', 'Health', 'Fitness'];


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
        <div className='caption'> Your Thoughts, Our Pen. <br /> 
        Never write a word again with Weave! </div>
      </div>
      <div className='body'>
        <div className='about-us'>
          <div className='section'>
            <label> Introduction </label>
            <p> We are a small team of seasoned content and copywriters. A smaller team means higher attention to detail, better communication, and efficient management. </p>
          </div>
          <div className='section'>
            <label> Experience </label>
            <p>We work with service and product-based companies to deliver high-quality written work which voices your brand personality and meets all your professional needs.
              <br/><button onClick={goToServices}> SEE WHAT WE OFFER </button>
            </p>
          </div>
        </div>
        <div className='pow'>
          <div className='sec'>
            <label>Our Clients</label>
            <p style={{ marginTop: '-5px' }}> <span> Nurture (June 2023— Present)</span> <br/> Content & Copywriting </p>
            <p> <span> Kamakhya (July 2023 - Present)</span><br/>Content writing </p>
            <p> <span>Fyre (February 2023 - June 2023)</span> <br/> Content, UX, Caption writing </p>
          </div>
          <div className='sec'>
            <label>Niches We Write For</label>
            <div className='nich-list'>
            {niches.map(niche => (
              <div className='nich' key={niche}>
                {niche}
              </div>
            ))}
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
      <div className='liked'>
        <div className='solid-line'> &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500; </div>
        <p>Like our portfolio? Want to work together? <br/> Drop us a message and we will get back to you in no time.</p>
        <button onClick={goToServices}> GET IN TOUCH TODAY </button>
      </div>
      <div className="footer">
        <div className='footy'>
            <label> Weave </label>
            <p> Kalyani Nagar, Pune | +91702092215/9999032419 | weave.ink@gmail.com </p>
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
