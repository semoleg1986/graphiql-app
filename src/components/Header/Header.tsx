import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
}

const Header = ({ handleLanguageChanged }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const auth = getAuth(); // Получение объекта аутентификации

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Выход из системы выполнен');
        navigate('/');
      })
      .catch((error) => {
        console.error('Ошибка при выходе из системы:', error);
      });
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <h1>
        <Routes>
          <Route path="/main" element={i18next.t('main')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
      <button onClick={() => handleLanguageChanged('en')}>EN</button>
      <button onClick={() => handleLanguageChanged('ru')}>RU</button>
      {isAuth && (
        <div>
          <button className="signout" onClick={handleSignOut}>
            {i18next.t('signout')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
