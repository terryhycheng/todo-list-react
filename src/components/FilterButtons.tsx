type PropsType = {
  name: string;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function FilterButtons({ name, category, setCategory }: PropsType) {
  const handleClick = () => {
    setCategory(name);
  };

  return (
    <button
      type="button"
      className={`button ${category === name && 'button-active'} capitalize`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default FilterButtons;
