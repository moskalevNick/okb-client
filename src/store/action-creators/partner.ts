import { Dispatch } from 'redux';
import axios from 'axios';
import { PartnerAction, PartnerActionTypes } from '../../types/partner';

export const fetchPartner = () => {
  return async (dispatch: Dispatch<PartnerAction>) => {
    try {
      dispatch({ type: PartnerActionTypes.FETCH_PARTNER });
      const response = await axios.get('https://okb-server.vercel.app/partner'); // сделать .env API_URL
      dispatch({
        type: PartnerActionTypes.FETCH_PARTNER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PartnerActionTypes.FETCH_PARTNER_ERROR,
        payload: 'Произошла ошибка при загрузке партнеров',
      });
    }
  };
};