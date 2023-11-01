import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h4>{item.price}</h4>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              remove
            </button>
          </div>
        ))}
        <hr />
        {/* <div className="total-Price">
          <h3>Total Price</h3>
          <h4 className="price">Amount :</h4>
        </div> */}
      </div>
    </>
  );
};

export default Cart;
