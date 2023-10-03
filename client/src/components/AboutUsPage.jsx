import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../assets/styles/AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.intro}>Sip Organic Juice Bar</p>
            <p className={styles.description}>
            Smoothies Organic Juice Bar
At Sip, you are consuming the highest quality, organic and plant-based foods available to us. We partner with multiple local farms, bringing in fresh produce several times a week. Use the guide below to help you understand our commitments.

Plant-Based
Plant-based foods are easily digestible, providing immediate energy. They are free of animal products and by-products.

Organic
Organic foods are grown without the use of chemical pesticides and Genetically Modified Organisms (GMOs).

Calories
Did you know that calorie is another word for energy? Calories fuel our bodies, and the most selective we are with the quality and quantity, the better our bodies will perform. Eating just enough and including lots of plants is a good start to a healthy body.
            </p>
            <NavLink to="/contact" className={styles.button}>
              Contact Us
            </NavLink>
          </div>
          <div className={styles.imageSection}>
            <img
              src="static/images/Aboutus.png"
              alt="About Us"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

