import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

const Header = () => {
  const home = i18next.t('header.home');
  const about = i18next.t('header.about');
  const notfound = i18next.t('header.notfound');

  return (
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
