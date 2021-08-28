import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Main from './views/main/Main';
import Navigation from './components/Navigation';
import LoginForm from './views/login/LoginForm';

const App = () => {
  const [user, setUser] = useState({ username: '', condominium: '' });

  return (
    <div className="App">
      <Navigation user={user} />
      {user.username ? (
        <>
          <Main condominium={user.condominium} />
          <Calendar />
        </>
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
};

export default App;
