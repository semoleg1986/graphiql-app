import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAuth();

  return isAuth ? (
    <header>
      <h1>
        <Routes>
          <Route path="/main" element={i18next.t('main')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="*" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
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
          <Route path="/main" element={i18next.t('main')} />
          <Route path="/about" element={i18next.t('about')} />
          <Route path="*" element={i18next.t('notfound')} />
        </Routes>
      </h1>
      <NavLink to="/main">{i18next.t('main')}</NavLink>
      <NavLink to="/about">{i18next.t('about')}</NavLink>
    </header>
  );
};

export default Header;
