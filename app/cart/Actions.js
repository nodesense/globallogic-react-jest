import * as ActionTypes from "./ActionTypes";

//helper mthod to create action
export function addItemToCart(item) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: item
        }
    }
}

// let action = addItemToCart({id: 1, name: 'p1'});

// action => {
//     type: 'ADD_ITEM_TO_CART',
//     payload: {
//         item: {id: 1, name: 'p1'}
//     }
// }

//TODO: removeItemFromCart(id)
export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}

export function updateItemInCart(id, qty) {
    return {
        type: ActionTypes.UPDATE_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}

export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}