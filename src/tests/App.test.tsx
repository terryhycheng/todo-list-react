import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders Hello World!', () => {
    // ARRANGE
    render(<App />);

    // ACTION

    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World!'
    );
  });
});
