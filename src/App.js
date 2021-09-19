import React, { useState, Suspense } from 'react';
import Calendar from './components/Calendar';
import Main from './views/main/Main';
import Navigation from './components/Navigation';
import Login from './views/login/Login';

const App = () => {
  const [user, setUser] = useState({ email: '', condominium: '' });

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Navigation user={user} />
        {user.email ? (
          <>
            <Main condominium={user.condominium} />
            <Calendar user={user} />
          </>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Suspense>
  );
};

export default App;
