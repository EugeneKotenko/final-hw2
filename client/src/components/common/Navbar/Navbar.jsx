import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { FaOpencart } from "react-icons/fa";
import { LuCherry } from "react-icons/lu";
import ErrorBoundary from "../../Pages/ErrorBoundary";

const Navbar = () => {

    const [menu,setMenu] = useState('shop')

    return (
        <ErrorBoundary>
            <div className={styles.navbar}>
                <div className={styles['nav-logo']}>
                <Link to='/' className={styles.logo}><img src={''} alt=""/><LuCherry/></Link>
                <Link to='/'><p >Smoothies</p></Link>
                </div>
                <ul className={styles['nav-menu']}>
                    <li onClick={() => {setMenu('home')}}> <Link to='/'>Home</Link> {menu==='home'?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu('constructor')}}> <Link to='/constructor'>Smoothie Constructor</Link>{menu==='constructor'?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu('special')}}><Link to='/special'>Special Offer</Link>{menu==='special'?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu('about')}}><Link to ='/about'>About Us</Link>{menu==='about'?<hr/>:<></>}</li>
                </ul>
                <div className={styles['nav-login-cart']}>
                    {/* <Link to ='/login'><button>Login</button></Link> */}
                    <Link to ='/cart'><p href=""><FaOpencart /></p></Link>
                    <div className={styles["nav-cart-count"]}>0</div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default Navbar;
