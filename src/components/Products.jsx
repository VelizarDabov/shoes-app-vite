import { products } from "../data"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <section className="max-w-[60rem] mx-auto my-8">
        <ul className="p-4 m-2 md:m-0 shadow-xl rounded-lg border-2 border-gray-400/60 ">
            {products.map((product)=> (
                 <ProductCard
                 key={product.id}
                 image={product.image}
                 id={product.id}
                 name={product.name}
                 description={product.description}
                 price={product.price}
               
               />
            ))}
        </ul>
    </section>
  )
}

export default Products