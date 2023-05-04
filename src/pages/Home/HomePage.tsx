import { signup } from '../../firebase';
import { useRef } from 'react';

const Home = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSignup() {
    if (emailRef.current && passwordRef.current) {
      await signup(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <>
      <div id="fields">
        <h1>Welcome page</h1>
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <button onClick={handleSignup}>Sign up</button>
    </>
  );
};

export default Home;
