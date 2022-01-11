import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { ingredientArray, measureArray, isChecked, setIsChecked } = props;

  return (
    <>
      <span>
        Ingredients:
        { ' ' }
      </span>
      <ul>
        {
          ingredientArray.map((ingredients, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${measureArray[index] || ''} ${ingredients[1]}`}
              { ' ' }
              <input
                type="checkbox"
                onClick={ () => setIsChecked([...isChecked, ingredients[1]]) }
                checked={ isChecked.includes(ingredients[1]) }
              />
            </li>))
        }
      </ul>
    </>
  );
}

Ingredients.propTypes = {
  measureArray: PropTypes.arrayOf.isRequired,
  ingredientArray: PropTypes.arrayOf.isRequired,
  isChecked: PropTypes.arrayOf.isRequired,
  setIsChecked: PropTypes.func.isRequired,
};
