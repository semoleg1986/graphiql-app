import Cards from './Cards';
import { render, screen } from '@testing-library/react';

describe('renders learn react link', () => {
  it('render list', () => {
    render(<Cards />);
    expect(screen.getAllByTestId('post').length).toEqual(8);
  });
});
