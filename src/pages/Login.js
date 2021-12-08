import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginProvider from '../context/LoginProvider';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = {
    email,
    password,
  };

  function isValidEmail(userEmail) {
    const regexEmail = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return userEmail.match(regexEmail);
  }

  function validateLogin() {
    const PASSWORD_LENGTH = 6;
    return password.length > PASSWORD_LENGTH && isValidEmail(email);
  }

  function onSubmitLogin(e) {
    e.preventDefault();
    const user = { email };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/comidas');
  }

  return (
    <LoginProvider value={ userData }>
      <form onSubmit={ onSubmitLogin }>
        <input
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !validateLogin() }
        >
          Login
        </button>
      </form>
    </LoginProvider>
  );
}

export default Login;
