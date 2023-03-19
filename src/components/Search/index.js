import React, { useState, useEffect } from 'react'
import './style.css';
import axios from 'axios';
import Card from '../Card';


function Search() {
  const [starSearch, setStarSearch] = useState('');
  const [starImage, setStarImage] = useState({});
  // const API_KEY = '6b3Hin4OoLFrPjYUINVedOoT7MlvEm0zfNtMlbu0';

  function searchStar(event) {
    //Set up correct API call
    // var APICallString = 'https://images-api.nasa.gov/search?q=' + starSearch + '?api_key=' + API_KEY
    var APICallString = `https://images-api.nasa.gov/search?q=${starSearch}`;

    //handle API Call
    axios.get(APICallString).then(function (response) {
      //success
      console.log(response)
      setStarImage(response.data);

    }).catch(function (err) {
      //error
      console.log(err)
    });
  }

  const starImages = starImage.collection
  return (
    <div>

      <div className='search-field'>
        <input className='input' type='text' onChange={e => setStarSearch(e.target.value)}></input>
        <button className='search-btn' type="button" onClick={e => searchStar(e)}>Search</button>
      </div>
      {/* {//turnerary operator/} */}
      {JSON.stringify(starImage) != '{}' ?
        <> <Card 
        cardName={starSearch}
        imageLink={starImages.items[0].links[0].href}
        cardDescription={starImages.items[0].data[0].description}/>
        <Card 
        cardName={starSearch}
        imageLink={starImages.items[1].links[0].href}
        cardDescription={starImages.items[1].data[0].description}/>
        <Card 
        cardName={starSearch}
        imageLink={starImages.items[2].links[0].href}
        cardDescription={starImages.items[2].data[0].description}/>
        </>
        :
        <><p className='test'>We have no Image</p></>}


    </div>

    
  )
}

export default Search