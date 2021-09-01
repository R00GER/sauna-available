import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import LoginAndRegistrationForm from './LoginAndRegistrationForm';
import loginService from '../../services/login';
import LoginAndRegistrationFormTabs from './LoginAndRegistrationFormTabs';

const useStyles = makeStyles({
  formContainer: {
    width: '50vw',
    // padding: '0 3rem 2rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#444444B3',
    zIndex: 2,
    borderRadius: 5,
  },
});

const Login = ({ setUser }) => {
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [registrationCredentials, setRegistrationCredentials] = useState({
    email: '',
    condominium: '',
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
    setLoginCredentials({ username: '', password: '' });
    setRegistrationCredentials({ email: '', condominium: '' });
  }, [tabIndex]);

  const loginInputs = [
    {
      name: 'username',
      label: t('Common:forms.username'),
      value: loginCredentials.username,
      onChange: (e) =>
        setLoginCredentials({ ...loginCredentials, username: e.target.value.trim() }),
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
      name: 'condominium',
      label: t('Common:forms.condominium'),
      value: registrationCredentials.condominium,
      onChange: (e) =>
        setRegistrationCredentials({
          ...registrationCredentials,
          condominium: e.target.value.trim(),
        }),
    },
  ];

  const login = async () => {
    console.log('login');
    try {
      const { username, condominium } = await loginService.login(loginCredentials);
      localStorage.setItem('user', JSON.stringify({ username, condominium }));
      setUser({ username, condominium });
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessages({ ...errorMessages, login: message });
    }
  };

  const register = () => {
    console.log('register');
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
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
