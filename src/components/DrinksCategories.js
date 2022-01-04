import React, { useEffect, useState } from 'react';
import { apiDrinkCategories } from '../servicesContext/drinksAPI';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState('');
  const FIVE = 5;

  useEffect(() => {
    apiDrinkCategories(setDrinkCategories);
  }, [setDrinkCategories]);

  return (
    <div>
      { drinkCategories && drinkCategories.slice(0, FIVE).map(({ strCategory }) => {
        console.log(drinkCategories);
        return (
          <button
            data-testid={ `${strCategory}-category-filter` }
            className="category-btn"
            type="button"
            key={ strCategory }
          >
            {strCategory}
          </button>
        );
      }) }
    </div>
  );
}
