import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
import { formatRupiah } from "../utils/RupiahCurrency";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter((product) => product.id === productId);
    setDetail(findDetail[0]);
  }, [productId]);
  console.log(detail);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      }),
    );
  };
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId: productId, quantity: quantity + 1 }));
  };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 gap-5">
      <img src={detail.image} className="w-12" alt="" />
      <h3>{detail.name}</h3>
      <h3>{formatRupiah(detail.price * quantity)}</h3>
      <div className="flex justify-between w-20">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
