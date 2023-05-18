import { FC } from 'react';
import { useForm } from 'react-hook-form';
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
    register,
    formState: { errors },
  } = useForm<FormData>();

  const isPasswordValid = (value: string) => {
    return /[A-Z]/.test(value) && /[0-9]/.test(value) && /[!@#$%^&*]/.test(value);
  };

  const onSubmit = (data: FormData) => {
    handleClick(data.email, data.password);
  };

  return (
    <form id="fields" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="email"
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
        })}
        placeholder={i18next.t('mail') ?? undefined}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        className="password"
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters long' },
          validate: (value) =>
            isPasswordValid(value) ||
            'Password must contain at least one uppercase letter, one digit, and one special character',
        })}
        placeholder={i18next.t('password') ?? undefined}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button id="button" type="submit">
        {title}
      </button>
    </form>
  );
};

export { Form };
