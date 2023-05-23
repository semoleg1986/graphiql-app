import { Link } from 'react-router-dom';
import i18next from 'i18next';

const NotFoundPage = () => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">
        <button className="signin">{i18next.t('backtopage')}</button>
      </Link>
    </>
  );
};

export default NotFoundPage;
