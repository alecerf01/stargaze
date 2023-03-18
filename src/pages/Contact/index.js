import React from 'react';
import './style.css';
import Footer from "../../components/Footer";

function Contact() {

    return (
        <>
            <div className='contact-container'>
                <div className='main-para'>
                    <p className="contact-header">Contact us</p>
                    <p className="para">You can check our repo for
                        <span>
                            <img src="/logo-black.svg" height="20" className="d-inline-block align-top" alt="stargaze logo" />
                        </span> below</p>
                </div>

                <div className='contact-buttons'>
                    <a target='_blank' href="https://github.com/alecerf01/stargaze"> <button className='buttons' type="button"> GitHub</button></a>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact;