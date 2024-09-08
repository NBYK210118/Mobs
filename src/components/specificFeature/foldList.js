import { useState } from 'react';
import { FoldDownIcon, FoldUpIcon, Images } from '../common/icons';

const FoldList = ({ labelName = '', data = [...Array(5)], bgColor = '' }) => {
  const [openClick, setOpenClick] = useState(true);
  const [mouseOver, setMouseOver] = useState(false);

  let bg_color;
  if (bgColor === 'indigo') bg_color = 'bg-indigo-500 hover:bg-indigo-600';
  else if (bgColor === 'blue') bg_color = 'bg-blue-500 hover:bg-blue-600';
  else if (bgColor === 'green') bg_color = 'bg-green-500 hover:bg-green-600';

  const handleOpen = () => {
    setOpenClick(!openClick);
  };

  return (
    <div className="block mb-4 font-bold">
      <div
        className={`flex flex-col justify-around items-center p-2 ${bg_color} text-white shadow-lg rounded-lg cursor-pointer duration-300`}
        onClick={() => handleOpen()}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <div className="flex items-center">
          <span className="side text-lg mr-1">{`${labelName} (${data.length})`}</span>
          {openClick ? (
            <FoldUpIcon className={`text-3xl p-1 ${mouseOver ? 'animate-upfinit' : ''}`} />
          ) : (
            <FoldDownIcon className={`text-3xl p-1 ${mouseOver ? 'animate-down' : ''}`} />
          )}
        </div>
        <div
          className={`grid grid-cols-4 gap-5 md:flex md:flex-wrap md:justify-around ${
            openClick ? 'opacity-100 h-28' : 'opacity-0 h-0'
          }  transition-all duration-300`}
        >
          {[...Array(5)].map((_, idx) => (
            <img key={`img-1-${idx}`} src={Images.juice1} alt="X" className="w-[90px] h-[90px] m-1" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoldList;
