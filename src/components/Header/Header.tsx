import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAuth();
  // const home = i18next.t('header.home');
  // const about = i18next.t('header.about');
  // const notfound = i18next.t('header.notfound');
  // const logout = i18next.t('homepage.logout');

  return isAuth ? (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={i18next.t('home')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="*" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/">{i18next.t('home')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
      <div className="button-container">
        <button className="signout" onClick={() => dispatch(removeUser())}>
          {i18next.t('signout')}
        </button>
      </div>
    </header>
  ) : (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={i18next.t('home')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="*" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/">{i18next.t('home')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
    </header>
  );
};

export default Header;
