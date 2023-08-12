import React from "react";
import logo from './Weave_Logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Services.css';


const Services = () => {

    return(
        <div className="services">
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
            <div className="line1"></div>
            <div className= "slogan">
                <p> We offer custom content writing solutions tailored to your specific goals, needs and preferences. </p>
            </div>
            <div className='formats'>
                <div className='forma'>
                    <label> Blogs </label>
                    <p> Well researched, engaging, and search engine optimized blog posts that drive traffic to your site and convert visitors.  </p>
                </div>
                <div className='forma'>
                    <label> Advertising </label>
                    <p> Captivating advertising copies that engage, persuade, and leave a lasting impact on the target audience.
                    </p>
                </div>
                <div className='forma'>
                    <label> Web Pages </label>
                    <p> It’s not only your landing pages that need great copy. Give all pages the care they deserve.
                    </p>
                </div>
                <div className='forma'>
                    <label> Product Writing </label>
                    <p> Accurate product reviews and descriptions which improve conversion rates. 
                    </p>
                </div>
                <div className='forma'>
                    <label> Newsletter </label>
                    <p> Engaging newsletters to promote sales and drive traffic to your website.
                    </p>
                </div>
                <div className='forma'>
                    <label> Speech Writing </label>
                    <p> Impactful speeches curated specially to capture the speaker’s voice and resonate with the audience. 
                    </p>
                </div>
            </div>
            <div className="line1"> </div>
            <div className="cta">
                <p> Interested in our service but got questions? Don’t worry, we prepared a few answers.</p>
            </div>
            <div className="faq-section">
                <div className="faq">
                    <div className="question"> What happens after I contact you? </div>
                    <div className="answer"> You’ll get a response in 1-2 business days. We'll ask you for more details about the 
                    project and most likely schedule a call to iron out all the details. </div>
                </div>
                <div className="faq">
                    <div className="question"> How will our collaboration look like? </div>
                    <div className="answer"> We’ll start by setting up a plan and timeline that works for both of us. 
                    We’ll send you the work in increments that you can approve or request edits for. </div>
                </div>
                <div className="faq">
                    <div className="question"> What if I'm not satisfied with the content? </div>
                    <div className="answer"> Client satisfaction is of utmost importance to us. That is why we offer 3 rounds of edits to make necessary adjustments based on your feedback. 
                </div>
                </div>
                <div className="faq">
                    <div className="question"> Are you open to a longer contract? </div>
                    <div className="answer"> Definitely. we love one-off projects, but we're all for building meaningful partnerships, 
                    so we are open to retainer contracts. </div>
                </div>
            </div>
            <div className="line1"> </div>
            <div className="cta">
                <p> Want to work together? Drop us a message and we will get back to you in no time. </p>
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
    )
}

export default Services;