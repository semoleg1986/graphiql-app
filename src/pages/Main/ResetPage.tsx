import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../../components/Form.css';
import i18next from 'i18next';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsSent(true);
      })
      .catch(() => alert('Invalid email!'));
  };

  return (
    <div className="auth">
      {isSent ? (
        <p>
          {i18next.t('sent')} <Link to="/login">{i18next.t('login')}</Link>
        </p>
      ) : (
        <>
          <h1>{i18next.t('reset_title')}</h1>
          <form id="fields" onSubmit={handleResetPassword}>
            <input
              className="email"
              type="email"
              id="email"
              placeholder={i18next.t('placeholder') ?? undefined}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button id="button" type="submit">
              {i18next.t('reset')}
            </button>
          </form>
          <p>
            <Link to="/register">{i18next.t('register')}</Link> {i18next.t('or')}{' '}
            <Link to="/login">{i18next.t('signin')}</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
