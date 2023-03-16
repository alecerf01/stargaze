import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Item1 from './pages/Item1';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios';



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
          <Route path="/home" element={<Homepage />} />
          <Route path="/item1" element={<Item1 />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
