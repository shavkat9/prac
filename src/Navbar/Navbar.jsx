import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='container'>
        <ul className='navbar__item'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button>Subscribe</button>
        <div className="navbar__text">
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nemo!</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam nisi, asperiores quas possimus molestiae ad est mollitia provident impedit.</p>
        </div>
    </div>
  )
}

export default Navbar;

