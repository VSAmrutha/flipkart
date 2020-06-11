import React from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function LoginCart(props) {
  const { loginClass, cartClass, mainLoginDiv, loginClick } = props;
  return (
    <div className={mainLoginDiv}>
      <Button className={loginClass} onClick={loginClick}>
        Login
      </Button>
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
      </Link>
    </div>
  );
}
