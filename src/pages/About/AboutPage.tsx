import i18next from 'i18next';

const About = () => {
  return (
    <div className="about">
      <h1>{i18next.t('about')}</h1>
      <p>{i18next.t('about_para')}</p>
      <p>{i18next.t('about_para1')}</p>
      <p>{i18next.t('about_para2')}</p>
      <p>{i18next.t('about_para3')}</p>
      <p>
        {i18next.t('about_para4')}
        <a href="https://develop--golden-clafoutis-688ad6.netlify.app/">netlify</a>
        {i18next.t('about_para5')}
        <a href="https://github.com/semoleg1986/graphiql-app">GitHub.</a>
      </p>
    </div>
  );
};

export default About;
