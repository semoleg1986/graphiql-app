import { Login } from '../../components/Auth/Login';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

const LoginPage = () => {
  return (
    <div className="auth">
      <h1>{i18next.t('login')}</h1>
      <Login />
      <p>
        <Link to="/register">{i18next.t('register')}</Link> {i18next.t('or')}{' '}
        <Link to="/reset-password">{i18next.t('reset')}</Link>
      </p>
    </div>
  );
};

export default LoginPage;
