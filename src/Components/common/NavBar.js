import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/dollar-sign.gif';

import './NavBar.css';
const NavBar = () => {
  return (
    <nav className='nav'>
      <div>
        <img
          style={{ width: '50px', height: '50px', background: 'transparent' }}
          src={logo}
          alt='Dollar sign'
        />
      </div>
      <button>
        <Link style={{ textDecoration: 'none', color:'gray' ,padding:'0 1rem'}} to='/'>
          Home
        </Link>
      </button>
      <button>
        <Link
          style={{ textDecoration: 'none', color: 'gray' }}
          to='/transactions'
        >
          Show All
        </Link>
      </button>
      <button>
        <Link
          style={{ textDecoration: 'none', color: 'gray' }}
          to='/transactions/new'
        >
          New
        </Link>
      </button>
      <button>
        <Link style={{ textDeoration: 'none', color: 'gray' }} to='/chart'>
          Chart
        </Link>
      </button>
    </nav>
  );
};
export default NavBar;
