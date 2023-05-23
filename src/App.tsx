import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
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
import Layout2 from './components/Layout2';

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
  const { isAuth, isLoading } = useAuth();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    setCurrentLanguage(i18next.language);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);
  };
  if (isLoading) {
    return <div>Loading...</div>; // Отображение загрузочного индикатора или другой загрузочной составляющей
  }
  return (
    <I18nextProvider i18n={i18next}>
      <div>
        <button onClick={() => handleLanguageChange('en')} disabled={currentLanguage === 'en'}>
          EN
        </button>
        <button onClick={() => handleLanguageChange('ru')} disabled={currentLanguage === 'ru'}>
          RU
        </button>
        <Routes>
          <Route path="*" element={<Layout2 />}>
            <Route index element={<WelcomePage />} />
          </Route>
          {isAuth ? (
            <>
              <Route path="/login" element={<Navigate to="/main" />} />
              <Route path="/register" element={<Navigate to="/main" />} />
              <Route path="/reset-password" element={<Navigate to="/main" />} />
              <Route path="*" element={<Layout />}>
                <Route path="main" element={<Main />} />
                <Route path="about" element={<About />} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<Layout />}>
                <Route path="main" element={<Navigate to="/" />} />
                <Route path="about" element={<Navigate to="/" />} />
              </Route>
            </>
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
};
export default App;
