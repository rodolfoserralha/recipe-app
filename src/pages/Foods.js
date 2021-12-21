import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';

function Foods(props) {
  const { foods } = props;
  return (
    <>
      <Header title="Comidas" hasSearch />
      <div className="parent-cards">
        { foods.length > 1 && foods.map((food, index) => (
          <RecipeCards
            key={ food.idMeal }
            index={ index }
            idMeal={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
          />
        )) }
      </div>
    </>
  );
}

Foods.propTypes = {
  foods: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foodsReducer.foods,
});

export default connect(mapStateToProps, null)(Foods);
