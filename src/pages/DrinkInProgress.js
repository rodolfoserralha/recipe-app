import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { apiDrinksRecipe } from '../servicesContext/drinksAPI';
import DrinksAndFoodsContext from '../context/Foods&Drinks';
import Ingredients from '../components/DrinkIngredientsInProgr';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function DrinkInProgress(props) {
  const { setRecipeComplete } = useContext(DrinksAndFoodsContext);
  const { match: { params: { id }, url } } = props;
  const [drinkRecipe, setDrinkRecipe] = useState({});
  const [shareButton, setShareButton] = useState(false);

  const { idDrink, strCategory, strAlcoholic, strDrink, strDrinkThumb,
    strInstructions } = drinkRecipe;

  useEffect(() => {
    apiDrinksRecipe(id, setDrinkRecipe);
  }, [id, setDrinkRecipe]);

  function handleShare() {
    setShareButton(true);
    const linkRecipe = `http://localhost:3000${url}`;
    navigator.clipboard.writeText(linkRecipe);
  }

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoritesArray = favorites || [];
  const recipe = [{
    id: idDrink,
    type: 'bebida',
    area: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
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

  return (
    <div>
      Recipe for Drinks in Process
      <h1 data-testid="recipe-title">
        {strDrink}
      </h1>
      <img
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt="foto da bebida"
        width="320"
        height="240"
      />
      <br />
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
      <br />
      <span data-testid="recipe-category">
        Category:
        { ' ' }
        {strAlcoholic}
      </span>
      <br />
      <Ingredients drinkRecipe={ Object.entries(drinkRecipe) } />
      <span data-testid="instructions">
        Instructions:
        { ' ' }
        { strInstructions }
      </span>
      <br />
      <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish-btn"
        onChange={ setRecipeComplete(true) }
      >
        Finish Recipe
      </button>
    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
