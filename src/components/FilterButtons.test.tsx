import { it, describe, expect, vi, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import FilterButtons from './FilterButtons';

afterEach(() => cleanup());

describe('FilterButtons', () => {
  it('should render a gray button when the category is not matched', () => {
    // ARRANGE
    const name = 'all';
    const category = 'non-done';
    const fakeSetCategory = vi.fn();
    const { getByRole } = render(
      <FilterButtons
        name={name}
        category={category}
        setCategory={fakeSetCategory}
      />
    );
    const button = getByRole('button');

    // ACT
    fireEvent.click(button);

    // ASSERT
    expect(button).toHaveClass('button');
    expect(button).not.toHaveClass('button-active');
    expect(button).toHaveTextContent('all');
    expect(fakeSetCategory).toBeCalledWith('all');
  });

  it('should render a blue button when the category is matched', () => {
    // ARRANGE
    const name = 'non-done';
    const category = 'non-done';
    const fakeSetCategory = vi.fn();
    const { getByRole } = render(
      <FilterButtons
        name={name}
        category={category}
        setCategory={fakeSetCategory}
      />
    );
    const button = getByRole('button');

    // ACT
    fireEvent.click(button);

    // ASSERT
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button-active');
    expect(button).toHaveTextContent('non-done');
    expect(fakeSetCategory).not.toBeCalled();
  });
});
