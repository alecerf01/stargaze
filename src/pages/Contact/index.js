import React from 'react';
import './index.css';
import R3fDemo from '../../components/threeFiber';

function Contact() {

    return (
        <>
            <div className='contact-container'>
            <div className='threeD'>
          <R3fDemo ></R3fDemo>
        </div>
                <div className='main-para'>
                    <h1 className="contact-header">Contact us</h1>
                    <p className="para">You can check our repo for &nbsp;&nbsp;
                        <span>
                            <img src="/logo.svg" height="20" className="d-inline-block align-top" alt="stargaze logo" />
                        </span> &nbsp;below</p>
                </div>

                <div className='github-btn'>
                    <a target='_blank' href="https://github.com/alecerf01/stargaze"> <button className='buttons' type="button"> GitHub Repo</button></a>
                </div>

                <div className='contact-buttons'>
                    <a target='_blank' href="https://github.com/alecerf01"> <button className='buttons' type="button"> Alex</button></a>
                    <a target='_blank' href="https://github.com/Marzena-W"> <button className='buttons' type="button"> Maggie</button></a>
                    <a target='_blank' href="https://github.com/ryanpauldutton"> <button className='buttons' type="button"> Ryan</button></a>
                </div>

            </div>
        </>
    )
}

export default Contact;