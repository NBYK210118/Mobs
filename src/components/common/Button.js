const Button = ({
  type = 'button',
  children,
  onClick,
  onMouseOver,
  onMouseLeave,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
