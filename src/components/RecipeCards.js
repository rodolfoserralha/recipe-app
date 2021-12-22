import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function RecipeCards(props) {
  const { index, strMeal, strMealThumb, idMeal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` } className="testando">
      <Link to={ `/comidas/${idMeal}` }>
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
  strMeal: PropTypes.number.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  idMeal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foodsReducer.foods,
  drinks: state.foodsReducer.drinks,
});

export default connect(mapStateToProps, null)(RecipeCards);
