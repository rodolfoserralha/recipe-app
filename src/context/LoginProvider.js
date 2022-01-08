import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const contextValue = {
    user: {
      email,
      password,
    },
    setEmail,
    setPassword,
  };
  return (
    <LoginContext.Provider value={ contextValue }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
