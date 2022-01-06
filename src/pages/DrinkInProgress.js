import React, { useContext } from 'react';
import DrinksAndFoodsContext from '../context/Foods&Drinks';

export default function DrinkInProgress() {
  const { setRecipeComplete } = useContext(DrinksAndFoodsContext);

  return (
    <div>
      Receita de Bebidas em Processo
      <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish-btn"
        onClick={ setRecipeComplete(true) }
      >
        Finish Recipe
      </button>
    </div>
  );
}
