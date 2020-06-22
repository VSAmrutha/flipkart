import React from "react";
import styles from "./Card.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

export default function CartCard(props) {
  const { cart, incrementHandler, decrementHandler, removeFromCart } = props;
  return (
    <>
      {cart &&
        cart.map((item) => {
          return (
            <>
              <div className={styles.cartCardWrapper}>
                <div className={styles.cartimageDiv}>
                  <div className={styles.cartimageWrapper}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.cartImage}
                    />
                  </div>
                  <div className={styles.cartButton}>
                    <Button
                      className="subAddButton"
                      onClick={() => decrementHandler(item)}
                    >
                      -
                    </Button>
                    <Button className="numberDisplay">{item.quantity}</Button>
                    <Button
                      className="subAddButton"
                      onClick={() => incrementHandler(item)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className={styles.cartInfoDiv}>
                  {item.title && (
                    <Typography component="h6" className="h6">
                      {item.title}
                    </Typography>
                  )}
                  {item.author && (
                    <Typography component="p" className="pgrey">
                      {item.author}
                    </Typography>
                  )}

                  {item.price && (
                    <Typography component="p" className="cartprice">
                      <span> &#8377;</span>
                      {item.quantityPrice}
                    </Typography>
                  )}
                  <Button
                    className="removeButton"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </Button>
                </div>
                <div className={styles.cartDeliveryDiv}>
                  <Typography component="p" className="deliveryMsg">
                    Delivery by Tomorrow 9 PM | <b>FREE</b>
                  </Typography>
                </div>
              </div>
              <hr className={styles.hr} />
            </>
          );
        })}
    </>
  );
}
