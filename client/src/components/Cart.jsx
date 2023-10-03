import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  clearCart,
  adjustQuantity,
} from "../reducers/ordersSlice";
import { selectMemoizedCartItems } from "../selectors/cartSelectors";
import styles from "../assets/styles/cart.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectMemoizedCartItems);
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(removeFromCart(item));
  };

  const cartItemComponent = (cartItem) => {
    return (
      <div className={styles.cartItem} key={cartItem.id}>
        <img src={cartItem.image} alt={cartItem.name} />
        <span>{cartItem.name}</span>
        <span>{cartItem.price}</span>
        <button onClick={() => handleClose(cartItem)}>Delite</button>
      </div>
    );
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      {totalQuantity === 0 ? (
        <div className={styles.emptyCartMessage}>Your cart i empty</div>
      ) : (
        <>
          {cartItems.map(cartItemComponent)}
          <div>Topal price: {totalCost}</div>
          <div className="container">
            <div className="row">
              <NavLink to="/checkout" className={styles.checkoutButton}>
                To checkout
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
