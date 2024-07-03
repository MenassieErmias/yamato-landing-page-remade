import React from 'react';
import './header.css'
import Logo from '../../assets/logo.jpg'

const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <img src={Logo} alt="logo" className="header-logo" />
        <ul className="header-menu">
          <li className="header-menu-item">
            <a href="" className="header-link">
              Home
            </a>
          </li>
          <li className="header-menu-item">
            <a href="" className="header-link">
              Services
            </a>
          </li>
          <li className="header-menu-item">
            <a href="" className="header-link">
              Products
            </a>
          </li>
          <li className="header-menu-item">
            <a href="" className="header-link">
              Blog
            </a>
          </li>
          <li className="header-menu-item">
            <a href="" className="header-link">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header