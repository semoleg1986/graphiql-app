import { ICard } from './Card.props';
describe('ICard interface', () => {
  test('has required properties', () => {
    const card: ICard = {
      id: 1,
      title: 'Test Card',
      imageUrl: 'https://example.com/image.png',
      date: '2024-12-01',
      rules: true,
      category: 'Test Category',
      brand: 'Test Brand',
    };

    expect(card).toBeDefined();
    expect(card.id).toBeDefined();
    expect(card.title).toBeDefined();
    expect(card.imageUrl).toBeDefined();
    expect(card.date).toBeDefined();
    expect(card.rules).toBeDefined();
    expect(card.category).toBeDefined();
    expect(card.brand).toBeDefined();
  });
});
