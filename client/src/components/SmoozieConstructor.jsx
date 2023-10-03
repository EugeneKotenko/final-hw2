import React, { useEffect, useState } from "react";
import "../assets/styles/smoothieConstructor.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/ordersSlice";

const SmoozieConstructor = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const maxIngredients = 5;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch("http://localhost:5555/ingredients");
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchIngredients();
  }, []);

  const addIngredient = (ingredient) => {
    if (selectedIngredients.length < maxIngredients) {
      setSelectedIngredients((prev) => [...prev, ingredient]);
      setTotalPrice((prev) => prev + ingredient.price);
      dispatch(addToCart(ingredient));
    } else {
      alert("You can select up to 5 ingredients.");
    }
  };

  const removeIngredient = (index) => {
    const newIngredients = [...selectedIngredients];
    const priceToSubtract = newIngredients[index].price;
    newIngredients.splice(index, 1);
    setSelectedIngredients(newIngredients);
    setTotalPrice((prev) => prev - priceToSubtract);
  };

  const confirmOrder = () => {
    if (selectedIngredients.length === 0) {
      alert("Please select at least one ingredient.");
      return;
    }

    const order = {
      name: "Custom Smoothie",
      price: totalPrice,
      ingredients: selectedIngredients,
    };

    const currentOrders = JSON.parse(localStorage.getItem("orders")) || [];

    currentOrders.push(order);

    localStorage.setItem("orders", JSON.stringify(currentOrders));

    alert("Order placed successfully!");

    setSelectedIngredients([]);
    setTotalPrice(0);
  };

  const cardItem = (item) => (
    <div className="ingredient-card" key={item.id}>
      <img src={item.image} alt={item.name} />
      <h5>{item.name}</h5>
      <p>${item.price.toFixed(2)}</p>
      <button className="btn-add" onClick={() => addIngredient(item)}>
        Add to smoothie
      </button>
    </div>
  );

  return (
    <div className="smoothie-constructor">
      <h1>Create Your Smoothie</h1>

      <div className="constructor-wrapper">
        <div className="ingredient-selector">
          <h2>Choose your ingredients:</h2>
          <div className="ingredient-list">
            {ingredients.map((ingredient) => cardItem(ingredient))}
          </div>
        </div>

        <div className="selected-ingredients">
          <h2>Selected Ingredients</h2>
          <ul>
            {selectedIngredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - ${ingredient.price.toFixed(2)}
                <button
                  className="btn-remove"
                  onClick={() => removeIngredient(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button
            className="btn-confirm"
            onClick={confirmOrder}
            disabled={selectedIngredients.length === 0}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmoozieConstructor;
