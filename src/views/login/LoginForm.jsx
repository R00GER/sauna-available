import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
});

const LoginForm = ({ login }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const classes = useStyles();

  return (
    <div className="login-container">
      <div className={classes.formContainer}>
        <TextField
          className={classes.textField}
          InputLabelProps={{ className: classes.text }}
          InputProps={{ className: classes.text }}
          name="username"
          variant="outlined"
          label={translations.username}
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          className={classes.textField}
          InputLabelProps={{ className: classes.text }}
          InputProps={{ className: classes.text }}
          name="password"
          variant="outlined"
          label={translations.password}
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <CustomButtom
          value={credentials}
          variant="contained"
          size="large"
          onClick={login}
          text={translations.login}
        />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
