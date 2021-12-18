export const REQUEST_FOOD_API = 'REQUEST_FOOD_API';
export const REQUEST_DRINK_API = 'REQUEST_DRINK_API';

export const requestFoodAPI = (payload) => ({
  type: REQUEST_FOOD_API,
  payload,
});

export const requestDrinkAPI = (payload) => ({
  type: REQUEST_DRINK_API,
  payload,
});
