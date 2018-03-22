import * as ActionTypes from "./ActionTypes";

export function fetchProductsRequested() {
    return {
        type: "FETCH_PRODUCTS_REQUESTED"
    }
}


export function fetchProductRequested(id) {
    return {
        type: "FETCH_PRODUCT_REQUESTED",
        payload: {
            id: id
        }
    }
}

export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}

export function editProduct(product) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        payload: {
            product: product
        }
    }
}

import * as service from "./Service";



export function editBrand(brand) {
    return {
        type: ActionTypes.EDIT_BRAND,
        payload: {
            brand: brand
        }
    }
}



//action creators that returns a function
export function fetchProducts() {
    return function (dispatch) {
        console.log("called by redux thunk");

        dispatch(loading(true));

        service.getProducts()
        .then ( products => {
            console.log("got products  ", products.length);
            action = initProducts(products);
            dispatch(action);
            dispatch(loading(false));
            //? how to dispatch
            //set off loading icon
        })
    }
}


export function fetchBrand(id) {
    return function (dispatch) {
        console.log("called by redux thunk");
 
        service.getBrand(id)
        .then ( brand => {
            console.log("got brand  ", brand);
            action = editBrand(brand);
            dispatch(action);
        })
    }
}


export function fetchProduct(id) {
    return function (dispatch) {
        console.log("called by redux thunk");

        dispatch(loading(true));

        service.getProduct(id)
        .then ( product => {
            console.log("got product  ", product);
            
            let brandId = product.brandId;

            dispatch(fetchBrand(brandId));

            action = editProduct(product);
            dispatch(action);
            dispatch(loading(false));
        })
    }
}
