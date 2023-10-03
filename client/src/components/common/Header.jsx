import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../assets/styles/Header.module.scss';

const logoImageUrl = "./static/images/header_logo02.png";

function Header({ userScrollY }) {
  return (
    <header className={`${styles.header} ${userScrollY > 70 ? styles.sticky : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.logoWrap}>
          <Link to="/" className={styles.logoLink}>
            <img src={logoImageUrl} alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/constructor" className={styles.navLink}>
                Smoothie Constructor
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/about" className={styles.navLink}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <NavLink to="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

