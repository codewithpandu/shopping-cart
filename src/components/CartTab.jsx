import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  return (
    <div className="fixed top-0 right-0 h-full bg-gray-700 w-104 grid grid-rows-[60px_1fr_60px]">
      <h2 className="text-white text-2xl p-5 font-semibold">Shopping Cart</h2>
      <div className="flex flex-col gap-2">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white">Close</button>
        <button className="bg-amber-500">Checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
