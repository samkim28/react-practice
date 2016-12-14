import { FETCH_ALL_TRUCKS } from '../Actions/types';

const INITIAL_STATE = {
  foodTruckData: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_ALL_TRUCKS:
    console.log('food truck action inside food truck reducer: ', action.payload);
      return { ...state, foodTruckData: action.payload }
    default:
      return state;
  }
}
