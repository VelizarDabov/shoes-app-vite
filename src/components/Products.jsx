import { products } from "../data"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <section className="max-w-[60rem] mx-auto my-8 animate-product-appear">
        <ul className="">
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