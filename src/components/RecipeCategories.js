import React, { useContext, useEffect, useState } from 'react';
import { apiMealsCategories } from '../servicesContext/mealsApi';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function RecipeCategories() {
  const [categories, setCategories] = useState('');
  const { meals, setMeals } = useContext(DrinksAndFoodsContext);
  const FIVE = 5;

  useEffect(() => {
    apiMealsCategories(setCategories);
  }, [setCategories]);

  async function handleOnClick(e) {
    const category = e.target.value;

    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json());

    setMeals(result.meals);
  }

  return (
    <div>
      { categories && categories.slice(0, FIVE).map(({ strCategory }) => {
        console.log(meals);
        return (
          <button
            data-testid={ `${strCategory}-category-filter` }
            className="category-btn"
            value={ strCategory }
            type="button"
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
