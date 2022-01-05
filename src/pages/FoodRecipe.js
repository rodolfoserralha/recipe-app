import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeCards from '../components/RecipeCards';
import Ingredients from '../components/FoodIngredients';
import { apiMealsRecipe } from '../servicesContext/mealsApi';

export default function FoodRecipe(props) {
  const { match: { params: { id } } } = props;
  const [mealRecipe, setMealsRecipe] = useState({});

  useEffect(() => {
    apiMealsRecipe(id, setMealsRecipe);
  }, [id, setMealsRecipe]);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ mealRecipe.strMealThumb }
        alt={ mealRecipe.strMeal }
        width="320"
        height="240"
      />
      <h1 data-testid="recipe-title">{mealRecipe.strMeal}</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <span data-testid="recipe-category">{ mealRecipe.strCategory }</span>
      <span data-testid="0-ingredient-name-and-measure">
        <Ingredients mealRecipe={ Object.entries(mealRecipe) } />
      </span>
      <span data-testid="instructions">{ mealRecipe.strInstructions }</span>
      <video data-testid="video" width="320" height="240" controls>
        <source src={ mealRecipe.strYoutube } type="video/youtube" />
        <track kind="captions" src={ mealRecipe.strYoutube } />
        Seu navegador nao suporta tags de vídeo.
      </video>
      <RecipeCards data-testid="0-recomendation-card" />
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

FoodRecipe.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
