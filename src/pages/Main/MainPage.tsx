import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import i18next from 'i18next';
import GraphiQL from '../../components/Converter/Graphql';

const MainPage = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <h1>{i18next.t('welcome')}</h1>
      <GraphiQL />
    </div>
  );
};

export default MainPage;
