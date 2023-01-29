import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

afterEach(() => cleanup());

describe('Todo', () => {
  it('should render a non-done todo correctly', () => {
    // ARRANGE
    const fakeHandleDelete = vi.fn();
    const fakeHandleDone = vi.fn();
    const todo = { id: '123-456-789', task: 'wash dishes', isDone: false };
    const { getByRole, getByTestId } = render(
      <Todo
        id={todo.id}
        task={todo.task}
        isDone={todo.isDone}
        handleDelete={fakeHandleDelete}
        handleDone={fakeHandleDone}
      />
    );
    const circleButton = getByRole('button');
    const deleteIcon = getByTestId('delete-icon');
    const textContainer = getByTestId('text-container');

    // ACT
    fireEvent.click(circleButton);
    fireEvent.click(deleteIcon);

    // ASSERT
    expect(circleButton).toBeInTheDocument();
    expect(circleButton).not.toHaveClass('bg-[#00D8FF]');
    expect(deleteIcon).toBeInTheDocument();
    expect(textContainer).toHaveTextContent('wash dishes');
    expect(textContainer).not.toHaveClass('line-through');
    expect(textContainer).not.toHaveClass('text-[#D3D3D3]');
    expect(fakeHandleDone).toBeCalledWith('123-456-789', true);
    expect(fakeHandleDelete).toBeCalledWith('123-456-789');
  });

  it('should render a done todo correctly', () => {
    // ARRANGE
    const fakeHandleDelete = vi.fn();
    const fakeHandleDone = vi.fn();
    const todo = { id: '123-456-789', task: 'wash dishes', isDone: true };
    const { getByRole, getByTestId } = render(
      <Todo
        id={todo.id}
        task={todo.task}
        isDone={todo.isDone}
        handleDelete={fakeHandleDelete}
        handleDone={fakeHandleDone}
      />
    );
    const circleButton = getByRole('button');
    const deleteIcon = getByTestId('delete-icon');
    const textContainer = getByTestId('text-container');

    // ACT
    fireEvent.click(circleButton);
    fireEvent.click(deleteIcon);

    // ASSERT
    expect(circleButton).toBeInTheDocument();
    expect(circleButton).toHaveClass('bg-[#00D8FF]');
    expect(deleteIcon).toBeInTheDocument();
    expect(textContainer).toHaveTextContent('wash dishes');
    expect(textContainer).toHaveClass('text-[#D3D3D3]');
    expect(textContainer).toHaveClass('line-through');
    expect(fakeHandleDone).toBeCalledWith('123-456-789', false);
    expect(fakeHandleDelete).toBeCalledWith('123-456-789');
  });
});
