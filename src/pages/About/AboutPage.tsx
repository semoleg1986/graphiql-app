import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';

const About = () => {
  const token = useSelector((state: RootState) => state.user.token);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>About</h1>
      <p>Some text</p>
    </div>
  );
};

export default About;
