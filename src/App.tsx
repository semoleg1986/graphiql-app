import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main/MainPage';
import LoginPage from './pages/Main/LoginPage';
import RegisterPage from './pages/Main/RegisterPage';
import ResetPassword from './pages/Main/ResetPage';
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
import WelcomePage from './pages/Main/WelcomePage';
import { useAuth } from './hooks/use-auth';

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
});

const App = () => {
  const { isAuth } = useAuth();
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
        <button onClick={() => handleLanguageChange('en')} disabled={currentLanguage === 'en'}>
          EN
        </button>
        <button onClick={() => handleLanguageChange('ru')} disabled={currentLanguage === 'ru'}>
          RU
        </button>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {isAuth ? (
            <Route path="*" element={<Layout />}>
              <Route path="main" element={<Main />} />
              <Route path="about" element={<About />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toggle initialTheme={false} onChange={toggleTheme} />
      </div>
    </I18nextProvider>
  );
};
export default App;
