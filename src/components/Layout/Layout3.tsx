import { Outlet } from 'react-router-dom';

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
    </div>
  );
};

export default Layout2;
