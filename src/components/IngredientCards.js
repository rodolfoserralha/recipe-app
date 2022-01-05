import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function IngredientCards(props) {
  const { index, strIngredient, type, path } = props;

  return (
    <div data-testid={ `${index}-ingredient-card` } className="recipe-card">
      <Link to={ `/explorar/${path}/ingredientes/${strIngredient}` }>
        <img
          className="recipe-imgs"
          data-testid={ `${index}-card-img` }
          src={ `https://www.${type}.com/images/ingredients/${strIngredient}-Small.png` }
          alt={ index }
        />
        <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
      </Link>
    </div>
  );
}

IngredientCards.propTypes = {
  index: PropTypes.number.isRequired,
  strIngredient: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default IngredientCards;
