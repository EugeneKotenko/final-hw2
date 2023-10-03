import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from '../actions/cartActions'; 
import { selectMemoizedCartItems } from '../selectors/cartSelectors'; 
import styles from '../assets/styles/cart.module.scss'

const Cart = () => {
  const cartItems = useSelector(selectMemoizedCartItems);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItemComponent = (cartItem) => {
    return (
        <div className={styles.cartItem} key={cartItem.id}>
            <img src={cartItem.image} alt={cartItem.name} />
            <span>{cartItem.name}</span>
            <span>{cartItem.price}</span>
            <button onClick={() => handleClose(cartItem)}>Видалити</button>
        </div>
    );
};

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      {totalQuantity === 0 ? (
        <div className={styles.emptyCartMessage}>
          Ваша корзина порожня
        </div>
      ) : (
        <>
          {cartItems.map(cartItemComponent)}
          <div>Загальна вартість: {totalCost}</div>
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
