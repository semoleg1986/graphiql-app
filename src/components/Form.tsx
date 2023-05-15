import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Form.css';
import i18next from 'i18next';

interface FormData {
  email: string;
  password: string;
}

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const mail = i18next.t('form.mail');
  const password = i18next.t('form.password');

  const onSubmit = (data: FormData) => {
    handleClick(data.email, data.password);
  };

  return (
    <form id="fields" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
        }}
        render={({ field }) => (
          <input className="email" type="email" {...field} placeholder={mail} />
        )}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters long' },
        }}
        render={({ field }) => (
          <input className="password" type="password" {...field} placeholder={password} />
        )}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button id="button" type="submit">
        {title}
      </button>
    </form>
  );
};

export { Form };
