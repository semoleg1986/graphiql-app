import { SignUp } from '../../components/SignUp';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

const RegisterPage = () => {
  const title = i18next.t('register.title');
  const have = i18next.t('register.have');
  const signin = i18next.t('register.signin');

  return (
    <div className="auth">
      <h1>{title}</h1>
      <SignUp />
      <p>
        {have} <Link to="/login">{signin}</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
