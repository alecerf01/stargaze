import axios from "axios";
import "./index.css";
import React, { useState, useEffect } from 'react'

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
      <div className="bckg">
        <div className="header">Picture of the Day</div>
        <div className="card">
          <img className="card-image" src={dailyImage} alt="" />
          <h2 className="card-name">{dailyTitle}</h2>
          <p className="card-para">{dailyDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
