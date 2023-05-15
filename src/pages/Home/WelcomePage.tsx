import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import './WelcomePage.css';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div>
      Welcome
      <Link to="/home">
        <button className="gomainpage">Go to main</button>
      </Link>
    </div>
  ) : (
    <div className="button-container">
      <Link to="/login">
        <button>Sign In</button>
      </Link>
      <Link to="/register">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
