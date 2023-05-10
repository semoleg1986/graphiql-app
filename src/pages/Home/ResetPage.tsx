import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../../components/Form.css';
import i18next from 'i18next';

const ResetPassword = () => {
  const title = i18next.t('reset.title');
  const reset = i18next.t('reset.reset');
  const placeholder = i18next.t('reset.placeholder');
  const sent = i18next.t('reset.sent');
  const login = i18next.t('reset.login');

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
    <div>
      {isSent ? (
        <p>
          {sent} <Link to="/login">{login}</Link>
        </p>
      ) : (
        <form id="fields" onSubmit={handleResetPassword}>
          <label htmlFor="email">{title}:</label>
          <input
            className="email"
            type="email"
            id="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button id="button" type="submit">
            {reset}
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
