const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => (
            item.id === itemToAdd.id ?
                {...item, quanity: item.quanity + 1}
            :
                item
        ))
    } else {
        return [...cartItems, {...itemToAdd, quanity: 1}];
    }
}

export default addItemToCart;