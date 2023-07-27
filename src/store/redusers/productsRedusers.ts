import { ProductAction, ProductActionTypes, ProductState } from "../../types/product"


const initialState: ProductState = {
    product: [],
    loading: false,
    error: null
}

export const productsReduser = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return {loading: true, error: null, product: []}
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {loading: false, error: null, product: action.payload}
        case ProductActionTypes.FETCH_PRODUCT_ERROR:
            return {loading: false, error: action.payload, product: []}
        default: 
            return state
    }
}