import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/Home/LoginPage';
import RegisterPage from './pages/Home/RegisterPage';
import ResetPassword from './pages/Home/ResetPage';
import About from './pages/About/AboutPage';
import NotFoundPage from './pages/404/NotFoundPage';
import Layout from './components/Layout';

const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user !== null;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={isAuthenticated() ? <About /> : <Navigate to="/login" />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
