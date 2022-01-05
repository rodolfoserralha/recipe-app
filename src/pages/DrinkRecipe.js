import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DrinkCards from '../components/DrinkCards';
import { apiDrinksRecipe } from '../servicesContext/drinksAPI';
import Ingredients from '../components/DrinkIngredients';

export default function DrinkRecipe(props) {
  const { match: { params: { id } } } = props;
  const [drinkRecipe, setDrinkRecipe] = useState({});

  useEffect(() => {
    apiDrinksRecipe(id, setDrinkRecipe);
  }, [id, setDrinkRecipe]);

  return (
    <div>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <br />
      <img
        data-testid="recipe-photo"
        src={ drinkRecipe.strDrinkThumb }
        alt="foto da bebida"
        width="320"
        height="240"
      />
      <h1 data-testid="recipe-title">
        {drinkRecipe.strMeal}
      </h1>
      <span data-testid="instructions">
        Intruções:
        { ' ' }
        { drinkRecipe.strInstructions }
      </span>
      <br />
      <span data-testid="recipe-category">
        Categoria:
        { ' ' }
        {drinkRecipe.strCategory}
      </span>
      <br />
      <span data-testid="0-ingredient-name-and-measure">
        <Ingredients drinkRecipe={ Object.entries(drinkRecipe) } />
      </span>
      <DrinkCards data-testid="0-recomendation-card" />
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

DrinkRecipe.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
