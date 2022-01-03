import history from './history';

const ENDPOINT_DRINKS_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_DRINKS_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINKS_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const SORRY = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export function requestDrinkIngredient(inputValue) {
  return `${ENDPOINT_DRINKS_INGREDIENT}${inputValue}`;
}

export function requestDrinkName(inputValue) {
  return `${ENDPOINT_DRINKS_NAME}${inputValue}`;
}

export function requestDrinkFirstLetter(inputValue) {
  return `${ENDPOINT_DRINKS_FIRST_LETTER}${inputValue}`;
}

export async function requestDrinks(searchRadioValue, searchText, setDrinks) {
  if (searchRadioValue === 'Ingrediente') {
    const result = await fetch(requestDrinkIngredient(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/bebidas/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }

  if (searchRadioValue === 'Nome') {
    const result = await fetch(requestDrinkName(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/bebidas/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }

  if (searchRadioValue === 'Primeira Letra') {
    const result = await fetch(requestDrinkFirstLetter(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/bebidas/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }
}

export async function drinkApiDidMount(setDrinks) {
  const results = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=milk')
    .then((res) => res.json());
  const { drinks } = results;
  setDrinks(drinks);
}