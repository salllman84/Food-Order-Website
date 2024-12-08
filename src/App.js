import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup'; // Import Signup page
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        {/* Header Section */}
        <header className="header">
          <div className="logo">Foody</div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/signup">Sign Up</a> {/* Link to Signup page */}
          </nav>
          {/* Hamburger Menu Icon for Mobile */}
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </header>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} /> {/* Added Signup route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
