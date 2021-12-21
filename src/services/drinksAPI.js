import { requestDrinkAPI } from '../redux/actions';
import history from './history';

const ENDPOINT_DRINKS_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_DRINKS_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINKS_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export function requestDrinkIngredient(inputValue) {
  return `${ENDPOINT_DRINKS_INGREDIENT}${inputValue}`;
}

export function requestDrinkName(inputValue) {
  return `${ENDPOINT_DRINKS_NAME}${inputValue}`;
}

export function requestDrinkFirstLetter(inputValue) {
  return `${ENDPOINT_DRINKS_FIRST_LETTER}${inputValue}`;
}

export function requestApiDrinkThunk(searchRadioValue, searchText) {
  return async (dispatch) => {
    if (searchRadioValue === 'Ingrediente') {
      const result = await fetch(requestDrinkIngredient(searchText))
        .then((res) => res.json());
      const { drinks } = result;
      if (drinks.length === 1) {
        return history.push(`/bebidas/${drinks[0].idDrink}`);
      }
      dispatch(requestDrinkAPI(drinks));
    }

    if (searchRadioValue === 'Nome') {
      const result = await fetch(requestDrinkName(searchText))
        .then((res) => res.json());
      const { drinks } = result;
      if (drinks.length === 1) {
        return history.push(`/bebidas/${drinks[0].idDrink}`);
      }
      dispatch(requestDrinkAPI(drinks));
    }

    if (searchRadioValue === 'Primeira Letra') {
      const result = await fetch(requestDrinkFirstLetter(searchText))
        .then((res) => res.json());
      const { drinks } = result;
      if (drinks.length === 1) {
        return history.push(`/bebidas/${drinks[0].idDrink}`);
      }
      dispatch(requestDrinkAPI(drinks));
    }
  };
}
