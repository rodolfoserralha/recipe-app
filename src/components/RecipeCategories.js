import React, { useEffect, useState } from 'react';
import { apiMealsCategories } from '../servicesContext/mealsApi';

export default function RecipeCategories() {
  const [categories, setCategories] = useState('');
  const FIVE = 5;

  useEffect(() => {
    apiMealsCategories(setCategories);
  }, [setCategories]);

  return (
    <div>
      { categories && categories.slice(0, FIVE).map(({ strCategory }) => {
        console.log(categories);
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
