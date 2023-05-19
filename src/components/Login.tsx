import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { Form, FormProps } from './Form';
import i18next from 'i18next';

interface WarningMessageProps {
  message: string;
  onClose: () => void;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ message, onClose }) => (
  <div className="warning-message">
    <p>{message}</p>
    <button onClick={onClose}>X</button>
  </div>
);

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            console.log(user);
            navigate('/main');
          })
          .catch(() => {
            setWarningMessage('Incorrect email or password');
            setShowWarning(true);
          });
      })
      .catch(() => {
        setWarningMessage('Failed to set authentication persistence');
        setShowWarning(true);
      });
  };

  const closeWarning = () => {
    setShowWarning(false);
    setWarningMessage('');
  };

  const formProps: FormProps = {
    title: i18next.t('signin'),
    handleClick: handleLogin,
  };

  return (
    <>
      {showWarning && <WarningMessage message={warningMessage} onClose={closeWarning} />}
      <Form {...formProps} />
    </>
  );
};

export { Login };
