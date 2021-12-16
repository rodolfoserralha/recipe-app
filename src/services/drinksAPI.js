import { requestDrinkAPI } from '../redux/actions';

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
  return (dispatch) => {
    if (searchRadioValue === 'Ingrediente') {
      return fetch(requestDrinkIngredient(searchText))
        .then((res) => res.json())
        .then(({ drinks }) => dispatch(requestDrinkAPI(drinks)));
    }

    if (searchRadioValue === 'Nome') {
      return fetch(requestDrinkName(searchText))
        .then((res) => res.json())
        .then(({ drinks }) => dispatch(requestDrinkAPI(drinks)));
    }

    if (searchRadioValue === 'Primeira Letra') {
      return fetch(requestDrinkFirstLetter(searchText))
        .then((res) => res.json())
        .then(({ drinks }) => dispatch(requestDrinkAPI(drinks)));
    }
  };
}
