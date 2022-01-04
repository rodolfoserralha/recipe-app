import React, { useContext, useEffect, useState } from 'react';
import { apiMealsCategories, apiMealsDidMount } from '../servicesContext/mealsApi';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function RecipeCategories() {
  const [categories, setCategories] = useState('');
  const [toggleMeals, setToggleMeals] = useState(false);
  const [buttonsArray, setButtonArray] = useState([]);
  const { meals, setMeals } = useContext(DrinksAndFoodsContext);

  const FIVE = 5;

  useEffect(() => {
    apiMealsCategories(setCategories);
  }, [setCategories]);

  async function handleOnClick(e) {
    if (!toggleMeals && e.target.value === 'All') {
      e.target.style.backgroundColor = '#fff';
      setButtonArray(['All']);

      apiMealsDidMount(setMeals);
      setToggleMeals(!toggleMeals);
      return;
    }

    if (!toggleMeals) {
      const category = e.target.value;
      e.target.style.backgroundColor = '#fff';
      setButtonArray([category]);

      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json());

      setMeals(result.meals);
      setToggleMeals(!toggleMeals);
      return;
    }

    setButtonArray([]);
    apiMealsDidMount(setMeals);
    setToggleMeals(!toggleMeals);
    e.target.style.backgroundColor = '';
  }

  return (
    <div id="teste">
      <button
        data-testid="All-category-filter"
        value="All"
        type="button"
        disabled={ buttonsArray.find((btn) => btn !== 'All') }
        onClick={ handleOnClick }
      >
        All
      </button>
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
            disabled={ buttonsArray.find((btn) => btn !== strCategory) }
          >
            {strCategory}
          </button>
        );
      }) }
    </div>
  );
}
