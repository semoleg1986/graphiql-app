import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
}

const Layout = ({ handleLanguageChanged }: HeaderProps) => {
  return (
    <div className="wrapped">
      <Header handleLanguageChanged={handleLanguageChanged} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
