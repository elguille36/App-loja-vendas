
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${className}`.trim()}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;