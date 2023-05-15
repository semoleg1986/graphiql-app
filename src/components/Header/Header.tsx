import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();
  const home = i18next.t('header.home');
  const about = i18next.t('header.about');
  const notfound = i18next.t('header.notfound');
  const logout = i18next.t('homepage.logout');

  return isAuth ? (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/about" element={about} />
          <Route path="*" element={notfound} />
        </Routes>
      </h1>
      <NavLink to="/">{home}</NavLink>
      <NavLink to="/about">{about}</NavLink>
      <button onClick={() => dispatch(removeUser())}>
        {logout} {email}
      </button>
    </header>
  ) : (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/about" element={about} />
          <Route path="*" element={notfound} />
        </Routes>
      </h1>
      <NavLink to="/">{home}</NavLink>
      <NavLink to="/about">{about}</NavLink>
    </header>
  );
};

export default Header;
