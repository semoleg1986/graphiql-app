// import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const auth = getAuth(); // Получение объекта аутентификации

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Выход из системы успешно выполнен
        console.log('Выход из системы выполнен');
        navigate('/');
      })
      .catch((error) => {
        // Произошла ошибка при выходе из системы
        console.error('Ошибка при выходе из системы:', error);
      });
  };

  return (
    <header>
      <h1>
        <Routes>
          <Route path="/main" element={i18next.t('main')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
      {isAuth && (
        <div className="button-container">
          <button className="signout" onClick={handleSignOut}>
            {i18next.t('signout')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
