import React from 'react';
import { connect } from 'react-redux'

import { clearItemFromCart }  from '../../redux/cart/cart.actions'
import { addItem } from '../../redux/cart/cart.actions'
import { removeItem } from '../../redux/cart/cart.actions'


import './checkout-item.styles.scss';

const CheckoutItem = ( { cartItem, removeItem, addItem, clearItemFromCart } ) => {
    const {name, imageUrl, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>               
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);