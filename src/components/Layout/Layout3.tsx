import { Outlet } from 'react-router-dom';
const Layout2 = () => {
  return (
    <div className="wrapped">
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout2;
