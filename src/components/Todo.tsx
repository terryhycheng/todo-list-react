import { FC, useState } from 'react';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';

type PropsType = {
  task: string;
};

function Todo({ task }: PropsType) {
  const [isDone, setIsDone] = useState(false);

  const handleChange = () => setIsDone(!isDone);

  return (
    <div
      className={`border p-6 rounded-lg flex gap-6 items-center ${
        isDone && 'bg-[#EFFCFE] border-[#EFFCFE]'
      }`}
    >
      <button
        className={`border w-6 h-6 rounded-full ${
          isDone && 'bg-[#00D8FF] border-none'
        }`}
        onClick={handleChange}
        type="button"
      >
        {}
      </button>
      <div
        className={`flex-1 font-thin text-lg capitalize ${
          isDone && 'text-[#D3D3D3] line-through'
        }`}
      >
        {task}
      </div>
      <DeleteIcon height="28px" className="cursor-pointer" />
    </div>
  );
}

export default Todo;
