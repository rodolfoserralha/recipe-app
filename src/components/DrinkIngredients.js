import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { drinkRecipe } = props;
  const allIngredientsArray = drinkRecipe.filter(
    (ingredients) => ingredients[0].includes('strIngredient'),
  );
  const ingredientArray = allIngredientsArray.filter(
    (ingredients) => ingredients[1] !== null,
  );

  return (
    <ul>
      {
        ingredientArray.map((ingredients, index) => (
          <li key={ index }>{ingredients[1]}</li>))
      }
    </ul>
  );
}

Ingredients.propTypes = {
  drinkRecipe: PropTypes.arrayOf.isRequired,
};
