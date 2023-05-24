import i18next from 'i18next';

const About = () => {
  return (
    <div className="about">
      <h1>{i18next.t('about')}</h1>
      <p>{i18next.t('about_para')}</p>
      <p>{i18next.t('about_para1')}</p>
      <p>{i18next.t('about_para2')}</p>
      <p>{i18next.t('about_para3')}</p>
    </div>
  );
};

export default About;
