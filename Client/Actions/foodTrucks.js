import { FETCH_ALL_TRUCKS } from '../Actions/types';
import axios from 'axios';


export function fetchAllTrucks(facilityType) {
  const data = {
    params: {
      FacilityType: facilityType
    }
  };
  return axios.get('/truckdata', data)
    .then((response) => {
      console.log('response inside food truck action: ', response.data);
      return { type: FETCH_ALL_TRUCKS, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}
