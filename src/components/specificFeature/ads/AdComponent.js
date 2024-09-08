import React, { useEffect, useState } from 'react';
import { CloseIcon } from '../../common/icons';

const AdComponent = ({ className = '', src, topValue, widthHeight, onClose }) => {
  const [closeBtn, setCloseBtn] = useState(false);

  return (
    !closeBtn && (
      <div className={className} style={{ top: topValue }}>
        <div className="relative">
          <img src={src} alt="ads" className={widthHeight} />
          <div
            className="absolute top-[0.3rem] left-[0.45rem] p-1 text-black bg-slate-100/50 cursor-pointer"
            onClick={() => {
              setCloseBtn(true);
              onClose && onClose();
            }}
          >
            <CloseIcon className="" />
          </div>
        </div>
      </div>
    )
  );
};

export default AdComponent;
