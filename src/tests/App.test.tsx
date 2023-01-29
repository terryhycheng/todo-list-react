import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(() => cleanup());

describe('App', () => {
  it('should render the logo and title', () => {
    render(<App />);
    expect(screen.getByTestId('react-logo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Todo List'
    );
  });

  it('should have correct gradient background colors', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('from-[#3A7EA4]');
    expect(container.firstChild).toHaveClass('to-[#37A5B4]');
  });

  it('should render an input bar component', () => {
    render(<App />);
    expect(screen.getByTestId('input-bar')).toBeInTheDocument();
  });

  it('should render the list of todos', () => {
    render(<App />);
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  it('should have header, main and footer tags', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should have a footer with correct content', () => {
    const { getByTestId } = render(<App />);
    const footer = getByTestId('footer');
    const anchor = getByTestId('github-link');
    const githubLogo = getByTestId('github-logo');
    expect(footer).toHaveTextContent('designed & built by');
    expect(footer).toHaveTextContent('terryhycheng');
    expect(anchor).toHaveAttribute('href', 'https://github.com/terryhycheng');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(githubLogo).toBeInTheDocument();
  });
});
