import React from "react";
import styles from "../assets/styles/OrderNow.module.scss";
import { useDispatch } from 'react-redux';
import { addSmoozieToCart } from '../actions/cartActions';


const smoothiesData = [
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/1.jpeg" 
    
  },
  
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/2.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/3.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/4.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/5.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/6.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/7.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/8.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/9.jpeg"  
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/10.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/11.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/12.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/13.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/14.jpeg"
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/15.jpeg" 
  },
  {
    name: "Amy",
    ingredients: "Greens, Cucumber, Ginger, Apple, Orange, Banana",
    price: "10,50 $ - 12,50 $",
    cal: "190 Cal",
    image: "static/images/16.jpeg"
  },

];

const OrderNow = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (smoothie) => {
    dispatch(addSmoozieToCart(smoothie));
    console.log(`Added ${smoothie.name} to cart.`);
  };

  return (
    <div className={styles.container}>
      {smoothiesData.map((smoothie, index) => (
        <div key={index} className={styles.tile}>
          <img src={smoothie.image} alt={smoothie.name} className={styles.image} />
          <h3 className={styles.title}>{smoothie.name}</h3>
          <p className={styles.ingredients}>{smoothie.ingredients}</p>
          <p className={styles.price}>{smoothie.price}</p>
          <p className={styles.calories}>{smoothie.cal}</p>
          <button className={styles.addToCartButton} onClick={() => handleAddToCart(smoothie)}>Додати до корзини</button>
        </div>
      ))}
    </div>
  );
};

export default OrderNow;
