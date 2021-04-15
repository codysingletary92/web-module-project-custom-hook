import React, { useState } from 'react';
import saveLocalStorage from "../hooks/saveLocalStorage"

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    saveLocalStorage(!props.darkMode)
    console.log('navbar kick')
  };

  

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
