import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout2 = () => {
  return (
    <div className="wrapped">
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout2;
