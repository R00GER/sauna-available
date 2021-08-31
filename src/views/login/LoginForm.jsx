import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import CustomButtom from '../../components/CustomButton';
import translations from '../../translations';

const useStyles = makeStyles({
  formContainer: {
    width: '50vw',
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#444444B3',
    zIndex: 2,
    borderRadius: 5,
  },
  textField: {
    marginBottom: '.5rem',
  },
  text: {
    color: '#f2f2f2',
  },
  errorMessageContainer: {
    paddingBottom: '1rem',
  },
});

const LoginForm = ({ inputs, errorMessage, credentials, login }) => {
  const classes = useStyles();

  return (
    <div className="login-container">
      <div className={classes.formContainer}>
        <div className={classes.errorMessageContainer}>
          <Typography>{errorMessage && errorMessage}</Typography>
        </div>
        {inputs.map((input) => (
          <TextField
            key={input.name}
            className={classes.textField}
            InputLabelProps={{ className: classes.text }}
            InputProps={{ className: classes.text }}
            variant="outlined"
            label={input.label}
            value={input.value}
            onChange={input.onChange}
          />
        ))}
        <CustomButtom
          value={credentials}
          variant="contained"
          size="large"
          onClick={login}
          text={translations.login}
          disabled={!credentials.username || !credentials.password}
        />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
    })
  ).isRequired,
  errorMessage: PropTypes.string.isRequired,
  credentials: PropTypes.objectOf(PropTypes.string).isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginForm;
