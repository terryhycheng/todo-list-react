import { fireEvent, render } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import InputBar from './InputBar';

describe('InputBar', () => {
  it('should not submit anything if the input field is empty', () => {
    // ARRANGE
    const fakeSaveToStorage = vi.fn();
    const fakeLoadStorage = vi.fn();

    const { getByRole, getByPlaceholderText } = render(
      <InputBar
        saveToStorage={fakeSaveToStorage}
        loadStorage={fakeLoadStorage}
      />
    );

    const input = getByPlaceholderText('add a new to-do item');
    const addIcon = getByRole('button', { name: 'add-icon' });

    // ACT
    fireEvent.keyDown(input, { key: 'Enter' });
    fireEvent.click(addIcon);

    // ASSERT
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(fakeSaveToStorage).not.toBeCalled();
  });

  it('should submit the user input correctly', () => {
    // ARRANGE
    const fakeSaveToStorage = vi.fn();
    const fakeLoadStorage = vi.fn(() => []);

    const { getByRole, getByLabelText, getByDisplayValue } = render(
      <InputBar
        saveToStorage={fakeSaveToStorage}
        loadStorage={fakeLoadStorage}
      />
    );

    const input = getByLabelText('input-field');
    const addIcon = getByRole('button', { name: 'add-icon' });

    // ACT & ASSERT
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'wash dishes' } });
    expect(input).toHaveValue('wash dishes');
    expect(getByDisplayValue('wash dishes')).toBeInTheDocument();
    fireEvent.click(addIcon);
    expect(input).toHaveValue('');
    expect(fakeSaveToStorage).toBeCalled();
  });
});
