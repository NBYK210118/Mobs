import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBarItem = ({ item, selectedSidebar, setSelectedSideBar }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Link
      className={`flex items-center p-3 cursor-pointer transition-all duration-300 ${
        selectedSidebar === item.category ? 'bg-gray-700' : ''
      } hover:bg-gray-700 `}
      to={item.to}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      onClick={() => setSelectedSideBar(item.category)}
    >
      {item.icon}
      <p
        className={`text-xs ${
          selectedSidebar === item.category ? 'text-white font-bold' : 'text-gray-400'
        } font-primary sm:text-sm md:text-base whitespace-nowrap ml-2`}
      >
        {item.category}
      </p>
      <FaArrowRight
        className={`${
          selectedSidebar === item.category ? 'text-white font-bold' : 'text-gray-400'
        } text-lg lg:text-2xl p-1 transition-opacity duration-500 ${
          visible ? 'opacity-100 animate-wiggle' : 'opacity-0'
        }`}
      />
    </Link>
  );
};

export default SideBarItem;
