import React from 'react';
import './style.css';

function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img className='card-image'></img>
      </div>

      <div className="content">
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </div>
  )
}

export default Card