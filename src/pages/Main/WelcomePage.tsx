import './Buttons.css';
import i18next from 'i18next';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>{i18next.t('welcome')}</h1>
      <h3>{i18next.t('welcome_text1')}</h3>
      <p>{i18next.t('welcome_text2')}</p>
      <div className="yoda-1">
        <img src="https://www.pngmart.com/files/3/Star-Wars-PNG-Clipart.png" alt="" />
      </div>
    </div>
  );
};

export default WelcomePage;
