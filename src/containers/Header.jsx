import React from 'react';
import { NavLink } from 'react-router-dom'
import '@styles/style.scss';
import '@styles/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h2>KannaVidad Wikia</h2>
      <nav className='header--nav'>
        <ul className='nav nav-pills justify-content-end'>
          <li className='nav-item'>
            <NavLink to="/" className='nav-link'>Home</NavLink>
          </li>
          
          <li className='nav-item'>
            <NavLink to="/admin/members" className='nav-link'>Edit</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;