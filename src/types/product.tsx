export type imageType = {
  id: string;
  path: string;
  publicUrl: string;
  type: string;
};

export type productType = {
  id: string;
  name: string;
  client: string;
  description: string;
  materials: string;
  time: string;
  image: imageType[];
};

export interface ProductState {
  products: productType[];
  loading: boolean;
  error: null | string;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = 'FETCH_VACANCY',
  FETCH_PRODUCT_SUCCESS = 'FETCH_VACANCY_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_VACANCY_ERROR',
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: any[];
}

interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCT_ERROR;
  payload: string;
}

export type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction;
