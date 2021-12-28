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

export async function requestMeals(searchRadioValue, searchText, setMeals) {
  if (searchRadioValue === 'Ingrediente') {
    const result = await fetch(requestIngredient(searchText))
      .then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/comidas/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }

  if (searchRadioValue === 'Nome') {
    const result = await fetch(requestName(searchText)).then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/comidas/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }

  if (searchRadioValue === 'Primeira Letra') {
    const result = await fetch(requestFirstLetter(searchText))
      .then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/comidas/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }
}

export async function apiMealsDidMount(setMeals) {
  const result = await fetch(ENDPOINT_INGREDIENT).then((res) => res.json());
  const { meals } = result;
  setMeals(meals);
}
