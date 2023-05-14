import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import i18next from 'i18next';
import GraphiQL from '../../components/Converter/Graphql';

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  const title = i18next.t('homepage.title');
  const logout = i18next.t('homepage.logout');

  return isAuth ? (
    <div>
      <h1>{title}</h1>

      <button onClick={() => dispatch(removeUser())}>
        {logout} {email}
      </button>
      <GraphiQL />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
