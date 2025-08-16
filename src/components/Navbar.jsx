import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Change this:
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">JobMatch</Link>
        <div className="nav-links">
          {user ? (
            <>
              <span className="welcome">Welcome, {user.name || user.email}!</span>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </>
          )}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
