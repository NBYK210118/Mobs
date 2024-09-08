const MainMenuBar = ({ items, active, onClick }) => {
  return (
    <ul className="flex justify-evenly items-center border-b border-slate-500">
      {items.map((item, idx) => (
        <li
          className={`lg:text-base text-xs whitespace-nowrap p-4 mb-1 rounded-full hover:bg-gray-500 cursor-pointer duration-150 ${
            active === item ? 'font-bold opacity-100' : 'opacity-40'
          }`}
          onClick={() => onClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MainMenuBar;
