import { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from './icons';

const Pagination = () => {
  const [active, setActive] = useState(1);

  const handleActive = (pageNumber) => {
    setActive(pageNumber);
  };

  const beforePageNumber = () => {
    if (active !== 1) {
      setActive(active - 1);
    } else {
      setActive(5);
    }
  };
  const nextPageNumber = () => {
    if (active === 5) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  };
  return (
    <div className="flex items-center gap-5">
      <div className="p-1 hover:bg-gray-500 rounded-full cursor-pointer" onClick={() => beforePageNumber()}>
        <LeftArrowIcon className="text-xl text-green-400 hover:bg-gray-500 rounded-full cursor-pointer" />
      </div>

      {[1, 2, 3, 4, 5].map((pageNumber, idx) => (
        <span
          className={`text-sm text-center ${
            active === pageNumber ? 'text-black font-bold bg-white' : 'text-gray-500'
          } w-7 h-7 leading-7 hover:bg-white rounded-full cursor-pointer`}
          onClick={() => handleActive(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <div className="p-1 hover:bg-gray-500 rounded-full cursor-pointer" onClick={() => nextPageNumber()}>
        <RightArrowIcon className="text-xl text-green-400 " />
      </div>
    </div>
  );
};

export default Pagination;
