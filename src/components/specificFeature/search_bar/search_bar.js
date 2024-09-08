import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import TrendBoard from './trend_item';
import { Scrollbars } from 'react-custom-scrollbars-2';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [focused, setFocused] = useState(false);

  const handleKeyword = (value) => {
    setKeyword(value);
  };

  return (
    <div className="relative">
      <IoSearch className="absolute top-1 left-[0.2rem] md:left-[10.3rem] flex text-2xl text-black" />
      <input
        type="text"
        value={keyword}
        onChange={(e) => handleKeyword(e.target.value)}
        className={`w-36 focus:w-48 md:w-80 md:focus:w-96 outline-none ${
          focused ? 'rounded-tl-lg rounded-tr-lg' : 'rounded-lg'
        }  p-2 pl-9 md:ml-40 transition-all duration-500 text-black text-xs`}
        placeholder="검색어를 입력해주세요"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <div
        className={`absolute left-0 md:left-[10rem] ${
          focused ? 'opacity-100 h-96 w-48 md:w-96' : 'opacity-0 h-0 md:w-80 w-36'
        } z-10 rounded-b-lg bg-white shadow-lg duration-500 text-black`}
      >
        <Scrollbars>
          <h1 className="mt-2 ml-1 p-1 mb-[0.6rem] text-sm font-bold text-slate-500">Today's Top Boards</h1>
          {[...Array(6)].map((_, idx) => (
            <TrendBoard key={idx} />
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};

export default SearchBar;
