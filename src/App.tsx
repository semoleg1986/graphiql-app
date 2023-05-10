import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/Home/LoginPage';
import RegisterPage from './pages/Home/RegisterPage';
import ResetPassword from './pages/Home/ResetPage';
import About from './pages/About/AboutPage';
import NotFoundPage from './pages/404/NotFoundPage';
import Layout from './components/Layout';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import browserLanguageDetector from 'i18next-browser-languagedetector';
import translationEn from '../src/locales/en.json';
import translationRu from '../src/locales/ru.json';
import Toggle from './components/Toggle/Toggle';

i18next.use(browserLanguageDetector).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
  },
  fallbackLng: 'en',
  // detection: {
  //   order: ['localStorage', 'navigator'],
  //   caches: ['localStorage'],
  // },
});

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  useEffect(() => {
    setCurrentLanguage(i18next.language);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => handleLanguageChange('en')} disabled={currentLanguage === 'en'}>
          EN
        </button>
        <button onClick={() => handleLanguageChange('ru')} disabled={currentLanguage === 'ru'}>
          RU
        </button>
        <Toggle initialTheme={false} onChange={toggleTheme} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
};
export default App;
