import React from 'react';
import '@styles/style.scss';
import '@styles/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h2>KannaVidad Wikia</h2>
      <nav className='header--nav'>
        <ul className='nav nav-pills justify-content-end'>
          <li className='nav-item'><a className='nav-link' href='/'>Home</a></li>
          <li className='nav-item'><a className='nav-link' href='/admin/members'>Edit</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;