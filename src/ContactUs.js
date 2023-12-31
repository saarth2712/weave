import React from 'react';
import './ContactUs.css';
import logo from './Weave_Logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <div className="contact-us">
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
            <div className="line1"> </div>
            <div className="cta">
                <p> We are just a message away. </p>
            </div>
            <div className='bod'>
                <div className='contact-details'>
                    <p> We can provide further case studies upon request. In case you are reaching out because of a project, 
                        please provide some information on your goals and we will move the conversation on from there.</p>
                    <p> Contact Details: <br/><span> (+91) 7021092215 / (+91) 99990 32419 </span> </p>
                    <p> Email:<br/> <span> weave.ink@gmail.com </span></p>
                    <div className="social-icons">
                        <a href="https://twitter.com/weave_ink" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/weaveink" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className='footy'>
                    <label> Weave </label>
                    <p> Kalyani Nagar, Pune <br/> (+91) 7021092215 / (+91) 9999032419  <br/> weave.ink@gmail.com </p>
                    <p> &copy; {new Date().getFullYear()} Weave </p>
                    <div className="social-icons">
                    <a href="https://twitter.com/weave_ink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/weaveink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                    </a>
                    </div>
                </div>
                <div className = 'nav'>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/contact-us">Contact Us</a>
                </div>
            </div>    
        </div>
    )
}

export default ContactUs;