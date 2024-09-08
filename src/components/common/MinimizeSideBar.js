import { Link, useNavigate } from 'react-router-dom';
import { sidebaritems } from '../../sample_data/sample_data';

const MinimizeSideBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col justify-around absolute group border-[0.5px] border-slate-800 rounded-lg shadow-lg ml-5">
      {sidebaritems.map((item, idx) => (
        <li
          className={`${idx === 0 ? 'rounded-t-lg' : ''} ${
            idx === sidebaritems.length - 1 ? 'rounded-b-lg' : ''
          } md:flex items-center hover:bg-slate-100/15 hidden md:w-[3.4rem] md:group-hover:w-[11.5rem] p-2 cursor-pointer`}
          key={`li-${idx}`}
          onClick={() => navigate(item.to)}
        >
          <Link to={item.to}>{item.icon}</Link>
          <span className="side text-base md:text-xl opacity-0 group-hover:opacity-100 ml-3 whitespace-nowrap transition-all duration-300">
            {item.category}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MinimizeSideBar;
