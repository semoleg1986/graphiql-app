import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { setUser } from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import i18next from 'i18next';

const SignUp = () => {
  const register = i18next.t('signup.register');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <Form title={register} handleClick={handleRegister} />;
};

export { SignUp };
