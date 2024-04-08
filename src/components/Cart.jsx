import  { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./ui/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemsRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };


    const totalAmount = cartCtx.items.reduce((acc, item) => {
        return acc + item.price * item.amount;
    }, 0);
    const cartItems= (<ul className="m-0 p-0 max-h-[20rem] overflow-auto">
    {cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemsRemoveHandler.bind(null, item.id)}
        />
    ))}
</ul>)
    return (
        <Modal onClose={props.onClose}>
           {cartItems}
            <div className="flex justify-between items-center font-bold text-lg m-[1rem]">
                <span>Total Amount</span>
                <span>{hasItems ? `$${totalAmount.toFixed(2)}` : "$0.00"}</span>
            </div>
            <div className="text-right">
                <button className="cursor-pointer bg-transparent border-[#128dbd] p-2 px-5 md:px-10 hover:bg-[#32758f] border rounded-3xl" onClick={props.onClose}>
                    Close
                </button>
                {hasItems && (
                    <button className="cursor-pointer bg-transparent border-[#128dbd] p-2 px-5 md:px-10 ml-4 hover:bg-[#32758f] border rounded-3xl">
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
