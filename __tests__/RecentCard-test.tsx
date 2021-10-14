import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RecentCard from '../components/RecentCard';

const item = {
  id: '13',
  title: 'Test',
  price: '123',
  image:
    'https://ih1.redbubble.net/image.2791945092.0034/st,small,507x507-pad,600x600,f8f8f8.png',
  rating: '4.5',
};

describe('Recent card Rendering correctly', () => {
  it('item text testing', () => {
    const { getByText } = render(<RecentCard item={item} />);
    getByText('Test');
  });

  it('Plus button testing', () => {
    const { getByTestId } = render(<RecentCard item={item} />);
    fireEvent.press(getByTestId('PlusButton'));
  });
});
