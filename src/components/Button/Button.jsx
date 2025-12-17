import "./Button.css";

const Button = ({
  text,
  icon,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="btn-icon">
          <img src={icon} alt="" />
        </span>
      )}

      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;
