import CartActionTypes from './cart.types';
import addItemToCart from './cart.utils';
import {removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = ( state = INITIAL_STATE, action ) => {
    console.log('cartReducer ', action)
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            console.log('***TOGGLE_CART_HIDDEN')
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            console.log('***ADD_ITEM')
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            console.log('***CLEAR_ITEM_FROM_CART')
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            console.log('***REMOVE_ITEM')
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }            
        default:
            return state;
    }
}

export default cartReducer;