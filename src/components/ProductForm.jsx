import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import CartContext from "../store/CartContext";

const ProductForm = ({ onAddToCart, id, name, price }, props) => {
    const [isVisible, setIsVisible] = useState(true);
    const cartCtx = useContext(CartContext);
console.log(name)
    const submitHandler = (e) => {
      e.preventDefault();
      const enteredAmount = 1;
      onAddToCart(enteredAmount);
    };
  
    const handleClick = () => {
      const amount = 1; // Initialize amount to 1
      cartCtx.addItem({ id: id, name: name, price: price, amount: amount });
  
      setTimeout(() => {
        setIsVisible(false);
      }, 100);
    };
   
    return (
      <form onSubmit={submitHandler} className="text-right">
        {isVisible && (
          <Button onClick={handleClick} className="bg-inherit bg-[#3486b6]  text-white font-bold hover:bg-[#71a8ca] hover:scale-105">
            BUY NOW
          </Button>
        )}
        {!isVisible && <Button className="bg-inherit bg-[#b63434]  text-white font-bold hover:bg-[#71a8ca] hover:scale-105">In Cart</Button>}
      </form>
    );
};

export default ProductForm;
