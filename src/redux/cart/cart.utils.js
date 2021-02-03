const addItemToCart = (cartItems, itemToAdd) => {
    console.log('in addItemToCart')
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => (
            item.id === itemToAdd.id ?
                {...item, quantity: item.quantity + 1}
            :
                item
        ))
    } else {
        return [...cartItems, {...itemToAdd, quantity: 1}];
    }
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    console.log('in removeItemFromCart')
    const revisedCartItems =  cartItems.map(cartItem => (
        cartItem.id === itemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
        :
            cartItem
        ))
    console.log('removeItemFromCart', revisedCartItems)
    return revisedCartItems.filter((cartItem) => cartItem.quantity)
}

export default addItemToCart;