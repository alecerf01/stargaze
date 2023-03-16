import React, { useState, useEffect }from 'react'
import HeroSection from '../../components/HeroSection';
import './style.css';
import axios from 'axios';


function Homepage() {
  return (
    <div className='bckg'>
      {/* <input type='text' onChange={e => setStarSearch(e.target.value)}></input> */}
      {/* <button onClick={e => searchStar(e)}>Search</button> */}
      <HeroSection />
    </div>
  )
}

export default Homepage