import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import Footer from "../../components/Footer";
import './style.css';

function Favourite() {
  return (
    <div className='bckg'>
        <p className="fave-header">Header</p>
        <p className="fave-subheader">Neque porro quisquam est qui dolorem ipsum quia dolor adipisci velit.</p>
        
        <Search />
        <Card />
      
        <Footer /> 
    </div>
  )
}

export default Favourite