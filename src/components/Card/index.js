import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";


{/* <FaHeart className='saved-icon'/> */}
function Card({star}) {
  return (
        <div className="card">
          <div className="img-container">
            <div className='save-icon'><FaRegHeart/></div>
            <img className='card-image'></img>
          </div>
    
          <div className="content">
            <h2 className='card-name'>{star.data[0].title}</h2>
            <p className='card-para'> Description</p>
          </div>
        </div>
      )
}

export default Card