import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Navbar'>
      <div className='Nav_left'>
        <img src="/src/assets/Vector1.png" alt="Logo" />
      </div>
      <div className={`Nav_center ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Tracks</li>
          <li>Our History</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='Nav_right'>
        <button>Register</button>
      </div>
      <div className='Nav_toggler' onClick={toggleNavbar}>
      &#9776;
      </div>
    </div>
  );
}

export default Navbar;
