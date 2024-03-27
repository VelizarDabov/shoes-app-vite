import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import CartContext from "../store/CartContext";

const ProductCard = ({ id, name, price, image, description }) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        const itemToAdd = { id, name, price, amount: 0, image }; // Include all necessary fields in the item object
        cartCtx.addItem(itemToAdd);
    }

    return (
        <>
            <li className="flex justify-between m-[1rem] p-[1rem] border border-gray-400 rounded-xl bg-red-100/40 shadow-xl" key={id}>
                <div>
                    <h3 className="m-0 mb-1 font-roboto">{name}</h3>
                    <div className="text-gray-500">{description}</div>
                    <img src={image} alt={name} />
                    <div className="border border-b border-gray-400 mt-2" />
                    <div className="flex mt-5 justify-evenly">
                        <p className="mt-1 font-bold text-[#ad5502] text-2xl">${price.toFixed(2)}</p>
                        <ProductForm id={id} onAddToCart={addToCartHandler} name={name} image={image} price={price} />
                    </div>
                </div>
            </li>
            <div className="border-b border-gray-300" />
        </>
    );
};

export default ProductCard;