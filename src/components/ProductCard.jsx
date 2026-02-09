import { Link } from "react-router-dom";
import { formatRupiah } from "../utils/RupiahCurrency";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCard = (props) => {
  // ambil isi keranjang
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const { id, name, price, image, description, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  return (
    <div className="w-full p-4 bg-zinc-100 flex flex-col">
      <Link to={slug}>
        <img src={image} alt={name} />
      </Link>
      <div className="mt-auto">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {name}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {description}
        </h2>
        <p className="mt-1">{formatRupiah(price)}</p>
        <button
          className="mt-2 bg-blue-500 text-white p-2 hover:bg-blue-600 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
