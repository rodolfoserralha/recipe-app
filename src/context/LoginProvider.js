import PropTypes from 'prop-types';
import React from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  return (
    <LoginContext.Provider>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
