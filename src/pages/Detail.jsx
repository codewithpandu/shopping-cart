import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../products";
import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../utils/RupiahCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../stores/cart";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carts = useSelector((store) => store.cart.items);
  console.log(carts);

  useEffect(() => {
    // cari produk berdasarkan slug
    const findProduct = products.filter((product) => product.slug === slug);
    if (findProduct) {
      setDetail(findProduct[0]);
    } else {
      navigate("/");
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: detail.id, quantity }));
  };
  return (
    <div className="container py-24">
      <h1 className="text-3xl md:text-4xl pb-5">Product Detail</h1>
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded"
          src={detail.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {detail.name}
          </h1>
          <span className="title-font font-medium text-2xl text-gray-900">
            {formatRupiah(detail.price)}
          </span>
          <div className="flex gap-5 mt-2">
            <div className="flex gap-3 justify-center items-center">
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-3 font-bold rounded-lg hover:bg-blue-600 cursor-pointer"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-3 font-bold rounded-lg hover:bg-blue-600 cursor-pointer"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="mt-2 bg-blue-500 text-white font-semibold px-3 py-2 hover:bg-blue-600 cursor-pointer rounded-lg"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p className="leading-relaxed mt-4 text-lg">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
