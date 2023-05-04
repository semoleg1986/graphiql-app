import { FC, useState } from 'react';
import './Form.css';

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div id="fields">
      <input
        className="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />

      <button id="signin" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export { Form };
