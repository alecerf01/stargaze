import React from 'react';
import './style.css';
import Footer from "../../components/Footer";

function Contact() {

    return (
        <>
            <div className='contact-container'>
                <div className='main-para'>
                    <p className="contact-header">Contact us</p>
                    <p className="para">You can check our repo for &nbsp;&nbsp;
                        <span>
                            <img src="/logo-black.svg" height="20" className="d-inline-block align-top" alt="stargaze logo" />
                        </span> &nbsp;below</p>
                </div>

                <div className='github-btn'>
                    <a target='_blank' href="https://github.com/alecerf01/stargaze"> <button className='buttons' type="button"> GitHub Repo</button></a>
                </div>

                <div className='contact-buttons'>
                    <a target='_blank' href="#"> <button className='buttons' type="button"> Alex</button></a>
                    <a target='_blank' href="#"> <button className='buttons' type="button"> Maggie</button></a>
                    <a target='_blank' href="#"> <button className='buttons' type="button"> Ryan</button></a>
                </div>

            </div>
        </>
    )
}

export default Contact;