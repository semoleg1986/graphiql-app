import { Outlet } from 'react-router-dom';
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
    </div>
  );
};

export default Layout2;
