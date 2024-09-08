const Input = ({
  type = 'text',
  value,
  onChange,
  onFocus,
  onBlur,
  className = '',
  placeholder = '',
  required = false,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
