import React, { useState, useRef, useEffect } from 'react';

const TextArea = ({ value = '', onChange, style, className = '', placeholder = '' }) => {
  const textAreaRef = useRef(null);

  const adjustHeight = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = 'auto'; // Reset the height
    textArea.style.height = `${textArea.scrollHeight}px`; // Set to the scrollHeight
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={onChange}
      className={className}
      style={style}
      placeholder={placeholder}
      spellCheck={false}
    />
  );
};

export default TextArea;
