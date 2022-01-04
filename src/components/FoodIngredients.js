import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { mealRecipe } = props;
  const allIngredientsArray = mealRecipe.filter(
    (ingredients) => ingredients[0].includes('strIngredient'),
  );
  const ingredientArray = allIngredientsArray.filter(
    (ingredients) => ingredients[1] !== '',
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
  mealRecipe: PropTypes.arrayOf.isRequired,
};
