import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import 
import Home from './Components/Home/Home';
import AboutSection from './Components/AboutSection/AboutSection';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <Home/>
  );
};

export default App;
