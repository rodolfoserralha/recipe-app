import React, { useContext } from 'react';
import Header from '../components/Header';
import Cards from '../components/FavoriteCards';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function FavoriteRecipes() {
  const { favorites, favoritesArray, setFavorites } = useContext(DrinksAndFoodsContext);

  function showAll() {
    setFavorites(favoritesArray);
  }

  function justFood() {
    const justFoodArray = favoritesArray.filter((favorite) => favorite.type === 'comida');
    setFavorites(justFoodArray);
  }
  function justDrinks() {
    const justDrinksArray = favoritesArray
      .filter((favorite) => favorite.type === 'bebida');
    setFavorites(justDrinksArray);
  }

  return (
    <>
      <Header title="Receitas Favoritas" />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ showAll }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ justFood }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ justDrinks }
        >
          Drinks
        </button>
      </div>
      {
        favorites && (favorites.map((recipe, index) => (
          <Cards
            key={ recipe.id }
            index={ index }
            alcoholicOrNot={ recipe.alcoholicOrNot }
            area={ recipe.area }
            category={ recipe.category }
            id={ recipe.id }
            image={ recipe.image }
            name={ recipe.name }
            type={ recipe.type }
          />
        )))
      }
    </>
  );
}
