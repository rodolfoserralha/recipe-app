import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards';
import { ingredientsMeals } from '../servicesContext/mealsApi';

export default function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState();
  const TWELVE = 12;

  useEffect(() => {
    ingredientsMeals(setIngredientsList);
  }, [setIngredientsList]);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div className="parent-cards">
        { ingredientsList && ingredientsList.slice(0, TWELVE).map((ingredient, index) => (
          <IngredientCards
            path="comidas"
            type="themealdb"
            key={ ingredient.idIngredient }
            index={ index }
            strIngredient={ ingredient.strIngredient }
          />
        )) }
      </div>
      <Footer />
    </>
  );
}
