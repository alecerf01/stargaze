import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import HeroSection from '../../components/HeroSection';
import Wrapper from "../../components/Wrapper";
import R3fDemo from '../../components/threeFiber';
import './index.css';

function Favourite() {
  return (
    <div>
      <div className='header-sec'>
        <div className='hero-sec'>
          <HeroSection />
          <Search />
        </div>

        <div className='threeD'>
          <R3fDemo ></R3fDemo>
        </div>

      </div>

      <div className=''>
        <p className='fave-header'>your favourites</p>
        <Wrapper>
          {/* <Card />
          <Card />
          <Card /> */}
        </Wrapper>
      </div>

    </div>

  )
}

export default Favourite