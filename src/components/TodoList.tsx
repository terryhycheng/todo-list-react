import { TodoType } from '../../types';
import Todo from './Todo';

type PropsType = {
  todos: TodoType[];
  saveToStorage: (todo: TodoType[]) => void;
  category: string;
};

function TodoList({ todos, saveToStorage, category }: PropsType) {
  // filters out a certain todo
  const handleDelete = (id: string) => {
    saveToStorage(todos.filter((todo) => todo.id !== id));
  };

  // updates certain todo with input
  const handleDone = (id: string, status: boolean) => {
    const updatedTodos = todos.map((each_todo) => ({
      id: each_todo.id,
      task: each_todo.task,
      isDone: each_todo.id === id ? status : each_todo.isDone,
    }));
    saveToStorage(updatedTodos);
  };

  // filters the list by categories
  const filter = (list: TodoType[]): TodoType[] => {
    let filteredList = [];
    if (category === 'non-done') {
      filteredList = list.filter((item) => item.isDone === false);
    } else if (category === 'done') {
      filteredList = list.filter((item) => item.isDone === true);
    } else {
      filteredList = list;
    }
    return filteredList;
  };

  const filteredList: TodoType[] = filter(todos);

  return (
    <div className="min-h-[40vh] p-6 sm:p-8 flex flex-col gap-4">
      {!filteredList.length && (
        <div className="flex justify-center items-center text-center m-auto font-light">
          This is an empty list.
        </div>
      )}
      {filteredList.map(({ id, task, isDone }) => (
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
