import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import './navbar.css';

// bem => Block element modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'/>

        </div>
      </div>
    </div>
  )
}

export default Navbar
