import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import './Header.style.css';

const Header = () => {
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
        navigate('/');
      })
      .catch(() => {});
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
      <div>
        {isAuth && (
          <div className="btn">
            <button className="signout" onClick={handleSignOut}>
              {i18next.t('signout')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
