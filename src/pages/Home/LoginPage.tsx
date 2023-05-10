import { Login } from '../../components/Login';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

const LoginPage = () => {
  const title = i18next.t('loginpage.title');
  const reset = i18next.t('loginpage.reset');
  const register = i18next.t('loginpage.register');
  const or = i18next.t('loginpage.or');

  return (
    <div>
      <h1>{title}</h1>
      <Login />
      <p>
        <Link to="/reset-password">{reset}</Link> {or} <Link to="/register">{register}</Link>
      </p>
    </div>
  );
};

export default LoginPage;
