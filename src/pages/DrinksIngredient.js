import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards';
import { ingredientDrinks } from '../servicesContext/drinksAPI';

export default function DrinksIngredients() {
  const [ingredientsDrinksList, setIngredientsDrinksList] = useState();
  const TWELVE = 12;

  useEffect(() => {
    ingredientDrinks(setIngredientsDrinksList);
  }, [setIngredientsDrinksList]);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div className="parent-cards">
        { ingredientsDrinksList && ingredientsDrinksList
          .slice(0, TWELVE).map((ingredient, index) => (
            <IngredientCards
              path="bebidas"
              type="thecocktaildb"
              key={ ingredient.strIngredient1 }
              index={ index }
              strIngredient={ ingredient.strIngredient1 }
            />
          )) }
      </div>
      <Footer />
    </>
  );
}
