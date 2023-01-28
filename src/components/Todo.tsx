import { TodoType } from '../../types';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';

interface PropsType extends TodoType {
  handleDelete: (id: string) => void;
  handleDone: (id: string, status: boolean) => void;
}

function Todo({ id, task, isDone, handleDelete, handleDone }: PropsType) {
  const handleChange = () => handleDone(id, !isDone);

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
      <DeleteIcon
        height="28px"
        className="cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}

export default Todo;
