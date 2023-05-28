import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import i18next from 'i18next';
import { LOGIN_PAGE, MAIN_PAGE, REGISTER_PAGE } from '../../utils/constants';

export const ButtonContainer: React.FC = () => {
  const { isAuth } = useAuth();

  return (
    <div className="button-container">
      {isAuth ? (
        <Link to={MAIN_PAGE}>
          <button className="gomainpage">{i18next.t('gotomain')}</button>
        </Link>
      ) : (
        <>
          <Link to={LOGIN_PAGE}>
            <button className="signin">{i18next.t('signin')}</button>
          </Link>
          <Link to={REGISTER_PAGE}>
            <button className="signup">{i18next.t('signup')}</button>
          </Link>
        </>
      )}
    </div>
  );
};
