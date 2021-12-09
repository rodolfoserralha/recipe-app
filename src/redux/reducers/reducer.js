import { REQUEST_FOOD_API, REQUEST_DRINK_API } from '../actions';

const INITIAL_STATE = {
  foods: '',
  drinks: '',
};

const foodsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_FOOD_API:
    return {
      ...state,
      foods: action.payload,
    };
  case REQUEST_DRINK_API:
    return {
      ...state,
      drinks: action.payload,
    };
  default: return state;
  }
};

export default foodsReducer;
