import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import Button from "../Button/Button";
import supercoins from "../../images/super.PNG";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  FaShoppingCart,
  FaStar,
  FaMoneyBillWave,
  FaTag,
  FaRegCalendarCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Typography from "../Typography/Typography";
import { connect } from "react-redux";

const ProductDetail = (props) => {
  const { productDetail, addToCartHandler } = props;
  const [pincode, setPincode] = useState("");

  const [beforePinText, setBeforePinText] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (productDetail === undefined || !productDetail) {
      history.push("/");
    }
  }, [productDetail]);

  const deliveryHandler = (e) => {
    setPincode(e.target.value);
  };
  const onClickDelivery = () => {
    return pincode ? setBeforePinText(true) : null;
  };

  return (
    <>
      {productDetail && (
        <div className={styles.PDWrapper}>
          <div className={styles.leftPDWrapper}>
            <div className={styles.imagePDWrapper}>
              <img
                src={productDetail.image}
                alt={productDetail.title}
                className={styles.image}
              />
            </div>
            <div className={styles.buttonPDWrapper}>
              <Button
                className="addToCart"
                onClick={() => {
                  addToCartHandler(productDetail);
                }}
              >
                <span className={styles.faIcon}>
                  <FaShoppingCart />
                </span>
                Add to Cart
              </Button>
              <Link to="/cart">
                {" "}
                <Button
                  className="buyNow"
                  onClick={() => {
                    addToCartHandler(productDetail);
                  }}
                >
                  <span className={styles.faIcon}>
                    <FaMoneyBillWave />
                  </span>
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.rightPDWrapper}>
            {productDetail.mainTitle && (
              <Typography component="h4" className="h4">
                {productDetail.mainTitle}
              </Typography>
            )}
            {productDetail.ratings && (
              <Typography component="p" className="pdratings">
                {productDetail.ratings}
                <span>
                  <FaStar />
                </span>
              </Typography>
            )}
            {productDetail.price && (
              <Typography component="p" className="pdprice">
                <span> &#8377;</span>
                {productDetail.price}
              </Typography>
            )}

            <Typography component="p" className="redText">
              Hurry only 5 Left
            </Typography>
            <Typography component="h5" className="h5">
              Available offers
            </Typography>
            <Typography component="p" className="availableOffer">
              <span>
                <FaTag />
              </span>
              <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank
              Credit Card T&C
            </Typography>
            <Typography component="p" className="availableOffer">
              <span>
                <FaTag />
              </span>
              <b>Bank Offer</b> Extra 5% off* with Axis Bank Buzz Credit Card
              T&C
            </Typography>
            <Typography component="p" className="availableOffer">
              <span>
                <FaRegCalendarCheck />
              </span>
              No Cost EMI on Flipkart Axis Bank Credit Card T&C
            </Typography>
            {/* Input starts */}
            <div className={styles.delivery}>
              <Typography component="p" className="pddelivery">
                <span>Delivery</span>
              </Typography>
              <div className={styles.pdinputWrapper}>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <input
                  type="text"
                  value={pincode}
                  name="pincode"
                  onChange={deliveryHandler}
                  className={styles.pdinput}
                />
                <Button className="checkButton" onClick={onClickDelivery}>
                  Check
                </Button>

                {beforePinText ? (
                  <Typography component="p" className="deliveryMsg">
                    Delivery by Tomorrow 9 PM | <b>FREE</b>
                  </Typography>
                ) : (
                  <Typography component="p" className="availableOffer">
                    Delivery within 7 to 8 working days
                  </Typography>
                )}
              </div>
            </div>
            {/* Input ends */}
            <Typography component="p" className="blueText">
              <span>Author</span>
              {productDetail.author}
            </Typography>
            <div className={styles.superCoinImageWrapper}>
              <img
                src={supercoins}
                alt="coins"
                className={styles.superCoinImage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.cart, productDetail: state.productDetail };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyNowHandler: (data) => dispatch({ type: "BUY_NOW", data }),
    setProductHandler: (data) => dispatch({ type: "SET_PRODUCT", data }),
    addToCartHandler: (data) => dispatch({ type: "ADD_TO_CART", data }),
    resetHandler: () => dispatch({ type: "RESET" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
