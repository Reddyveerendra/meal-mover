/* eslint-disable no-unused-vars */
import React from "react";
import { removeItem } from "./utils/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItems";
import CartPass from "./utils/CartPass";
const Cart = () => {
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  const cartData = useSelector((state) => state.cart.items);
  return (
    <div>
      {cartData.length === 0 ? (
        <h2 className="text-center">Add items to cart</h2>
      ) : (
        <CartPass cartData={cartData} />
      )}
    </div>
  );
};

export default Cart;
