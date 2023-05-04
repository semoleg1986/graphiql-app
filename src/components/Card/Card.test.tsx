import Card from './Card';
import { render, screen } from '@testing-library/react';

const data = {
  id: 1,
  title: 'iPhone 9',
  price: 549,
  brand: 'Apple',
  category: 'smartphones',
  imageUrl: 'https://picsum.photos/id/1/300/200',
  rules: false,
  date: '07.12.2020',
};

describe('renders learn react link', () => {
  it('render list', () => {
    render(<Card product={data} />);
    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByAltText(data.title)).toBeInTheDocument();
    expect(screen.getAllByTestId('post').length).toEqual(1);
  });
});
