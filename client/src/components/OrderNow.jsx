import React, { useEffect, useState } from "react";
import styles from "../assets/styles/OrderNow.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/ordersSlice";

const OrderNow = () => {
  const [smoothiesData, setSmoothiesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSmoothies = async () => {
      try {
        const response = await fetch("/data");
        const data = await response.json();
        setSmoothiesData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchSmoothies();
  }, []);

  const handleAddToCart = (smoothie) => {
    dispatch(addToCart(smoothie));

    console.log(`Added ${smoothie.name} to cart.`);
  };
  

  return (
    <div className={styles.container}>
      {smoothiesData.map((smoothie, index) => (
        <div key={index} className={styles.tile}>
          <img
            src={smoothie.image}
            alt={smoothie.name}
            className={styles.image}
          />
          <h3 className={styles.title}>{smoothie.name}</h3>
          <p className={styles.ingredients}>{smoothie.ingredients}</p>
          <p className={styles.price}>{smoothie.price}</p>
          <p className={styles.calories}>{smoothie.cal}</p>
          <button
            className={styles.addToCartButton}
            onClick={() => handleAddToCart(smoothie)}
          >
            ORDER NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderNow;
