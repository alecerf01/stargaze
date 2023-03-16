import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Favourite from './pages/Favourite';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import axios from 'axios';



function App() {

//   var url = `https://images-api.nasa.gov/search?q=leo`;
//   console.log(url)
//   axios.get(url)
//       .then(function(response) {
//               console.log(response.data.collection.items[0].links[0].href); 
// });

  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
