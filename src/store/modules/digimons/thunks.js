import axios from 'axios';
import { listDigimon } from './actions';

export const listDigimonThunk = () => (dispatch) => {
  axios
    .get('https://digimon-api.vercel.app/api/digimon')
    .then((res) => {
      dispatch(listDigimon(res.data, 'success'));
    })
    .catch(() => {
      dispatch(listDigimon([], 'error'));
    });
};
