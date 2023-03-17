import React from 'react';
import './style.css';
import Footer from "../../components/Footer";

function Contact() {

    return (
        <div>
            <div className='main-para'>
                <p className="contact-header">Contact us</p>
                <p className="para">xxxxxxxx
                </p>
            </div>

            <div className='contact-buttons'>
                <a href="#"> <button className='buttons' type="button"> GitHub</button></a>
            </div>
            <Footer />
        </div>

    )
}

export default Contact;