import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import Footer from "../../components/Footer";
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
          <p className='constellation-header'>you favourites</p>

          <Wrapper>
            <Card />
            <Card />
            <Card />
            <Card />
          </Wrapper>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Favourite