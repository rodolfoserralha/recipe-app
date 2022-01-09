import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCards(props) {
  const { index, strMeal, strMealThumb, idMeal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` } className="recipe-card">
      <Link
        style={ { color: 'black', textDecoration: 'none' } }
        to={ `/comidas/${idMeal}` }
      >
        <img
          className="recipe-imgs"
          data-testid={ `${index}-card-img` }
          src={ strMealThumb }
          alt={ index }
        />
        <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
      </Link>
    </div>
  );
}

RecipeCards.propTypes = {
  index: PropTypes.number.isRequired,
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
};

export default RecipeCards;
