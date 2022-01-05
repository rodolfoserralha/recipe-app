import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';
import DrinksAndFoodsContext from '../context/Foods&Drinks';
import { apiMealsDidMount } from '../servicesContext/mealsApi';
import RecipeCategories from '../components/RecipeCategories';

function Foods() {
  const { meals, setMeals } = useContext(DrinksAndFoodsContext);

  const TWELVE = 12;

  useEffect(() => {
    apiMealsDidMount(setMeals);
  }, [setMeals]);

  return (
    <>
      <Header title="Comidas" hasSearch />
      <RecipeCategories />
      <div className="parent-cards">
        { meals && meals.slice(0, TWELVE).map((food, index) => (
          <RecipeCards
            key={ food.idMeal }
            index={ index }
            idMeal={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
          />
        )) }
      </div>
      <Footer />
    </>
  );
}

export default Foods;
