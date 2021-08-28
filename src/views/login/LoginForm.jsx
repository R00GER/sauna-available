import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomButtom from '../../components/CustomButton';
import translations from '../../translations';
import loginService from '../../services/login';

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

const LoginForm = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();

  const inputs = [
    {
      name: 'username',
      label: translations.username,
      value: credentials.username,
      onChange: (e) => setCredentials({ ...credentials, username: e.target.value.trim() }),
    },
    {
      name: 'password',
      label: translations.password,
      value: credentials.password,
      onChange: (e) => setCredentials({ ...credentials, password: e.target.value.trim() }),
    },
  ];

  const login = async () => {
    try {
      const { username, condominium } = await loginService.login(credentials);
      setUser({ username, condominium });
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessage(message);
    }
  };

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
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
