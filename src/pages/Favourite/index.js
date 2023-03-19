import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import HeroSection from '../../components/HeroSection';
import Wrapper from "../../components/Wrapper";
import './style.css';

function Favourite() {
  return (
    <>
      <div className='bckg'>
        <div className='hero-sec'>
          <HeroSection />
          <Search />
        </div>

        <div className='constellation-sec'>
          <p className='fave-header'>your favourites</p>

          <Wrapper>
            <Card />
            <Card />
            <Card />
          </Wrapper>
        </div>

      </div>
    </>
  )
}

export default Favourite