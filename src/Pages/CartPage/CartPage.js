import React from "react";
import styles from "./CartPage.module.css";
import Typography from "../../Components/Typography/Typography";
import CartCard from "../../Components/Card/CartCard";
import { connect } from "react-redux";
import Button from "../../Components/Button/Button";
import supercoins from "../../images/super.PNG";

const CartPage = (props) => {
  const {
    cart,
    incrementHandler,
    decrementHandler,
    totalAmount,
    removeFromCart,
  } = props;
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartLeft}>
        <Typography component="h3" className="h3">
          My Cart({cart && cart.length > 0 ? cart.length : 0})
        </Typography>
        <hr className={styles.hr} />
        <CartCard
          cart={cart}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
          removeFromCart={removeFromCart}
        />
        <div className={styles.placeorderdiv}>
          <Button className="buyNow">
            {cart && cart.length > 0 ? "PLACE ORDER" : "CART IS EMPTY"}
          </Button>
        </div>
      </div>
      <div className={styles.cartRight}>
        <Typography component="p" className="pgreyBig">
          Price Details
        </Typography>
        <hr className={styles.hr} />
        <div className={styles.priceAmount}>
          <Typography component="p" className="normalText">
            Price
          </Typography>
          <Typography component="p" className="normalText">
            {totalAmount}
          </Typography>
        </div>
        <div className={styles.priceAmount}>
          <Typography component="p" className="normalText">
            Delivery Fee
          </Typography>
          <Typography component="p" className="pgreen">
            FREE
          </Typography>
        </div>
        <hr className={styles.hr} />
        <div className={styles.priceAmount}>
          <Typography component="h3" className="h3">
            Total
          </Typography>
          <Typography component="h3" className="h3">
            {totalAmount}
          </Typography>
        </div>
        <div className={styles.superCoinImageWrapper}>
          <img src={supercoins} alt="coins" className={styles.superCoinImage} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalAmount: state.totalAmount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch({ type: "ADD_TO_CART", data }),
    incrementHandler: (data) => dispatch({ type: "INCREMENT", data }),
    decrementHandler: (data) => dispatch({ type: "DECREMENT", data }),
    removeFromCart: (data) => dispatch({ type: "REMOVE_FROM_CART", data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
