import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';

function Drinks(props) {
  const { drinks } = props;
  const TWELVE = 12;
  return (
    <>
      <Header title="Bebidas" hasSearch />
      <div className="parent-cards">
        { drinks.length > 1 && drinks.slice(0, TWELVE).map((drink, index) => (
          <RecipeCards
            key={ drink.idDrink }
            index={ index }
            idMeal={ drink.idDrink }
            strMeal={ drink.strDrink }
            strMealThumb={ drink.strDrinkThumb }
          />
        )) }
      </div>
    </>
  );
}

Drinks.propTypes = {
  drinks: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  drinks: state.foodsReducer.drinks,
});

export default connect(mapStateToProps, null)(Drinks);
