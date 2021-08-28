import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const CustomButtom = ({ variant, size, onClick, value, text, icon, iconProps }) => {
  const iconElement = icon && React.cloneElement(icon, { ...iconProps }, null);

  return (
    <Button
      style={{ background: '#1FC58E', color: 'rgb(233, 233, 233)' }}
      variant={variant}
      size={size}
      startIcon={iconElement}
      onClick={() => {
        if (onClick) {
          onClick(value);
        }
      }}
    >
      {text}
    </Button>
  );
};

CustomButtom.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconProps: PropTypes.instanceOf(Object),
};

CustomButtom.defaultProps = {
  onClick: undefined,
  value: undefined,
  icon: undefined,
  iconProps: undefined,
};

export default CustomButtom;
