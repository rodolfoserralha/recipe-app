import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinksAndFoodsContext from './Foods&Drinks';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [recipeComplete, setRecipeComplete] = useState(false);
  const [startRecipe, setStartRecipe] = useState(true);

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    recipeComplete,
    setRecipeComplete,
    startRecipe,
    setStartRecipe,
  };

  return (
    <DrinksAndFoodsContext.Provider value={ contextValue }>
      {children}
    </DrinksAndFoodsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
