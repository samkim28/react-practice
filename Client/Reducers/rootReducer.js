import { combineReducers } from 'redux';
import FoodTruckReducer from './foodTrucksReducer';


const rootReducer = combineReducers({
  foodTrucks: FoodTruckReducer
});

export default rootReducer;
