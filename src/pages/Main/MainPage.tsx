import i18next from 'i18next';
import SchemaComponent from '../../components/Converter/SchemaComponent';

const MainPage = () => {
  return (
    <div>
      <h1>{i18next.t('welcome')}</h1>
      <SchemaComponent />
    </div>
  );
};

export default MainPage;
