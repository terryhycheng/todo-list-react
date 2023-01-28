import { TodoType } from '../../types';
import Todo from './Todo';

type PropsType = {
  todos: TodoType[];
  saveToStorage: (todo: TodoType[]) => void;
};

function TodoList({ todos, saveToStorage }: PropsType) {
  // filter out a certain todo
  const handleDelete = (id: string) => {
    saveToStorage(todos.filter((todo) => todo.id !== id));
  };

  // update certain todo with input
  const handleDone = (id: string, status: boolean) => {
    const updatedTodos = todos.map((each_todo) => ({
      id: each_todo.id,
      task: each_todo.task,
      isDone: each_todo.id === id ? status : each_todo.isDone,
    }));
    saveToStorage(updatedTodos);
  };

  return (
    <div className="min-h-[40vh] p-8 flex flex-col gap-4">
      {!todos.length && (
        <div className="flex justify-center items-center text-center m-auto font-light">
          The list is empty. Please add a new todo.
        </div>
      )}
      {todos.map(({ id, task, isDone }) => (
        <Todo
          key={id}
          id={id}
          task={task}
          isDone={isDone}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
    </div>
  );
}

export default TodoList;
