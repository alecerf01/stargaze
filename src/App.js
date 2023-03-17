import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Favourite from './pages/Favourite';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
