import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import './WelcomePage.css';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div>
      Welcome
      <Link to="/">
        <button className="gomainpage">Go to main</button>
      </Link>
    </div>
  ) : (
    <div className="button-container">
      <Link to="/login">Sign In</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default WelcomePage;
