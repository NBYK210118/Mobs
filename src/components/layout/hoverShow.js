import { FaChevronLeft } from 'react-icons/fa';
const HoverShow = ({ children }) => {
  return (
    <div className="group absolute z-10 top-[30%] right-0 cursor-pointer">
      <div className={`transition opacity-100 group-hover:opacity-0 bg-slate-500 w-10 h-40 rounded-l-lg`}>
        <FaChevronLeft className="absolute right-3 top-[44%]" />
      </div>
      {children}
    </div>
  );
};

export default HoverShow;
