import React, { useEffect, useState, useContext } from 'react';
import { apiDrinkCategories, drinkApiDidMount } from '../servicesContext/drinksAPI';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState('');
  const [toggleDrinks, setToggleDrinks] = useState(false);
  const { setDrinks } = useContext(DrinksAndFoodsContext);
  const FIVE = 5;

  useEffect(() => {
    apiDrinkCategories(setDrinkCategories);
  }, [setDrinkCategories]);

  async function handleOnClick(e) {
    if (!toggleDrinks) {
      const category = e.target.value;
      e.target.style.backgroundColor = '#fff';

      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json());

      setDrinks(result.drinks);
      setToggleDrinks(!toggleDrinks);
      return;
    }

    drinkApiDidMount(setDrinks);
    setToggleDrinks(!toggleDrinks);
    e.target.style.backgroundColor = '';
  }

  return (
    <div>
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
          >
            {strCategory}
          </button>
        );
      }) }
    </div>
  );
}
