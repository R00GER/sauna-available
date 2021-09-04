import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const CustomButtom = ({
  customStyles,
  variant,
  size,
  onClick,
  value,
  text,
  icon,
  iconProps,
  disabled,
}) => {
  const iconElement = icon && React.cloneElement(icon, { ...iconProps }, null);

  return (
    <Button
      style={
        !customStyles
          ? { background: '#1FC58E', color: 'rgb(233, 233, 233)', fontSize: '0.8rem' }
          : { ...customStyles }
      }
      variant={variant}
      size={size}
      startIcon={iconElement}
      onClick={() => {
        if (onClick) {
          onClick(value);
        }
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

CustomButtom.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconProps: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  customStyles: PropTypes.objectOf(PropTypes.string),
};

CustomButtom.defaultProps = {
  onClick: undefined,
  value: undefined,
  icon: undefined,
  iconProps: undefined,
  disabled: undefined,
  customStyles: undefined,
};

export default CustomButtom;
