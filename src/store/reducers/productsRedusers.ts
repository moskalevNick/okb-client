import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from '../../types/product';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReduser = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT:
      return { loading: true, error: null, products: [] };
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCT_ERROR:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};
