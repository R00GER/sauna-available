import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Main from './views/main/Main';
import Navigation from './components/Navigation';
import LoginForm from './views/login/LoginForm';

const App = () => {
  const [user, setUser] = useState('');

  const login = ({ username, password }) => {
    const log = 'admin';

    if (username === log && password === log) setUser(true);
  };

  return (
    <div className="App">
      <Navigation user={user} />
      {user ? (
        <>
          <Main />
          <Calendar />
        </>
      ) : (
        <LoginForm setUser={setUser} login={login} />
      )}
    </div>
  );
};

export default App;
