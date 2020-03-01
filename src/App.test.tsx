import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getByTestId } = render(<App />);
  expect(getByTestId('app')).toBeInTheDocument();
});
