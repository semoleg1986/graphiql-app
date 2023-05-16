import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { setUser } from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import i18next from 'i18next';

const Login = () => {
  // const signin = i18next.t('login.signin');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('incorrect email or password'));
  };

  return <Form title={i18next.t('signin')} handleClick={handleLogin} />;
};

export { Login };
