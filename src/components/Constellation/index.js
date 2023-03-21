import React from 'react';
import './index.css';

function Constellation(props) {
  const image = require(`../../images/${props.image}`)
  return (
    <div className="constell-card">

      <div className="img-container">

        <a href={props.site} target='_blank' >
          <img src={image} alt={props.name}></img>
        </a>
      </div>

      <div className="content">
        <p className='constell-name'> {props.name} </p>
        <p className='text'>{props.description}</p>
        <a className='constell-link' target='_blank' href={props.site}>Read more</a>
      </div>
    </div>
  );
}

export default Constellation