import { Login } from '../../components/Login';
import { Link } from 'react-router-dom';
import ResetPassword from './ResetPage';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        <Link to="/reset-password">Reset password</Link> or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
