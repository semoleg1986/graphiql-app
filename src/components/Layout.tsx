import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ReactNode } from 'react';

interface HeaderProps {
  handleLanguageChanged: (lang: string) => void;
  children: ReactNode;
}

const Layout = ({ handleLanguageChanged, children }: HeaderProps) => {
  return (
    <div className="wrapped">
      <Header handleLanguageChanged={handleLanguageChanged} />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
