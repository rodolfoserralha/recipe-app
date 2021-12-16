import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApiDrinkThunk } from '../services/drinksAPI';

function FoodForms(props) {
  const { dispatchFood } = props;

  const [searchText, setSearchText] = useState('');
  const [searchRadioValue, setSearchRadioValue] = useState('');

  function onClickBtn(e) {
    e.preventDefault();

    if (searchText.length > 1 && searchRadioValue === 'Primeira Letra') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      dispatchFood(searchRadioValue, searchText);
    }
  }

  return (
    <div className="formulary">
      <input
        id="search-input-text"
        type="text"
        data-testid="search-input"
        placeholder="Pesquisar"
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <form onChange={ (e) => setSearchRadioValue(e.target.value) }>
        <label htmlFor="ingredient-input">
          <input
            id="ingredient-input"
            className="radio-inputs"
            type="radio"
            data-testid="ingredient-search-radio"
            name="search-bar"
            value="Ingrediente"
          />
          Ingrediente
        </label>

        <label htmlFor="name-input">
          <input
            id="name-input"
            className="radio-inputs"
            type="radio"
            data-testid="name-search-radio"
            name="search-bar"
            value="Nome"
          />
          Nome
        </label>

        <label htmlFor="letter-input">
          <input
            id="letter-input"
            className="radio-inputs"
            type="radio"
            data-testid="first-letter-search-radio"
            name="search-bar"
            value="Primeira Letra"
          />
          Primeira Letra
        </label>

        <button
          id="search-button"
          data-testid="exec-search-btn"
          type="button"
          onClick={ onClickBtn }
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

FoodForms.propTypes = {
  dispatchFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foodsReducer.foods,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFood: (searchRadioValue, searchText) => (
    dispatch(requestApiDrinkThunk(searchRadioValue, searchText))),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodForms);
