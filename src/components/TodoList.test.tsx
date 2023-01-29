import { it, describe, expect, vi, afterEach } from 'vitest';
import {
  cleanup,
  fireEvent,
  getAllByLabelText,
  render,
} from '@testing-library/react';
import TodoList from './TodoList';
import { TodoType } from '../../types';

afterEach(() => cleanup());

describe('Todo List', () => {
  it('should render all todos when the category is "all"', () => {
    // ARRANGE
    const todoData = [
      { id: '123-456-789', task: 'wash dishes', isDone: false },
      { id: '456-789-123', task: 'buy groceries', isDone: true },
    ];
    const category = 'all';
    const fakeSaveToStorage = vi.fn();
    const { getByTestId } = render(
      <TodoList
        todos={todoData}
        saveToStorage={fakeSaveToStorage}
        category={category}
      />
    );
    const todoList = getByTestId('todo-list');
    const todos = getAllByLabelText(todoList, 'todo');

    // ASSERT
    expect(todos[0]).toHaveTextContent('wash dishes');
    expect(todos[1]).toHaveTextContent('buy groceries');
  });

  it('should render only done todos when the category is "done"', () => {
    // ARRANGE
    const todoData = [
      { id: '123-456-789', task: 'wash dishes', isDone: false },
      { id: '456-789-123', task: 'buy groceries', isDone: true },
    ];
    const category = 'done';
    const fakeSaveToStorage = vi.fn();
    const { getByLabelText } = render(
      <TodoList
        todos={todoData}
        saveToStorage={fakeSaveToStorage}
        category={category}
      />
    );
    const todo = getByLabelText('todo');

    // ASSERT
    expect(todo).not.toHaveTextContent('wash dishes');
    expect(todo).toHaveTextContent('buy groceries');
  });

  it('should render only non-done todos when the category is "non-done"', () => {
    // ARRANGE
    const todoData = [
      { id: '123-456-789', task: 'wash dishes', isDone: false },
      { id: '456-789-123', task: 'buy groceries', isDone: true },
    ];
    const category = 'non-done';
    const fakeSaveToStorage = vi.fn();
    const { getByLabelText } = render(
      <TodoList
        todos={todoData}
        saveToStorage={fakeSaveToStorage}
        category={category}
      />
    );
    const todo = getByLabelText('todo');

    // ASSERT
    expect(todo).toHaveTextContent('wash dishes');
    expect(todo).not.toHaveTextContent('buy groceries');
  });

  it('should display a message when the list is empty', () => {
    // ARRANGE
    const todoData: TodoType[] = [];
    const category = 'all';
    const fakeSaveToStorage = vi.fn();
    const { getByTestId } = render(
      <TodoList
        todos={todoData}
        saveToStorage={fakeSaveToStorage}
        category={category}
      />
    );
    const todoList = getByTestId('todo-list');

    // ASSERT
    expect(todoList).toHaveTextContent('This is an empty list.');
  });

  it('should handle changing status and deletion correctly', () => {
    // ARRANGE
    const todoData = [
      { id: '456-789-123', task: 'buy groceries', isDone: true },
    ];
    const category = 'all';
    const fakeSaveToStorage = vi.fn();
    const { getByRole } = render(
      <TodoList
        todos={todoData}
        saveToStorage={fakeSaveToStorage}
        category={category}
      />
    );
    const circleButton = getByRole('button', { name: /circle-button/i });
    const deleteIcon = getByRole('button', { name: /delete-icon/i });

    // ACT
    fireEvent.click(circleButton);
    expect(fakeSaveToStorage).toBeCalledWith([
      { id: '456-789-123', task: 'buy groceries', isDone: false },
    ]);

    fireEvent.click(deleteIcon);
    expect(fakeSaveToStorage).toBeCalledWith([]);

    // ASSERT
    expect(fakeSaveToStorage).toBeCalledTimes(2);
  });
});
