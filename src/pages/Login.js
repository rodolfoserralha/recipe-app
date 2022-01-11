import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function Login() {
  const history = useHistory();
  const {
    user: {
      email,
      password,
    },
    setEmail,
    setPassword,

  } = useContext(LoginContext);

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
    <div id="login-father">
      <div id="login-container">
        <form id="login-form" onSubmit={ onSubmitLogin }>
          <h2 id="recipe-app">Recipe App</h2>
          <input
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            placeholder="Email"
          />
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            placeholder="Senha"
          />
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ !validateLogin() }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
