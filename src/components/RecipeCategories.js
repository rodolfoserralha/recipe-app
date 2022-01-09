import React, { useContext, useEffect, useState } from 'react';
import { apiMealsCategories, apiMealsDidMount } from '../servicesContext/mealsApi';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function RecipeCategories() {
  const [categories, setCategories] = useState('');
  const [buttonsArray, setButtonArray] = useState([]);
  const [lastCategory, setLastCategory] = useState('');
  const { setMeals } = useContext(DrinksAndFoodsContext);

  const FIVE = 5;

  useEffect(() => {
    apiMealsCategories(setCategories);
  }, [setCategories]);

  async function handleOnClick(e) {
    let category = e.target.value;

    if (category === lastCategory) {
      category = 'All';
    }

    setLastCategory(category);

    if (category === 'All') {
      setButtonArray(['All']);

      apiMealsDidMount(setMeals);
      return;
    }

    setButtonArray([category]);

    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json());

    setMeals(result.meals);
  }

  function activeBtn(strCategory) {
    const active = buttonsArray
      .find((btn) => btn === strCategory);
    return active ? 'category-btn active-btn' : 'category-btn';
  }

  return (
    <div className="categories-btns">
      <button
        data-testid="All-category-filter"
        className="category-btn"
        value="All"
        type="button"
        onClick={ handleOnClick }
      >
        All
      </button>
      { categories && categories.slice(0, FIVE).map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          className={ activeBtn(strCategory) }
          value={ strCategory }
          type="button"
          key={ strCategory }
          onClick={ handleOnClick }
        >
          {strCategory}
        </button>
      )) }
    </div>
  );
}
