import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProductForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [isVisible, setIsVisible] = useState(true);
  return (
    <form onSubmit={submitHandler} className="text-right">
      {isVisible && (
        <Button className=" block bg-inherit bg-[#3486b6]  text-white font-bold hover:bg-[#71a8ca] hover:scale-105">
          BUY NOW
        </Button>
      )}
      {!isVisible && <Button>In Cart</Button>}
    </form>
  );
};

export default ProductForm;
