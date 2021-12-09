export const REQUEST_FOOD_API = 'REQUEST_FOOD_API';
export const REQUEST_DRINK_API = 'REQUEST_FOOD_API';

export const requestFoodAPI = (payload) => ({
  type: REQUEST_FOOD_API,
  payload,
});

export const requestDrinkAPI = (payload) => ({
  type: REQUEST_DRINK_API,
  payload,
});

// export function fetchCurrencies() {
//   return (dispatch) => {
//     fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((currency) => dispatch(fetchSuccess(currency)))
//       .catch((error) => dispatch(fetchError(error)));
//   };
// }

// const mapDispatchToProps = (dispatch) => ({
//   dispatchUser: (user) => dispatch(userLog(user)),
// });
