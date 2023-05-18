import i18next from 'i18next';
import GraphiQL from '../../components/Converter/Graphql';

const MainPage = () => {
  return (
    <div>
      <h1>{i18next.t('welcome')}</h1>
      <GraphiQL />
    </div>
  );
};

export default MainPage;
