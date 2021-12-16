import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApiThunk } from '../services';
import { requestApiDrinkThunk } from '../services/drinksAPI';

function Forms(props) {
  const { dispatchFood, dispatchDrink, title } = props;

  const [searchText, setSearchText] = useState('');
  const [searchRadioValue, setSearchRadioValue] = useState('');

  async function onClickBtn(e) {
    e.preventDefault();

    if (searchText.length > 1 && searchRadioValue === 'Primeira Letra') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    if (title === 'Comidas') {
      dispatchFood(searchRadioValue, searchText);
      return;
    }
    return dispatchDrink(searchRadioValue, searchText);
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

Forms.propTypes = {
  dispatchFood: PropTypes.func.isRequired,
  dispatchDrink: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foodsReducer.foods,
  drinks: state.foodsReducer.drinks,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFood: (searchRadioValue, searchText, history) => (
    dispatch(requestApiThunk(searchRadioValue, searchText, history))),
  dispatchDrink: (searchRadioValue, searchText, history) => (
    dispatch(requestApiDrinkThunk(searchRadioValue, searchText, history))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
