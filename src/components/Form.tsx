import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import i18next from 'i18next';

interface FormData {
  email: string;
  password: string;
}

export interface FormProps {
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
          required: i18next.t('email_required') ?? undefined,
          pattern: { value: /^\S+@\S+\.\S+$/i, message: i18next.t('invalid_email') },
        })}
        placeholder={i18next.t('mail') ?? undefined}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        className="password"
        type="password"
        {...register('password', {
          required: i18next.t('password_required') ?? undefined,
          minLength: { value: 8, message: i18next.t('password_message') },
          validate: (value) =>
            (isPasswordValid(value) || i18next.t('password_contain')) ?? undefined,
        })}
        placeholder={i18next.t('password') ?? undefined}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button id="button" type="submit">
        {title}
      </button>
    </form>
  );
};

export { Form };
