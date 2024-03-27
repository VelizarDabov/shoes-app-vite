
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./ui/Modal";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems =cartCtx.items.length>0;
console.log(cartCtx)
  return (
  
           <Modal onClose={props.onClose}>
           <ul className="m-0 p-0 max-h-[20rem] overflow-auto">
    {hasItems && (cartCtx.items.map((item) => (
 <CartItem
 key={item.id}
 name={item.name}
 amount={item.amount}
 price={item.price}
 onAdd={cartItemAddHandler.bind(null, item)}
 onRemove={cartItemRemoveHandler.bind(null, item.id)}
/>
)))}
    </ul>
           <div className='flex justify-between items-center font-bold text-lg m-[1rem]'>
               <span> Total Amount</span>
               {!hasItems ? (<span> $0.00</span>) : ( <span>{props.amount}</span>)}
              
           </div>
           <div className=' text-right'>
               <button className='cursor-pointer bg-transparent border-[#128dbd] p-2 pt-8 ml-4 hover:bg-[#32758f]' onClick={props.onClose}>
                   Close
               </button>
               {hasItems  && <button className='cursor-pointer bg-transparent border-[#128dbd] p-2 pt-8 ml-4 hover:bg-[#32758f]'>Order</button>}
               
           </div>
      
      
       </Modal>
  )
}

export default Cart