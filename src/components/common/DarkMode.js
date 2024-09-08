import { useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

const DarkMode = () => {
  const [dark, setIsDark] = useState(false);
  const handleMove = () => {
    setIsDark(!dark);
  };
  return (
    <div className="relative inline-flex justify-around items-center w-28 h-10 rounded-3xl shadow-md shadow-yellow-100">
      <div
        className={`w-1/2 h-full pt-1 ${dark ? 'bg-blue-500' : 'bg-white'} rounded-l-3xl cursor-pointer duration-300`}
        onClick={() => handleMove()}
      >
        <SunIcon className=" text-red-400 text-3xl ml-2" />
      </div>
      <div
        className={`w-1/2 h-full pt-1 ${dark ? 'bg-white' : 'bg-black'} rounded-r-3xl cursor-pointer duration-300`}
        onClick={() => handleMove()}
      >
        <MoonIcon className="text-yellow-500 text-3xl ml-4" />
      </div>
      <span
        className={`absolute ${
          dark ? 'translate-x-9 ' : '-translate-x-9 '
        } transition-all ease-in-out duration-500 w-10 h-10 bg-gray-500 opacity-80 rounded-full shadow-lg`}
      />
    </div>
  );
};

export default DarkMode;
