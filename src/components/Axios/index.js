// import React, { useState , useEffect } from "react";
import axios from "axios";

function Axios() {
  var url = `https://images-api.nasa.gov/search?q=leo`;
  axios.get(url).then((response) => {
    console.log(response.data);
    console.log(response.data.collection.items[0].data[0].description);
    console.log(response.data.collection.items[0].links[0].href);
  });
}

export default Axios;
