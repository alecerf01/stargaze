import React, { useState, useEffect }from 'react'
import HeroSection from '../../components/HeroSection';
import './style.css';
import axios from 'axios';


function Homepage() {
  const [starSearch, setStarSearch ] = useState('');
const [starImage, setStarImage] = useState({});
const API_KEY = '6b3Hin4OoLFrPjYUINVedOoT7MlvEm0zfNtMlbu0';

function searchStar(event) {
  //Set up correct API call
  // var APICallString = 'https://images-api.nasa.gov/search?q=' + starSearch + '?api_key=' + API_KEY
  var APICallString = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + API_KEY
  //handle API Call
axios.get(APICallString).then(function (response){
//success
console.log(response)
setStarImage(response.data);

}).catch(function(err){
//error
console.log(err)
});
}

const starImageOne = starImage.photos
  return (
    <div className='bckg'>
      <input type='text' onChange={e => setStarSearch(e.target.value)}></input>
      <button onClick={e => searchStar(e)}>Search</button>
      {/* {//turnerary operator/} */}
      {JSON.stringify(starImage) != '{}' ? 
      <><img src={starImageOne} /></>
    :
    <><p>We have no Image</p></>}

      <HeroSection />
    </div>
  )
}

export default Homepage