import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LoginAndRegistrationForm from './LoginAndRegistrationForm';
import loginService from '../../services/login';
import registrationService from '../../services/registration';
import LoginAndRegistrationFormTabs from './LoginAndRegistrationFormTabs';

const useStyles = makeStyles({
  formContainer: {
    width: '50vw',
    // padding: '0 3rem 2rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#000000B3',
    zIndex: 2,
    borderRadius: 5,
  },
});

const Login = ({ setUser }) => {
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
  const [registrationCredentials, setRegistrationCredentials] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({ login: '', registration: '' });
  const [tabIndex, setTabIndex] = useState(0);

  const { t } = useTranslation('Common');

  const classes = useStyles();

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem('user'));
    if (userLoggedIn) setUser(userLoggedIn);
  }, []);

  useEffect(() => {
    setLoginCredentials({ email: '', password: '' });
    setRegistrationCredentials({ email: '', password: '' });
  }, [tabIndex]);

  const loginInputs = [
    {
      name: 'email',
      label: t('Common:forms.email'),
      value: loginCredentials.email,
      onChange: (e) => setLoginCredentials({ ...loginCredentials, email: e.target.value.trim() }),
    },
    {
      name: 'password',
      label: t('Common:forms.password'),
      value: loginCredentials.password,
      onChange: (e) =>
        setLoginCredentials({ ...loginCredentials, password: e.target.value.trim() }),
    },
  ];

  const signInInputs = [
    {
      name: 'email',
      label: t('Common:forms.email'),
      value: registrationCredentials.email,
      onChange: (e) =>
        setRegistrationCredentials({ ...registrationCredentials, email: e.target.value.trim() }),
    },
    {
      name: 'password',
      label: t('Common:forms.password'),
      value: registrationCredentials.password,
      onChange: (e) =>
        setRegistrationCredentials({
          ...registrationCredentials,
          password: e.target.value.trim(),
        }),
    },
  ];

  const login = async () => {
    try {
      const { username, condominium } = await loginService.login(loginCredentials);
      localStorage.setItem('user', JSON.stringify({ username, condominium }));
      setUser({ username, condominium });
      setLoginCredentials({ email: '', password: '' });
      setErrorMessages({ ...errorMessages, registration: '' });
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessages({ ...errorMessages, login: message });
    }
  };

  const register = async () => {
    try {
      const response = await registrationService.register(registrationCredentials);
      console.log(response);
      setRegistrationCredentials({ email: '', password: '' });
      setTimeout(() => setTabIndex(0), 800);
      setErrorMessages({ ...errorMessages, registration: '' });
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessages({ ...errorMessages, registration: message });
    }
  };

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  return (
    <div className="login-container">
      <div className={classes.formContainer}>
        <LoginAndRegistrationFormTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
        <LoginAndRegistrationForm
          inputs={!tabIndex ? loginInputs : signInInputs}
          errorMessage={!tabIndex ? errorMessages.login : errorMessages.registration}
          value={!tabIndex ? loginCredentials : registrationCredentials}
          onClick={!tabIndex ? login : register}
          btnText={!tabIndex ? t('Common:forms.signIn') : t('Common:forms.signUp')}
          icon={!tabIndex ? <LockOpenIcon /> : <PostAddIcon />}
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
