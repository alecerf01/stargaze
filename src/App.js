import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Favourite from './pages/Favourite';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Bonus from './pages/Bonus';



function App() {
  return (
    <Router>
      <>
        <Navigation />
        <div className='home-section'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/bonus" element={<Bonus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
