import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import HeroSection from '../../components/HeroSection';
import Wrapper from "../../components/Wrapper";
import R3fDemo from '../../components/threeFiber';
import './index.css';

function Favourite() {
  return (
    <div >
      

        <div className='threeD'>
          <R3fDemo ></R3fDemo>
        </div>

      

      <div className='fav-section'>
        <h1 className='header'>COMING SOON!</h1>
        {/* <Wrapper> */}
          {/* <Card />
          <Card />
          <Card /> */}
        {/* </Wrapper> */}
      </div>

    </div>

  )
}

export default Favourite