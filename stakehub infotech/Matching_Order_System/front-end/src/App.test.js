import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {
  test('renders the initial pending and completed orders', () => {
    render(<App />);
  })

  test('adds a new order to the pending orders table', () => {
    render(<App />);

  })

  test('matches a new order with an existing order and moves it to the completed orders table', () => {
    render(<App />);
  })

})

