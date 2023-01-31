import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => cleanup());

describe('App', () => {
  it('should render the logo and title', () => {
    render(<App />);
    expect(screen.getByLabelText('react-logo')).toBeInTheDocument();
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
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('add a new to-do item')
    ).toBeInTheDocument();
  });

  it('should render the list of todos', () => {
    render(<App />);
    expect(screen.getByLabelText('todo-list')).toBeInTheDocument();
  });

  it('should have header, main and footer tags', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should have a footer with correct content', () => {
    const { getByLabelText, getByRole } = render(<App />);
    const footer = getByRole('contentinfo');
    const anchor = getByRole('link', { name: 'github-link' });
    const githubLogo = getByLabelText('github-logo');
    expect(footer).toHaveTextContent('designed & built by');
    expect(footer).toHaveTextContent('terryhycheng');
    expect(anchor).toHaveAttribute('href', 'https://github.com/terryhycheng');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(githubLogo).toBeInTheDocument();
  });
});
