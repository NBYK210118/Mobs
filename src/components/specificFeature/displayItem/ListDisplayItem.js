import React, { useState } from 'react';
import Percentage from '../vote/Percentage';

const ListDisplayItem = ({ item, hasPolls = false }) => {
  const [percentA, setPercentA] = useState(0);
  const [percentB, setPercentB] = useState(0);

  return (
    <div className={`p-5 rounded shadow flex items-center`}>
      <div className="mr-8">
        <img src="https://via.placeholder.com/150" alt="이미지" className="" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-xs md:text-sm font-bold">{item.category}</p>
        <h2 className="text-xs md:text-sm font-bold">{item.title}</h2>
        <p className="text-xs md:text-sm text-gray-500">{item.author}</p>
        {hasPolls && (
          <>
            <p className="whitespace-nowrap text-[0.5rem] md:text-sm mt-2 text-green-500">진행 중인 투표가 있습니다!</p>
            <Percentage percentA={60} percentB={40} />
          </>
        )}
      </div>
    </div>
  );
};

export default ListDisplayItem;
