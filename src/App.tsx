import Layout from './components/Layout';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useAuth } from './hooks/use-auth';
import { Router } from './pages';

const App = () => {
  const { isLoading } = useAuth();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    setCurrentLanguage(i18next.language);
  }, []);

  const handleLanguageChanged = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18next}>
      <div className={currentLanguage === 'en' ? 'en' : 'ru'}>
        <Layout handleLanguageChanged={handleLanguageChanged}>
          <Router />
        </Layout>
      </div>
    </I18nextProvider>
  );
};

export default App;
