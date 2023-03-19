import React, {useState, useEffect} from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

{/* <FaHeart className='saved-icon'/> */}

function Card(props) {
  function isFavourite(){
    const savedCards = JSON.parse(localStorage.getItem('cards'))

    if(!savedCards || savedCards.length < 1){
      return false
    }
    const isFav = savedCards.find((card) => card.imageLink === props.imageLink)
    return isFav
  }

  const [isFav, setIsFav] = useState(isFavourite());

  function save() {
    const savedCards = localStorage.getItem('cards');

    const cardToSave = {
      imageLink: props.imageLink,
      cardName: props.cardName, 
      cardDescription: props.cardDescription
    }

    // check if card is already Favourite, don't save card again
    // if it's not favourite get card 'JSON.parse' -> array.push -> Json.stringify -> localstorage.setItem('cards', updatedArray)
    // find if the card is already saved
  }
  
  return (
        <div className="card">

          <div className="img-container">
            <div onClick={save} className='save-icon'><FaRegHeart/></div>
          </div>
    
          <div className="content">
            <img className='card-image' src={props.imageLink} alt="" />
            <h2 className='card-name'>{props.cardName}</h2>
            <p className='card-para'>{props.cardDescription}</p>
          </div>

        </div>
      )
}

export default Card