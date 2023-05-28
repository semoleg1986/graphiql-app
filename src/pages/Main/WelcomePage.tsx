import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import './Buttons.css';
import i18next from 'i18next';
import './WelcomePage.style.css';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  return (
    <div className="welcome-page">
      <h1>{i18next.t('welcome')}</h1>
      <h3>{i18next.t('welcome_text1')}</h3>
      <p>{i18next.t('welcome_text2')}</p>
      <div className="yoda-1">
        <img src="https://www.pngmart.com/files/3/Star-Wars-PNG-Clipart.png" alt="" />
      </div>

      {isAuth ? (
        <div className="button-container">
          <Link to="/main">
            <button className="gomainpage">{i18next.t('gotomain')}</button>
          </Link>
        </div>
      ) : (
        <div className="button-container">
          <Link to="/login">
            <button className="signin">{i18next.t('signin')}</button>
          </Link>
          <Link to="/register">
            <button className="signup">{i18next.t('signup')}</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
