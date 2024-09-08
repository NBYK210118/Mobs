import React, { useState } from 'react';
import { IoIosAlbums } from 'react-icons/io';
import { FaThList } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';

const LayoutSelector = ({ onSelectLayout }) => {
  const [selectedLayout, setSelectedLayout] = useState('list');

  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
    if (onSelectLayout) onSelectLayout(layout);
  };

  return (
    <div className="opacity-0 transition duration-300 group-hover:opacity-100 absolute flex flex-col top-[1%] right-0 p-4 bg-slate-400 rounded-lg space-y-5">
      <button
        className={`p-2 mx-1 text-xs sm:text-base transition-all ${
          selectedLayout === 'album' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-slate-400'
        }`}
        onClick={() => handleLayoutChange('album')}
      >
        <IoIosAlbums />
      </button>
      <button
        className={`p-2 mx-1 text-xs sm:text-base transition-all ${
          selectedLayout === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-slate-400'
        }`}
        onClick={() => handleLayoutChange('list')}
      >
        <FaThList />
      </button>
      <button
        className={`p-2 mx-1 text-xs sm:text-base transition-all ${
          selectedLayout === 'feed' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-slate-400 '
        }`}
        onClick={() => handleLayoutChange('feed')}
      >
        <MdSpaceDashboard />
      </button>
    </div>
  );
};

export default LayoutSelector;
