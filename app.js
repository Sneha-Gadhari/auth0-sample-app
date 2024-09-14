// app.js

// Load configuration settings from auth_config.json
fetch('/auth_config.json')
  .then(response => response.json())
  .then(config => {
    const auth0 = new Auth0Client({
      domain: config.domain,
      client_id: config.clientId,
      redirect_uri: window.location.origin
    });

    // Login function
    const loginButton = document.getElementById('login');
    loginButton.addEventListener('click', () => {
      auth0.loginWithRedirect();
    });

    // Logout function
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
      auth0.logout({
        returnTo: window.location.origin
      });
    });

    // Check user session
    async function checkSession() {
      const isAuthenticated = await auth0.isAuthenticated();
      
      if (isAuthenticated) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        const user = await auth0.getUser();
        document.getElementById('user-profile').innerText = JSON.stringify(user, null, 2);
      }
    }

    checkSession();
  });

  