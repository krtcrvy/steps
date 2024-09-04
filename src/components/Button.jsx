const Button = ({ children, textColor, bgColor, onClick, text, emoji }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
