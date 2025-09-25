import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import 
import Home from './Components/Home/Home';
import AboutSection from './Components/AboutSection/AboutSection';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/Blog/BlogDetails/BlogDetails';


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/BlogDetails' element={<BlogDetails/>}/>
      </Routes>
    </Router>
    // <Home/>
  );
};

export default App;
