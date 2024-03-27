import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = (props) => {
  return (
    <nav className="bg-[#128dbd]">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-white text-3xl font-roboto font-semibold md:ml-20">
          Rare Air Kicks
        </h1>
        <Button
          onClick={props.onClick}
          variant="outline"
          className="text-white hover:scale-105 bg-blue-900/50 rounded-3xl px-6"
        >
          <ShoppingCart className="w-6 h-6 mr-1" />
          Your Cart
          <span className="bg-[#68a9cf] rounded-full ml-2 p-1 font-bold px-3">
            {2}
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;