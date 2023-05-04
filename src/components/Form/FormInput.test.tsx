import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render the form correctly', () => {
    const form = render(<FormInput onAddCard={vi.fn()} />);

    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('Brand:')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('Image:')).toBeInTheDocument();
    expect(screen.getByText('I accept the rules.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add new card' })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-02' } });

    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
