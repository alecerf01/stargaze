import React from 'react';
import './style.css';
import Footer from "../../components/Footer";

function Contact() {

    return (
        <div className='contact-container'>
            <div className='main-para'>
                <p className="contact-header">Contact us</p>
                <p className="para">You can check our GitHub repo below</p>
            </div>

            <div className='contact-buttons'>
                <a  target='_blank' href="https://github.com/alecerf01/stargaze"> <button className='buttons' type="button"> GitHub</button></a>
            </div>
            <Footer />
        </div>

    )
}

export default Contact;