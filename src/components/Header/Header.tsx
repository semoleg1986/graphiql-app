import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { NavLink } from 'react-router-dom';
import Toggle from '../Toggle';
import i18next from 'i18next';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { ABOUT_PAGE, MAIN_PAGE } from '../../utils/constants';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
}

const Header = ({ handleLanguageChanged }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const auth = getAuth();

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
      <Toggle handleLanguageChanged={handleLanguageChanged} />
      <h1>
        <Routes>
          <Route path={MAIN_PAGE} element={i18next.t('main')} />
          <Route path={ABOUT_PAGE} element={i18next.t('about')} />
        </Routes>
      </h1>
      <NavLink to="/">{i18next.t('welcome_page')}</NavLink>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>

      {isAuth ? (
        <div>
          <button className="signout" onClick={handleSignOut}>
            {i18next.t('signout')}
          </button>
        </div>
      ) : (
        <ButtonContainer />
      )}
    </header>
  );
};

export default Header;
