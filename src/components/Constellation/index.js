import React from 'react';
import './style.css';

function Constellation(props) {
  const image = require(`../../images/${props.image}`)
  return (
    <div className="constell-card">

      <div className="img-container">
        <img alt={props.name} src={image} />
      </div>

      <div className="content">
          <p className='constell-name'> {props.name} </p>
          <a className='constell-link' href={props.site}>Read more</a>

      </div>
    </div>
  );
}

export default Constellation