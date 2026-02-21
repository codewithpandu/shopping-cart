import { Link } from "react-router-dom";
import shoppingCart from "../assets/images/shopping-cart.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // hitung jumlah produk
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <header className="flex justify-between">
      <Link to="/" className="font-bold text-xl">
        Home
      </Link>
      <div className="w-10 h-10 bg-gray-100 rounded-full relative flex justify-center items-center">
        <img src={shoppingCart} alt="Shopping cart" className="w-6" />
        <span className="absolute top-2/3 right-1/2 rounded-full bg-red-500 text-center text-white w-5 h-5 text-sm">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
