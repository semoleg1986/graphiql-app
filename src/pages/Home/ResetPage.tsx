import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../../components/Form.css';

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
    <div>
      {isSent ? (
        <p>
          An email has been sent to your email address. Please follow the instructions to reset your
          password. <Link to="/login">Login</Link>
        </p>
      ) : (
        <form id="fields" onSubmit={handleResetPassword}>
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button id="button" type="submit">
            Reset password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
