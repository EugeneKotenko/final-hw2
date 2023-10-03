import React from 'react';
import styles from '../../assets/styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="./static/images/header_logo02.png" alt="SmoozieBar Logo" className={styles.logo} />
      </div>
      
      <div className={styles.section}>
        <h3>About the Store</h3>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Delivery and Payment Terms</li>
          <li>Return and Exchange Policy</li>
          <li>Terms of Service (Contract Offer)</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3>User</h3>
        <ul>
          <li>Login</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3>Contacts</h3>
        <address>
          <p>Kyiv, Mezhyhirska St., 20 (Brewers Bar)</p>
          <p>093 320 65 21</p>
          <p>050 050 82 66</p>
          <p>shop@reformation.beer</p>
          <p>Daily 12:00-18:00</p>
        </address>
      </div>
      
      <div className={styles.section}>
        <h3>Find Us on Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Telegram</li>
        </ul>
      </div>
      
      <p>&copy; 2023 Smoothie Bar</p>
    </footer>
  );
}

export default Footer;
