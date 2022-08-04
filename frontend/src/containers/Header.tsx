import React, {FC, useState} from 'react';
import { NavLink } from 'react-router-dom'
import '@styles/style.scss';
import '@styles/Header.scss'

const Header:FC = () => {

  const [isLogged, setIsLogged] = useState(true);

  return (
    <header className='header'>
      <h2>KannaVidad Wikia</h2>
      <nav className='header--nav'>
        <ul className='nav nav-pills justify-content-end'>
          <li className='nav-item'>
            <NavLink to="/" className='nav-link'>Home</NavLink>
          </li>
          
          {
            isLogged && 
            <li className='nav-item'>
              <NavLink to="/admin/members" className='nav-link'>Edit</NavLink>
            </li>
          }

          <li>
            {
              (isLogged)
              ? <button className='nav-link' onClick={()=>setIsLogged(false)}>Log Out</button>
              : <button className='nav-link' onClick={()=>setIsLogged(true)}>Log In</button>
              // : <NavLink to="/login" className='nav-link'>Log In</NavLink>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;