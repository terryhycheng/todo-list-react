import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as AddIcon } from '../assets/add.svg';
import { TodoType } from '../../types';

type PropsType = {
  saveToStorage: (list: TodoType[]) => void;
  loadStorage: () => TodoType[];
};

function InputBar({ saveToStorage, loadStorage }: PropsType) {
  const [inputs, setInputs] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputs !== '') {
      const updatedTodos = [
        ...loadStorage(),
        { id: uuidv4(), task: inputs, isDone: false },
      ];
      saveToStorage(updatedTodos);
      setInputs('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value);
  };

  return (
    <form
      aria-label="form"
      onSubmit={handleSubmit}
      className="flex gap-4 items-center justify-center mt-6 sm:mt-8"
    >
      <input
        type="text"
        aria-label="input-field"
        placeholder="add a new to-do item"
        className="flex-1 bg-[#E0F4F8] p-5 rounded-lg"
        value={inputs}
        onChange={handleChange}
      />
      <AddIcon
        aria-label="add-icon"
        role="button"
        type="submit"
        className="cursor-pointer"
      />
    </form>
  );
}

export default InputBar;
