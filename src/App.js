import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Main from './views/main/Main';
import Navigation from './components/Navigation';
import Login from './views/login/Login';

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
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
