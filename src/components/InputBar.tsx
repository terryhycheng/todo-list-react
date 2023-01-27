import { useState } from 'react';

import { ReactComponent as AddIcon } from '../assets/add.svg';

function InputBar() {
  const [inputs, setInputs] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center justify-center mt-8"
    >
      <input
        type="text"
        placeholder="add a new to-do item"
        className="flex-1 bg-[#E0F4F8] p-5 rounded-lg"
        value={inputs}
        onChange={handleChange}
      />
      <AddIcon type="submit" className="cursor-pointer" />
    </form>
  );
}

export default InputBar;
