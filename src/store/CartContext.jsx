import React from 'react';
// create an empty CART with variable to represent context
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(items) =>{},
    removeItem:(id) =>{},
})
export default CartContext 