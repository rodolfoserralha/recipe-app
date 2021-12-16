import { requestFoodAPI } from '../redux/actions';

const ENDPOINT_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export function requestIngredient(inputValue) {
  return `${ENDPOINT_INGREDIENT}${inputValue}`;
}

export function requestName(inputValue) {
  return `${ENDPOINT_NAME}${inputValue}`;
}

export function requestFirstLetter(inputValue) {
  return `${ENDPOINT_FIRST_LETTER}${inputValue}`;
}

export function requestApiThunk(searchRadioValue, searchText) {
  return (dispatch) => {
    if (searchRadioValue === 'Ingrediente') {
      return fetch(requestIngredient(searchText))
        .then((res) => res.json())
        .then(({ meals }) => dispatch(requestFoodAPI(meals)));
    }

    if (searchRadioValue === 'Nome') {
      return fetch(requestName(searchText))
        .then((res) => res.json())
        .then(({ meals }) => dispatch(requestFoodAPI(meals)));
    }

    if (searchRadioValue === 'Primeira Letra') {
      return fetch(requestFirstLetter(searchText))
        .then((res) => res.json())
        .then(({ meals }) => dispatch(requestFoodAPI(meals)));
    }
  };
}
