import React from "react"

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(items) => {},
    remoceItem:(id)=>{},
})
export  default CartContext