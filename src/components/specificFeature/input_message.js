import React, { useState } from 'react';
import Input from '../common/Input';
import { CheckIcon } from '../common/icons';

const InputMessage = ({ children, className, value, onChange, type = 'text', isMatched = false, matchedMsg = '' }) => {
  const [focused, setFocused] = useState(false);

  const formatPhoneNumber = (value) => {
    const cleanValue = value.replace(/\D/g, ''); // 숫자만 남기기
    const maxLength = 11; // 최대 11자리까지만 허용
    let formattedNumber = cleanValue;

    if (cleanValue.length > maxLength) {
      formattedNumber = cleanValue.slice(0, maxLength);
      const newNumber = [...formattedNumber];
      newNumber.forEach((_, idx) => {
        if (idx === 2) newNumber[idx] += '-';
        else if (idx === 7) newNumber[idx] += '-';
      });
      const result = newNumber.join('');
      return result;
    }

    if (cleanValue.startsWith('011')) {
      if (cleanValue.length > 3) {
        formattedNumber = `011-${cleanValue.slice(3, 7)}`;
        if (cleanValue.length > 7) {
          formattedNumber += `-${cleanValue.slice(7)}`;
        }
      }
    } else if (cleanValue.startsWith('010')) {
      if (cleanValue.length > 3) {
        formattedNumber = `010-${cleanValue.slice(3, 7)}`;
        if (cleanValue.length > 7) {
          formattedNumber += `-${cleanValue.slice(7)}`;
        }
      }
    } else {
      if (cleanValue.length > 3) {
        formattedNumber = `${cleanValue.slice(0, 3)}-${cleanValue.slice(3, 6)}`;
        if (cleanValue.length > 6) {
          formattedNumber += `-${cleanValue.slice(6)}`;
        }
      }
    }
    return formattedNumber;
  };

  const handleChange = (value) => {
    const inputValue = value;
    const formattedValue = formatPhoneNumber(inputValue);
    onChange(formattedValue);
  };

  if (type === 'phone') {
    return (
      <>
        <Input
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className={`${className} block my-1 p-2 rounded-l-lg shadow outline-none w-56 focus:w-64 focus:outline-2 focus:outline-blue-500 duration-300 text-black`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span
          className={`${focused ? 'opacity-100' : 'opacity-0'} -mt-1 text-xs text-blue-500
      duration-300`}
        >
          {children}
        </span>
      </>
    );
  } else if (type === 'password') {
    return (
      <div className="flex flex-col gap-3">
        <Input
          type="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${className} border border-gray-500 rounded-lg outline-none p-1 bg-gray-800 hover:bg-gray-900 caret-black focus:outline-2 focus:outline-blue-500 duration-300`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {!isMatched && <span className={`text-xs text-red-500 duration-300 m-1`}>{children}</span>}
        {isMatched && (
          <>
            <CheckIcon className="inline-flex text-green-500" />
            <span className={`text-xs text-green-500 duration-300 m-1`}>{matchedMsg}</span>
          </>
        )}
      </div>
    );
  } else {
    return (
      <>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${className} block my-1 p-2 rounded-l-lg shadow outline-none w-56 focus:w-64 focus:outline-2 focus:outline-blue-500 duration-300 text-black `}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span
          className={`${focused ? 'opacity-100' : 'opacity-0'} -mt-1 text-xs text-blue-500
          duration-300`}
        >
          {children}
        </span>
      </>
    );
  }
};

export default React.memo(InputMessage);
