import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  indexedDBLocalPersistence,
} from 'firebase/auth';
import { Form } from './Form';
import i18next from 'i18next';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    setPersistence(auth, indexedDBLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            console.log(user);
            navigate('/');
          })
          .catch(() => alert('Incorrect email or password'));
      })
      .catch(() => alert('Failed to set authentication persistence'));
  };

  return <Form title={i18next.t('signin')} handleClick={handleLogin} />;
};

export { Login };
