import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';
import { getDropDownValues,
  filterByArea, apiMealsDidMount } from '../servicesContext/mealsApi';

export default function FoodsLocals() {
  const [dropDownOptions, setdropDownOptions] = useState('');
  const [dropDownValue, setDropDownValue] = useState('All');
  const [area, setArea] = useState('');
  const TWELVE = 12;

  useEffect(() => {
    getDropDownValues(setdropDownOptions);
    apiMealsDidMount(setArea);
  }, []);

  function handleOnChange(e) {
    if (e.target.value === 'All') return apiMealsDidMount(setArea);
    setDropDownValue(e.target.value);
    filterByArea(setArea, e.target.value);
  }

  return (
    <>
      <Header title="Explorar Origem" hasSearch />
      <div className="parent-cards">
        <select
          data-testid="explore-by-area-dropdown"
          className="explore-btn"
          onChange={ handleOnChange }
        >
          <option
            data-testid="All-option"
            value="All"
          >
            All
          </option>
          { dropDownOptions && dropDownOptions.map(({ strArea }, index) => (
            <option
              data-testid={ `${strArea}-option` }
              key={ index }
              value={ strArea }
            >
              { strArea }
            </option>
          )) }
        </select>
        { area && dropDownValue && area.slice(0, TWELVE).map((food, index) => (
          <RecipeCards
            key={ food.idMeal }
            index={ index }
            idMeal={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
