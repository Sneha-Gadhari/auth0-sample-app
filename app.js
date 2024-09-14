import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
    </div>
  );
}

export default App;
