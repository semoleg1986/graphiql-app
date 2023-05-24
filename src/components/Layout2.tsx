import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import i18next from 'i18next';

const Layout2 = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  useEffect(() => {
    setCurrentLanguage(i18next.language);
  }, []);
  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div className="wrapped">
      <button onClick={() => handleLanguageChange('en')} disabled={currentLanguage === 'en'}>
        EN
      </button>
      <button onClick={() => handleLanguageChange('ru')} disabled={currentLanguage === 'ru'}>
        RU
      </button>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout2;
