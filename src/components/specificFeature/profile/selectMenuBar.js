const SmallMenuBar = ({ items, active, onClick }) => {
  return (
    <ul className="flex justify-around items-center">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`lg:text-base text-xs p-2 rounded-full hover:bg-gray-500 cursor-pointer duration-150 ${
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

export default SmallMenuBar;
