import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import i18next from 'i18next';

const Layout3 = () => {
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
    </div>
  );
};

export default Layout3;
