import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiMealsRecipe } from '../servicesContext/mealsApi';
import Ingredients from '../components/FoodIngredientsInProgr';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FoodInProgress(props) {
  const { match: { params: { id }, url } } = props;
  const [mealRecipe, setMealsRecipe] = useState({});
  const [shareButton, setShareButton] = useState(false);

  const { idMeal, strArea, strCategory, strMeal, strMealThumb,
    strInstructions } = mealRecipe;

  useEffect(() => {
    apiMealsRecipe(id, setMealsRecipe);
  }, [id, setMealsRecipe]);

  function handleShare() {
    setShareButton(true);
    const linkRecipe = `http://localhost:3000${url}`;
    navigator.clipboard.writeText(linkRecipe);
  }

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoritesArray = favorites || [];
  const recipe = [{
    id: idMeal,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
  }];
  const saveArray = [...favoritesArray, ...recipe];
  const saveRecipes = JSON.stringify(saveArray);
  const removeFromArray = favoritesArray.filter((favorite) => favorite.id !== id);
  const removedRecipe = JSON.stringify(removeFromArray);

  function isFavorite() {
    return favoritesArray.some((favorite) => favorite.id === id);
  }
  const [favoriteButton, setFavoriteButton] = useState(isFavorite());

  function handleFavorite() {
    if (!favoriteButton) {
      localStorage.setItem('favoriteRecipes', saveRecipes);
    } else localStorage.setItem('favoriteRecipes', removedRecipe);
    setFavoriteButton(!favoriteButton);
  }

  //

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const doneRecipesArray = doneRecipes || [];
  let doneRecipe = [{
    id: idMeal,
    type: 'comida',
    name: strMeal,
    done: false,
  }];

  const saveDoneRecipesArray = [...doneRecipesArray, ...doneRecipe];
  const saveDoneRecipes = JSON.stringify(saveDoneRecipesArray);
  localStorage.setItem('doneRecipes', saveDoneRecipes);

  function handleRecipeComplete() {
    doneRecipe = [{
      id: idMeal,
      type: 'comida',
      name: strMeal,
      done: true,
    }];
    localStorage.setItem('doneRecipes', saveDoneRecipes);
  }

  return (
    <div className="recipe-details">
      <h1 data-testid="recipe-title">
        {strMeal}
      </h1>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt="foto da comida"
        width="320"
        height="240"
      />
      <div>
        <button
          type="button"
          id="share-btn"
          data-testid="share-btn"
          onClick={ handleShare }
        >
          <img src={ shareIcon } alt="Share Icon" />
        </button>
        {shareButton && <span>Link copiado!</span>}
        <button
          type="button"
          id="favorite-btn"
          onClick={ handleFavorite }
          src={ favoriteButton ? { blackHeartIcon } : { whiteHeartIcon } }
        >
          { favoriteButton
            ? (
              <img
                data-testid="favorite-btn"
                src={ blackHeartIcon }
                alt="Black Heart Icon"
                width="26px"
              />)
            : (
              <img
                data-testid="favorite-btn"
                src={ whiteHeartIcon }
                alt="White Heart Icon"
              />)}
        </button>
      </div>
      <span data-testid="recipe-category">
        Category:
        { ' ' }
        {strCategory}
      </span>
      <Ingredients mealRecipe={ Object.entries(mealRecipe) } />
      <span data-testid="instructions">
        Instructions:
        { ' ' }
        { strInstructions }
      </span>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish-btn"
        className="footer-btns"
        onClick={ handleRecipeComplete }
      >
        Finish Recipe
      </button>
    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
