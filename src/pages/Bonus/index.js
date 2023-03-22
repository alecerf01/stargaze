import axios from "axios";
import "./index.css";
import React, { useState, useEffect } from 'react'
import R3fDemo from "../../components/threeFiber";

function Bonus() {

    const [bonusImage, setBonusImage] = useState({});

    useEffect(() => {
        const API_KEY = '6b3Hin4OoLFrPjYUINVedOoT7MlvEm0zfNtMlbu0'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


  axios
    .get(url)
    .then(function (response) {
      //success
      console.log(response.data.url);
      setBonusImage(response.data);
    })
    .catch(function (err) {
      //error
      console.log(err);
    });
    },[])

    const dailyImage = bonusImage.url;
    const dailyTitle = bonusImage.title;
    const dailyDesc = bonusImage.explanation;

  return (
    <div>
      <div>
        <div className='threeD'>
          <R3fDemo ></R3fDemo>
        </div>
        <h1 className="header">PICTURE OF THE DAY</h1>

        <div className="bonus-card">
          <img className="bonus-card-image" src={dailyImage} alt="picture of the day" />
          <h2 className="card-name">{dailyTitle}</h2>
          <p className="card-para">{dailyDesc}</p>
        </div>


      </div>
    </div>
  );
}

export default Bonus;
