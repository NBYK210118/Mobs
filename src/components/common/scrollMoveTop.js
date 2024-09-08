import { useCallback, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollMoveButton = ({ className, iconClassName, value = 0, onClick }) => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    if (value > 1100) setShowBtn(true);
    else setShowBtn(false);
  }, [value]);

  return (
    <div
      className={`transition-all duration-300 ${
        showBtn ? '-translate-y-10 opacity-100' : 'translate-y-20 opacity-0'
      } ${className}`}
      onClick={onClick}
    >
      <FaArrowUp className={iconClassName} />
    </div>
  );
};

export default ScrollMoveButton;
