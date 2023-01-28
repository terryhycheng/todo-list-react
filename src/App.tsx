/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from './assets/react.svg';
import { ReactComponent as GitHubLogo } from './assets/github.svg';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';
import { TodoType } from '../types';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // saves the latest todo list to localStorage & calls an refresh
  const saveToStorage = (list: TodoType[]) => {
    localStorage.setItem('todo-list', JSON.stringify(list));
    setTodos(list);
  };

  // returns [] or the todo list from localStorage
  const loadStorage = (): TodoType[] => {
    return JSON.parse(localStorage.getItem('todo-list') || '[]');
  };

  useEffect(() => {
    setTodos(loadStorage());
  }, []);

  return (
    <div className="bg-gradient-to-t from-[#3A7EA4] to-[#37A5B4] h-[100vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[700px] overflow-hidden mx-4">
        {/* Header */}
        <header className="bg-[#EFFAFC] p-10">
          <div className="flex gap-2 items-center justify-center">
            <Logo height="40px" />
            <h1 className="text-center text-4xl font-bold">Todo List</h1>
          </div>
          <InputBar saveToStorage={saveToStorage} loadStorage={loadStorage} />
        </header>
        <main>
          {/* Buttons */}
          <div className="flex justify-around">
            <button type="button" className="button button-active">
              All
            </button>
            <button type="button" className="button">
              non-done
            </button>
            <button type="button" className="button">
              done
            </button>
          </div>
          {/* Todo List */}
          <div className="max-h-[50vh] overflow-auto">
            <TodoList todos={todos} saveToStorage={saveToStorage} />
          </div>
        </main>
        {/* Footer */}
        <footer className="flex justify-between items-center p-8 border-t">
          <p className="uppercase tracking-widest text-xs">
            designed & built by
          </p>
          <div className="flex font-bold gap-3 text-base">
            <a
              href="https://github.com/terryhycheng"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogo height="26px" />
            </a>
            terryhycheng
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
