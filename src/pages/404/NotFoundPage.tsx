import { Link } from 'react-router-dom';
import i18next from 'i18next';

const NotFoundPage = () => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">
        <button className="signin">{i18next.t('backtopage')}</button>
      </Link>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22533fb0-3db2-4d45-8675-4aaf09a2027b/dcg7gx1-145cab41-ec59-4ba1-808d-b3d9532409e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNTMzZmIwLTNkYjItNGQ0NS04Njc1LTRhYWYwOWEyMDI3YlwvZGNnN2d4MS0xNDVjYWI0MS1lYzU5LTRiYTEtODA4ZC1iM2Q5NTMyNDA5ZTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y-EzqWwAP55JiAx-s_DES2b4IscaaO1goPcnkA_OkFo"
        alt=""
      />
    </>
  );
};

export default NotFoundPage;
