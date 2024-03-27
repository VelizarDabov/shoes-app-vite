import React from 'react'

const CartItem = ({name, price, amount, key, onRemove, onAdd}) => {
  return (
    <li key={key}>
            <div>
                <h2>{name}</h2>
                <div>
                    <span >{price}</span>
                    <span > {amount}</span>
                </div>

            </div>
            <div >
                 <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button> 
            </div>
        </li>
  )
}

export default CartItem