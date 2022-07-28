import { Link } from 'react-router-dom';
import logo from '../asset/dollar-sign.gif';
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
        <Link style={{ color: 'yellow' }} to='/'>
          Home
        </Link>
      </button>
      <button>
        <Link style={{ color: 'yellow' }} to='/transactions'>
          Transactions
        </Link>
      </button>
      <button>
        <Link style={{ color: 'yellow' }} to='/transactions/new'>
          New Transactions
        </Link>
      </button>
      <button>
        <Link style={{ color: 'yellow' }} to='/chart'>
          Viz Chart
        </Link>
      </button>
    </nav>
  );
};
export default NavBar;
