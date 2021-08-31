import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import translations from '../../translations';
import loginService from '../../services/login';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem('user'));
    if (userLoggedIn) setUser(userLoggedIn);
  }, []);

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
      localStorage.setItem('user', JSON.stringify({ username, condominium }));
      setUser({ username, condominium });
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessage(message);
    }
  };

  return (
    <LoginForm
      inputs={inputs}
      errorMessage={errorMessage}
      credentials={credentials}
      login={login}
    />
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
