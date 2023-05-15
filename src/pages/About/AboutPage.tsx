import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';
import i18next from 'i18next';

const About = () => {
  // const title = i18next.t('about.title');
  // const text = i18next.t('about.text');

  const token = useSelector((state: RootState) => state.user.token);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>{i18next.t('about')}</h1>
      <p>{i18next.t('about_text')}</p>
    </div>
  );
};

export default About;
