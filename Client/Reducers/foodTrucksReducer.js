import { FETCH_ALL_TRUCKS } from '../actions/types';

const INITIAL_STATE = {
  foodTruckData: null
}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_ALL_TRUCKS:
      return { ...state, foodTruckData: action.payload }
    default:
      return state;
  }
}
