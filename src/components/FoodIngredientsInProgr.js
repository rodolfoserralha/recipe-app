import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { ingredientArray, measureArray,
    isChecked, setIsChecked,
    idMeal, strMeal, id } = props;

  const inProgRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgRecipesArray = inProgRecipes || [];

  function checks(ingredients) {
    const removeFromArray = inProgRecipesArray.filter((item) => item.id !== id);
    const removedRecipe = JSON.stringify(removeFromArray);
    localStorage.setItem('inProgressRecipes', removedRecipe);

    setIsChecked([...isChecked, ingredients[1]]);

    const ProgRecipe = [{
      id: idMeal,
      type: 'comida',
      name: strMeal,
      checks: isChecked,
    }];

    const saveInProgRecipesArray = [...inProgRecipesArray, ...ProgRecipe];
    const saveInProgRecipes = JSON.stringify(saveInProgRecipesArray);
    localStorage.setItem('inProgressRecipes', saveInProgRecipes);
  }

  return (
    <>
      <span>
        <p>Ingredients:</p>
      </span>
      <ul>
        {
          ingredientArray && ingredientArray.map((ingredients, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${measureArray[index][1]} ${ingredients[1]}`}
              { ' ' }
              <input
                type="checkbox"
                onClick={ () => checks(ingredients) }
                checked={ isChecked.includes(ingredients[1]) }
              />
            </li>))
        }
      </ul>
    </>
  );
}

Ingredients.propTypes = {
  measureArray: PropTypes.arrayOf,
  ingredientArray: PropTypes.arrayOf,
  isChecked: PropTypes.arrayOf,
  id: PropTypes.string,
}.isRequired;
