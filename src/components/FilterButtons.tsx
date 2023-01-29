type PropsType = {
  name: string;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function FilterButtons({ name, category, setCategory }: PropsType) {
  const handleClick = () => {
    if (category !== name) {
      setCategory(name);
    }
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
