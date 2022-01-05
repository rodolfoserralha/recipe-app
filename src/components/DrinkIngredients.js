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
  const allMeasureArray = drinkRecipe.filter(
    (measure) => measure[0].includes('strMeasure'),
  );
  const measureArray = allMeasureArray.filter(
    (measure) => measure[1] !== null,
  );

  return (
    <>
      <span>
        Ingredientes:
        { ' ' }
      </span>
      <ol>
        {
          ingredientArray.map((ingredients, index) => (
            <li key={ index }>{ingredients[1]}</li>))
        }
      </ol>
      <span>
        Medidas:
        { ' ' }
      </span>
      <ol>
        {
          measureArray.map((ingredients, index) => (
            <li key={ index }>{ingredients[1]}</li>))
        }
      </ol>
    </>
  );
}

Ingredients.propTypes = {
  drinkRecipe: PropTypes.arrayOf.isRequired,
};
