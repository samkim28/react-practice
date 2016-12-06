import { FETCH_ALL_TRUCKS } from './actions/types';
import axios from 'axios';


export function fetchAllTrucks() {
  return axios.get('/truckdata')
    .then((response) => {
      console.log('response: ', response);
      return { type: FETCH_ALL_TRUCKS, payload: response }
    })
    .catch((error) => {
      console.error(error);
    });
}
