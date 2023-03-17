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

          <p> {props.title} </p>
          <p><a href={props.site}>{props.site}</a></p>

      </div>
    </div>
  );
}

export default Constellation