import React from 'react';
import { Link } from 'react-router-dom'; // Import pour créer des liens
import { FaPizzaSlice } from 'react-icons/fa'; // Import pour l'icône de pizza
import '../styles/HomePage.css';
import pizzaBackground from '../assets/images/pizza-background.png'; 

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${pizzaBackground})` }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <FaPizzaSlice className="pizza-icon" /> Pizza Time
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/login" className="nav-link">login</Link></li>
          <li><Link to="/contact" className="nav-link">About-us</Link></li> {/* Nouveau lien vers la page de contact */}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-slogan">Welcome to Pizza Time!</h1>
        <p className="hero-sub-slogan">Enjoy the best pizzas in town!</p>
      </div>
    </div>
  );
};

export default HomePage;
