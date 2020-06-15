import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app title', () => {
  const { getByText } = render(<App />);
  const title = getByText("Todo List");
  expect(title).toBeInTheDocument();
});