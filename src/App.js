import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Routes>
        <Route path="/Portfolio-react" element={<About />} />
        <Route path="/Portfolio-react/portfolio" element={<Portfolio />} />
        <Route path="/Portfolio-react/contact" element={<Contact />} />
        <Route path="/Portfolio-react/resume" element={<Resume />} />
        <Route path="/Portfolio-react/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
