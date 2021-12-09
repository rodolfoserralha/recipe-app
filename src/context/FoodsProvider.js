import PropTypes from 'prop-types';
import React from 'react';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  return (
    <FoodsContext.Provider>
      { children }
    </FoodsContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
