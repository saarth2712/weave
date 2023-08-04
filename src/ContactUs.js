import React from 'react';
import './ContactUs.css';
import logo from './Weave_Logo2.png';
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
                <a href="/contact">Contact Us</a>
                </div>
            </div>
            <div className="line"> </div>
            <div className="cta">
                <p> Let’s work together, we are just a message away. </p>
            </div>
            <div className='bod'>
                <div className='contact-details'>
                    <p> We can provide further case studies upon request. In case you’re reaching out because of a project, 
                        please provide some information on your goals and we’ll move the conversation on from there.</p>
                    <p> Contact Details: <br/><span> (+91) 7021092215 / (+91) 99990 32419 </span> </p>
                    <p> Email:<br/> <span> weave.ink@gmail.com </span></p>
                    <div className="social-icons">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                    </div>
                </div>
                <div className='details-form'>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="15" required></textarea>
                        </div>
                        <button type="submit">Submit Inquiry</button>
                    </form>
                </div>
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
    )
}

export default ContactUs;