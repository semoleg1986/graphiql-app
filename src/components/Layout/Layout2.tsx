import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
}

const Layout2 = ({ handleLanguageChanged }: HeaderProps) => {
  return (
    <div className="wrapped">
      <button onClick={() => handleLanguageChanged('en')}>EN</button>
      <button onClick={() => handleLanguageChanged('ru')}>RU</button>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout2;
