import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-nnto53nv3z3z11bt.us.auth0.com"
    clientId="YMt23QMn2ICBYvWMC9Az5E9adMwYWMe3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);