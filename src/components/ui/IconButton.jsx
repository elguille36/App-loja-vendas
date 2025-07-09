// components/ui/buttons/IconButton.jsx
import Button from './Button';
import Icon from './Materialcon';
import PropTypes from 'prop-types';

const IconButton = ({
  iconName,
  ariaLabel,
  ...props
}) => (
  <Button
    aria-label={ariaLabel}
    {...props}
  >
    <Icon name={iconName}></Icon>
  </Button>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default IconButton;