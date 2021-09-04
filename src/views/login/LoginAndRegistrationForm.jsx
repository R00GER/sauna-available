import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, makeStyles, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomButtom from '../../components/CustomButton';

const useStyles = makeStyles({
  textField: {
    marginBottom: '.5rem',
  },
  text: {
    color: '#f2f2f2',
  },
  errorMessageContainer: {
    paddingBottom: '2rem',
  },
  icon: {
    color: '#f2f2f2',
  },
});

const LoginAndRegistrationForm = ({ inputs, errorMessage, value, onClick, btnText, icon }) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const disabled = Object.values(value).some((v) => v === '');

  return (
    <div style={{ padding: '0 3rem 2rem 3rem', display: 'flex', flexDirection: 'column' }}>
      {inputs.map((input) => (
        <TextField
          key={input.name}
          type={input.name === 'password' && !showPassword ? 'password' : 'text'}
          className={classes.textField}
          InputLabelProps={{ className: classes.text }}
          InputProps={{
            className: classes.text,
            classes: {
              adornedEnd: classes.icon,
            },
            endAdornment:
              input.name === 'password' ? (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <InputAdornment className={classes.icon} position="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                </IconButton>
              ) : undefined,
          }}
          variant="outlined"
          label={input.label}
          value={input.value}
          onChange={input.onChange}
        />
      ))}
      <div className={classes.errorMessageContainer}>
        <Typography>{errorMessage && errorMessage}</Typography>
      </div>
      <CustomButtom
        value={value}
        variant="contained"
        size="large"
        onClick={onClick}
        text={btnText}
        disabled={disabled}
        icon={icon}
      />
    </div>
  );
};

LoginAndRegistrationForm.propTypes = {
  inputs: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string,
        condominium: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
      })
    ),
  ]).isRequired,
  errorMessage: PropTypes.string.isRequired,
  value: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default LoginAndRegistrationForm;
