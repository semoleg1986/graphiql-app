import { FC, useState } from 'react';
import './Form.css';
import i18next from 'i18next';

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const mail = i18next.t('form.mail');
  const password = i18next.t('form.password');

  return (
    <div id="fields">
      <input
        className="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={mail}
      />
      <input
        className="password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={password}
      />

      <button id="button" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export { Form };
