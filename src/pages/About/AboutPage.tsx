import { Navigate } from 'react-router-dom';
import i18next from 'i18next';
import { useAuth } from '../../hooks/use-auth';

const About = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <h1>{i18next.t('about')}</h1>
      <p>{i18next.t('about_text')}</p>
    </div>
  );
};

export default About;
