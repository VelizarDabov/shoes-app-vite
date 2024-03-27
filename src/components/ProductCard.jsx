import React from "react";
import ProductForm from "./ProductForm";

const ProductCard = ({ id, name, amount, price, image, description }) => {
  return (
    <>
      <li
        className="flex justify-between m-[1rem] p-[1rem]  border border-gray-400 rounded-xl bg-red-100/40 shadow-xl "
        key={id}
      >
        <div>
          <h3 className="m-0 mb-1 font-roboto">{name}</h3>
          <div className="text-gray-500"> {description}</div>

          <img src={image}></img>
          <div className="border border-b border-gray-400 mt-2" />

          <div className="flex mt-5 justify-evenly">
            <p className="mt-1 font-bold text-[#ad5502] text-2xl">
              {" "}
              ${price.toFixed(2)}
            </p>
            <ProductForm />
          </div>
        </div>
      </li>
      <div className="border-b border-gray-300 " />
    </>
  );
};

export default ProductCard;
