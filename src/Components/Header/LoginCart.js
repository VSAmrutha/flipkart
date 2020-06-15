import React from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function LoginCart(props) {
  const {
    loginClass,
    cartClass,
    mainLoginDiv,
    loginClick,
    loggedIn,
    login,
    resetHandler,
    cart,
  } = props;
  return (
    <div className={mainLoginDiv}>
      <div className={styles.loginWrapper}>
        <Button className={loginClass} onClick={!loggedIn ? loginClick : null}>
          {loggedIn ? login.email : "Login"}
        </Button>
        {loggedIn ? (
          <span className={styles.logout} onClick={resetHandler}>
            Logout
          </span>
        ) : null}
      </div>
      <Link
        className={styles.loginCartlink}
        to={{
          pathname: "/cart",
        }}
      >
        <Button className={cartClass}>
          <div className={styles.faCart}>
            <FaShoppingCart />
          </div>
          Cart
        </Button>
        <span className={styles.cartValue}>{cart.length}</span>
      </Link>
    </div>
  );
}
