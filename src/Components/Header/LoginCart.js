import React from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";

export default function LoginCart(props) {
  const { loginClass, cartClass, mainLoginDiv } = props;
  return (
    <div className={mainLoginDiv}>
      <Button className={loginClass}>Login</Button>
      <Button className={cartClass}>
        <div className={styles.faCart}>
          <FaShoppingCart />
        </div>
        Cart
      </Button>
    </div>
  );
}
