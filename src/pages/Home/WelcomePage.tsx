import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import './Buttons.css';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <h1>Welcome</h1>
      <p>Some additional text fot all users</p>
      <p>
        The welcome page should contain general information about the developers, project, and
        course
      </p>
      {isAuth ? (
        <div className="button-container">
          <Link to="/">
            <button className="gomainpage">Go to Main page</button>
          </Link>
        </div>
      ) : (
        <div className="button-container">
          <Link to="/login">
            <button className="signin">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
