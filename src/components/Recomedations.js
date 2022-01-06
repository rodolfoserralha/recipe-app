import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function recomendation(props) {
  const { index, strDrink, strDrinkThumb, idDrink } = props;
  return (
    <div data-testid={ `${index}-recipe-card` } className="recipe-card">
      <Link to={ `/bebidas/${idDrink}` }>
        <img
          className="recipe-imgs"
          data-testid={ `${index}-card-img` }
          src={ strDrinkThumb }
          alt={ index }
        />
        <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
      </Link>
    </div>
  );
}

recomendation.propTypes = {
  index: PropTypes.number.isRequired,
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};

export default recomendation;
