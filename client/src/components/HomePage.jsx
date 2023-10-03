import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  }

  
  useEffect(() => {
    const handleScroll = () => {
      let offset = window.scrollY; 
      document.querySelector(`.${styles.parallaxImage}`).style.transform = `translateY(${offset * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.homeSection}>
      <div className={styles.parallaxContainer}>
        <img className={styles.parallaxImage} src="./static/images/back_image1.jpg" alt="Smoothie" />
        <div className={styles.centeredCaption}>
          <h1 className={styles.homeSectionTitle}>New Drink, New Day</h1>
          <div className={styles.homeSectionText}>
            <p>
              With our wide variety of smoothies and healthy drinks, we are sure to
              help you make the right choice to start your day.
            </p>
          </div>
        </div>
        <div className={styles.imageCaption}>
          <h2>Smoothie Name</h2>
          <p>Help you make the right choice to start</p>
          <button onClick={handleOrderNow} className={styles.orderNowButton}>Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
