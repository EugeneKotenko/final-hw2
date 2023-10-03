import React from "react";
import { useSelector } from "react-redux";
import styles from "../assets/styles/Checkout.module.scss";

const Checkout = () => {
  const cartItems = useSelector((state) => state.addItem) || []; 

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const itemList = (item) => (
    <li
      className={`${styles["list-group-item"]} ${styles["d-flex"]} ${styles["justify-content-between"]} ${styles["lh-sm"]}`}
    >
      <div>
        <h6 className={styles["my-0"]}>{item.title}</h6>
      </div>
      <span className={styles["text-muted"]}>${item.price.toFixed(2)}</span>{" "}
    </li>
  );

  
  return (
    <>
      <div className={`${styles.container} ${styles["my-5"]}`}>
        <div className={`${styles.row} ${styles["g-5"]}`}>
          <div
            className={`${styles["col-md-5"]} ${styles["col-lg-4"]} ${styles["order-md-last"]}`}
          >
            <h4
              className={`${styles["d-flex"]} ${styles["justify-content-between"]} ${styles["align-items-center"]} ${styles["mb-3"]}`}
            >
              <span className={styles["text-primary"]}>Your cart</span>
              <span
                className={`${styles.badge} ${styles["bg-primary"]} ${styles["rounded-pill"]}`}
              >
                {cartItems.length}
              </span>
            </h4>
            <ul className={`${styles["list-group"]} ${styles["mb-3"]}`}>
              {cartItems.map(itemList)}

              <li
                className={`${styles["list-group-item"]} ${styles["d-flex"]} ${styles["justify-content-between"]}`}
              >
                <span>Total (USD)</span>
                <strong>${total.toFixed(2)}</strong>{" "}
              </li>
            </ul>

            <form className={`${styles.card} ${styles["p-2"]}`}>
              <div className={styles["input-group"]}>
                <input
                  type="text"
                  className={styles["form-control"]}
                  placeholder="Promo code"
                />
                <button type="submit" className={styles["btn-secondary"]}>
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className={`${styles["col-md-7"]} ${styles["col-lg-8"]}`}>
            <h4 className={styles["mb-3"]}>Billing address</h4>
            <form className={styles["needs-validation"]}>
              <div className={styles["mb-3"]}>
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className={styles["form-control"]}
                  id="firstName"
                  placeholder=""
                  required
                />
                <div className={styles["invalid-feedback"]}>
                  Valid first name is required.
                </div>
              </div>

              <div className={styles["mb-3"]}>
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className={styles["form-control"]}
                  id="lastName"
                  placeholder=""
                  required
                />
                <div className={styles["invalid-feedback"]}>
                  Valid last name is required.
                </div>
              </div>

              <div className={styles["mb-3"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={styles["form-control"]}
                  id="email"
                  placeholder="you@example.com"
                />
                <div className={styles["invalid-feedback"]}>
                  Please enter a valid email address.
                </div>
              </div>

              <div className={styles["mb-3"]}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className={styles["form-control"]}
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className={styles["invalid-feedback"]}>
                  Please enter your shipping address.
                </div>
              </div>

              <hr className={styles["mb-4"]} />

              <button
                className={`${styles["w-100"]} ${styles["btn-primary"]} ${styles["btn-lg"]}`}
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
