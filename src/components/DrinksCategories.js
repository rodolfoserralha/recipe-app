import React, { useEffect, useState, useContext } from 'react';
import { apiDrinkCategories, drinkApiDidMount } from '../servicesContext/drinksAPI';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState('');
  const [toggleDrinks, setToggleDrinks] = useState(false);
  const [buttonsDrinksArray, setButtonDrinksArray] = useState([]);
  const { setDrinks } = useContext(DrinksAndFoodsContext);
  const FIVE = 5;

  useEffect(() => {
    apiDrinkCategories(setDrinkCategories);
  }, [setDrinkCategories]);

  async function handleOnClick(e) {
    if (!toggleDrinks && e.target.value === 'All') {
      e.target.style.backgroundColor = '#fff';
      setButtonDrinksArray(['All']);

      drinkApiDidMount(setDrinks);
      setToggleDrinks(!toggleDrinks);
      return;
    }

    if (!toggleDrinks) {
      const category = e.target.value;
      e.target.style.backgroundColor = '#fff';
      setButtonDrinksArray([category]);

      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json());

      setDrinks(result.drinks);
      setToggleDrinks(!toggleDrinks);
      return;
    }

    setButtonDrinksArray([]);
    drinkApiDidMount(setDrinks);
    setToggleDrinks(!toggleDrinks);
    e.target.style.backgroundColor = '';
  }

  return (
    <div>
      <button
        data-testid="All-category-filter"
        value="All"
        type="button"
        disabled={ buttonsDrinksArray.find((btn) => btn !== 'All') }
        onClick={ handleOnClick }
      >
        All
      </button>
      { drinkCategories && drinkCategories.slice(0, FIVE).map(({ strCategory }) => {
        console.log(drinkCategories);
        return (
          <button
            data-testid={ `${strCategory}-category-filter` }
            className="category-btn"
            type="button"
            value={ strCategory }
            key={ strCategory }
            onClick={ handleOnClick }
            disabled={ buttonsDrinksArray.find((btn) => btn !== strCategory) }
          >
            {strCategory}
          </button>
        );
      }) }
    </div>
  );
}
