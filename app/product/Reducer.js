import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    loading: false,

    products: [],

    product: {
        name: '',
        year: ''
    },

    brands: [],
    brand: {}
}

export default
     function Reducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.LOADING: {
                return Object.assign({}, state, {loading: action.payload.loading})
            }

            case ActionTypes.INIT_PRODUCTS: {
                return Object.assign({}, state, {products: action.payload.products})
            }


            case ActionTypes.EDIT_PRODUCT: {
                return Object.assign({}, state, {product: action.payload.product})
            }

            case ActionTypes.EDIT_BRAND: {
                return Object.assign({}, state, {brand: action.payload.brand})
            }


            case ActionTypes.INIT_BRANDS: {
                return Object.assign({}, state, {brands: action.payload.brands})
            }

            default:
                return state;
        }

}