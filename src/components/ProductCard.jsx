import React from 'react'
import ProductForm from './ProductForm'

const ProductCard = ({id, name,amount, price, image, description}) => {
  return (
    <>
    <li className='flex justify-between m-[1rem] p-[1rem]  border border-gray-400 rounded-xl bg-red-100/40 shadow-xl ' key={id}>
       
            <div>
                <h3 className='m-0 mb-1 font-roboto'>{name}</h3>
                <div className='text-gray-500'> {description}</div>
                <div className='mt-1 font-bold text-[#ad5502] text-lg'> ${price.toFixed(2)}</div>
                <img src={image}></img>
            </div>

            <div>
                <ProductForm  />
            </div> 
            
        </li>
        <div className='border-b border-gray-300 '/>
        </>
  )
}

export default ProductCard