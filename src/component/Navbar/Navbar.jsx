import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleRegisterClick = () => {
    navigate('/Register');
  };

  return (
    <div className="Navbar">
      <div className="Nav_left">
        <img src="/src/assets/Vector1.png" alt="Logo" />
      </div>
      <div className={`Nav_center ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#tracks">Tracks</a>
        <a href="#history">Our History</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="Nav_right">
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      <div className="Nav_toggler" onClick={toggleNavbar}>
        &#9776;
      </div>
    </div>
  );
}

export default Navbar;
