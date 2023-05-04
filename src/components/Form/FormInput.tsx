import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import './FormInput.css';
import { FormAdd } from './utils/Form.type';
import { ICard } from '../Card/Card.props';

const FormInput: React.FC<{
  onAddCard: (product: ICard) => void;
}> = ({ onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAdd>({ reValidateMode: 'onSubmit' });
  const [formMessage, setFormMessage] = useState<boolean>(false);
  const handleProduct: SubmitHandler<FormAdd> = (data) => {
    const product = {
      id: Date.now(),
      ...data,
      imageUrl: URL.createObjectURL(data.imageUrl[0] as unknown as Blob),
    };
    reset();
    onAddCard(product);
    setFormMessage(true);
    setTimeout(() => setFormMessage(false), 4000);
  };
  return (
    <div className="box-form">
      <form role="form" onSubmit={handleSubmit(handleProduct)} noValidate>
        <div className="form-box">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            className="form-input"
            type="text"
            id="title"
            placeholder="Enter title"
            {...register('title', {
              required: 'The field is required',
              pattern: {
                value: /^[A-Z].*/,
                message: 'Start with a capital letter',
              },
            })}
          />
          <p className="form-error">{errors.title?.message && errors.title.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="date">
            Date:
          </label>
          <input
            className="form-input"
            type="date"
            id="date"
            {...register('date', { required: 'The field is required' })}
          />
          <p className="form-error">{errors.date?.message && errors.date.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="brand">
            Brand:
          </label>
          <select
            className="form-input"
            {...register('brand', { required: 'The field is required' })}
          >
            <option value="">-</option>
            <option value="Huawei">Huawei</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
          </select>
          <p className="form-error">{errors.brand?.message && errors.brand.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="category">
            Category:
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              id="smartphones"
              value="Smartphones"
              {...register('category', {
                required: 'The field is required',
              })}
            />
            Smartphones
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              value="Laptops"
              id="laptops"
              {...register('category', {
                required: 'The field is required',
              })}
            />
            Laptops
          </label>
          <p className="form-error">{errors.category?.message && errors.category.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label">Image:</label>
          <input
            className="form-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            id="imageUrl"
            {...register('imageUrl', {
              required: 'The field is required',
            })}
          />
          <p className="form-error">{errors.imageUrl?.message && errors.imageUrl.message}</p>
        </div>
        <div className="form-box">
          <label className="form-checkbox-label">
            <input
              id="rules"
              className="form-checkbox-input"
              type="checkbox"
              {...register('rules', {
                required: 'The field is required',
              })}
            />
            I accept the rules.
          </label>
          <p className="form-error">{errors.rules?.message && errors.rules.message}</p>
        </div>
        <button className="form-button" type="submit">
          Add new card
        </button>
        {formMessage && <p className="form-add">The data has been added to your list</p>}
      </form>
    </div>
  );
};
export default FormInput;
