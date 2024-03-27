import React from 'react';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li key={props.name} className='flex justify-between items-center border-b-2 border-[#3e198f] p-4 m-4 mt-0'>
            <div>
                <h2 className='text-[#363636] font-bold font-montserrat text-xl'>{props.name}</h2> {/* Access name directly */}
                <div className='w-[10rem] flex justify-between items-center'>
                    <span className='font-bold text-[#8a2b06] text-xl'>{price}</span> {/* Access price directly */}
                    <span className='font-bold border border-[#3686ae] text-[#363636] p-1 px-3 rounded-full'>{props.amount}</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row font-bold gap-3'>
                <button className='border border-[#3686ae] rounded-lg px-3 text-3xl text-[#3686ae]' onClick={props.onRemove}>-</button>
                <button className='border border-[#3686ae] rounded-lg px-3 text-2xl text-[#3686ae]' onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;