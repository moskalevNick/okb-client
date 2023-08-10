import { Dispatch } from 'redux';
import axios from 'axios';
import { ProductAction, ProductActionTypes } from '../../types/product';

export const fetchProduct = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCT });
      const response = await axios.get('https://okb-server.vercel.app/product'); // сделать .env API_URL
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_ERROR,
        payload: 'Произошла ошибка при загрузке продуктов',
      });
    }
  };
};
