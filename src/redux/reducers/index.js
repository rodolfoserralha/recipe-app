import { combineReducers } from 'redux';
import foodsReducer from './reducer';

const rootReducers = combineReducers({ foodsReducer });

export default rootReducers;
