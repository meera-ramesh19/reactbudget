import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <button>
        <Link to='/'>Home</Link>
      </button>
      <button>
        <Link to='/transactions'>Transactions</Link>
      </button>
      <button>
        <Link to='/transactions/new'>New</Link>
      </button>
    </nav>
  );
};
export default NavBar;
