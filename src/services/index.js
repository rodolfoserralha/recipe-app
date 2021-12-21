import { requestFoodAPI } from '../redux/actions';
import history from './history';

const ENDPOINT_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const SORRY = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export function requestIngredient(inputValue) {
  return `${ENDPOINT_INGREDIENT}${inputValue}`;
}

export function requestName(inputValue) {
  return `${ENDPOINT_NAME}${inputValue}`;
}

export function requestFirstLetter(inputValue) {
  return `${ENDPOINT_FIRST_LETTER}${inputValue}`;
}

// export function requestApiThunk(searchRadioValue, searchText) {
//   return (dispatch) => {
//     if (searchRadioValue === 'Ingrediente') {
//       return fetch(requestIngredient(searchText))
//         .then((res) => res.json())
//         .then(({ meals }) => dispatch(requestFoodAPI(meals)));
//     }

//     if (searchRadioValue === 'Nome') {
//       return fetch(requestName(searchText))
//         .then((res) => res.json())
//         .then(({ meals }) => dispatch(requestFoodAPI(meals)));
//     }

//     if (searchRadioValue === 'Primeira Letra') {
//       return fetch(requestFirstLetter(searchText))
//         .then((res) => res.json())
//         .then(({ meals }) => dispatch(requestFoodAPI(meals)));
//     }
//   };
// }

export function requestApiThunk(searchRadioValue, searchText) {
  return async (dispatch) => {
    if (searchRadioValue === 'Ingrediente') {
      const result = await fetch(requestIngredient(searchText)).then((res) => res.json());
      const { meals } = result;
      if (meals === null) global.alert(SORRY);
      if (meals.length === 1) {
        return history.push(`/comidas/${meals[0].idMeal}`);
      }
      dispatch(requestFoodAPI(meals));
    }

    if (searchRadioValue === 'Nome') {
      const result = await fetch(requestName(searchText)).then((res) => res.json());
      const { meals } = result;
      if (meals === null) global.alert(SORRY);
      if (meals.length === 1) {
        return history.push(`/comidas/${meals[0].idMeal}`);
      }
      dispatch(requestFoodAPI(meals));
    }

    if (searchRadioValue === 'Primeira Letra') {
      const result = await fetch(requestFirstLetter(searchText))
        .then((res) => res.json());
      const { meals } = result;
      if (meals === null) global.alert(SORRY);
      if (meals.length === 1) {
        return history.push(`/comidas/${meals[0].idMeal}`);
      }
      dispatch(requestFoodAPI(meals));
    }
  };
}
