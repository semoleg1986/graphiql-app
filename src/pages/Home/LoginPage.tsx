import { Login } from '../../components/Login';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

const LoginPage = () => {
  const title = i18next.t('loginpage.title');
  const reset = i18next.t('loginpage.reset');
  const register = i18next.t('loginpage.register');
  const or = i18next.t('loginpage.or');

  return (
    <div className="auth">
      <h1>{title}</h1>
      <Login />
      <p>
        <Link to="/register">{register}</Link> {or} <Link to="/reset-password">{reset}</Link>
      </p>
    </div>
  );
};

export default LoginPage;
