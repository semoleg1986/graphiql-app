import i18next from 'i18next';

const About = () => {
  return (
    <div>
      <h1>{i18next.t('about')}</h1>
      <p>{i18next.t('about_text')}</p>
    </div>
  );
};

export default About;
