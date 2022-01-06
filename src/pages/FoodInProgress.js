import React, { useContext } from 'react';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function FoodInProcess() {
  const { setRecipeComplete } = useContext(DrinksAndFoodsContext);

  return (
    <div>
      Receita de Comidas em Processo
      <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish-btn"
        onChange={ setRecipeComplete(true) }
      >
        Finish Recipe
      </button>
    </div>
  );
}
