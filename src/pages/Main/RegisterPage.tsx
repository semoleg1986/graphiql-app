import { SignUp } from '../../components/Auth/SignUp';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

const RegisterPage = () => {
  return (
    <div className="auth">
      <h1>{i18next.t('register')}</h1>
      <SignUp />
      <p>
        {i18next.t('have')} <Link to="/login">{i18next.t('signin')}</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
