import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Toggle from '../Toggle/Toggle';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
}

const Layout2 = ({ handleLanguageChanged }: HeaderProps) => {
  return (
    <div className="wrapped">
      <Toggle handleLanguageChanged={handleLanguageChanged} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout2;
