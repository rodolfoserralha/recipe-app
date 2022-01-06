import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DrinkCards from '../components/DrinkCards';
import Ingredients from '../components/FoodIngredients';
import { apiMealsRecipe } from '../servicesContext/mealsApi';
import { drinkApiDidMount } from '../servicesContext/drinksAPI';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function FoodRecipe(props) {
  const { match: { params: { id }, url } } = props;
  const [mealRecipe, setMealsRecipe] = useState({});
  const [drink, setDrink] = useState([]);
  const [shareButton, setShareButton] = useState(false);

  const {
    recipeComplete,
    startRecipe,
    setStartRecipe } = useContext(DrinksAndFoodsContext);

  const SIX = 6;
  const link = mealRecipe.strYoutube;
  const { idMeal, strArea, strCategory, strMeal, strMealThumb,
    strInstructions } = mealRecipe;

  useEffect(() => {
    apiMealsRecipe(id, setMealsRecipe);
  }, [id, setMealsRecipe]);

  useEffect(() => {
    drinkApiDidMount(setDrink);
  }, [setDrink]);

  function handleClick() {
    setStartRecipe(!startRecipe);
  }

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
    return !!localStorage.getItem('favoriteRecipes');
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
      <h1 data-testid="recipe-title">
        {strMeal}
      </h1>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
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
        { strCategory }
      </span>
      <br />
      <Ingredients mealRecipe={ Object.entries(mealRecipe) } />
      <span data-testid="instructions">
        Instructions:
        { ' ' }
        { strInstructions }
      </span>
      <br />
      <iframe
        title="video"
        data-testid="video"
        width="320"
        height="240"
        src={ `https://www.youtube.com/embed/${link !== undefined && link.split('v=')[1]}` }
      >
        Your browser does not support the video tag.
      </iframe>
      <div data-testid="0-recomendation-card">
        <span>Side Dishes Recommendeds:</span>
        <br />
        { drink && drink.slice(0, SIX).map((drinks, index) => (
          <DrinkCards
            key={ drinks.idDrink }
            index={ index }
            idDrink={ drinks.idDrink }
            strDrink={ drinks.strDrink }
            strDrinkThumb={ drinks.strDrinkThumb }
          />
        )) }
      </div>
      <Link to={ `/comidas/${id}/in-progress` }>
        { recipeComplete ? ''
          : (
            <button
              data-testid="start-recipe-btn"
              type="button"
              id="start-btn"
              onClick={ handleClick }
            >
              {recipeComplete && startRecipe === false ? 'Continue Recipe'
                : 'Start Recipe' }
            </button>)}
      </Link>
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
