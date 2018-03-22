import * as ActionTypes from "./ActionTypes";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as service from "./Service";

import {initProducts,
        loading,
        editProduct,
        editBrand
} from "./Actions";


function* fetchProducts(action) {
    try {
        yield put(loading(true));
        const products = yield call(service.getProducts);
        //dispatch internally
        yield put(initProducts(products));
        yield put(loading(false));
     } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
     }
}

function* fetchProduct(action) {
    let id = action.payload.id;

    try {
        yield put(loading(true));
        const product = yield call(service.getProduct, id);
        const brand = yield call(service.getBrand, product.brandId);
 
        yield put (editProduct(product));
        yield put (editBrand(brand));
        yield put(loading(false));
    }catch(e) {

    }
}

export function* sagaRuntime() {
    //intercepter
    yield takeEvery("FETCH_PRODUCTS_REQUESTED", fetchProducts);
    yield takeEvery("FETCH_PRODUCT_REQUESTED", fetchProduct);
     
}