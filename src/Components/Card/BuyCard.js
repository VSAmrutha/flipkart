import React from "react";
import styles from "./Card.module.css";
import Typography from "../Typography/Typography";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const BuyCard = (props) => {
  const { cards, setProductHandler } = props;
  return (
    <div className={styles.buyWrappercard}>
      {cards.items.map((card, index) => {
        return (
          <div
            className={styles.buycard}
            key={index}
            onClick={() => {
              setProductHandler(card);
            }}
          >
            <Link
              className={styles.buylink}
              to={{
                pathname: "/product",
                card,
              }}
            >
              <div className={styles.buyimageWrapper}>
                {" "}
                <img
                  src={card.image}
                  alt="cardimage"
                  className={styles.buycardImage}
                />
              </div>
              <div className={styles.buycardText}>
                {card.title && (
                  <Typography component="p" className="buytitle">
                    {card.title}
                  </Typography>
                )}
                {card.ratings && (
                  <Typography component="p" className="ratings">
                    {card.ratings}
                    <span>
                      <FaStar />
                    </span>
                  </Typography>
                )}
                {card.price && (
                  <Typography component="p" className="price">
                    <span> &#8377;</span>
                    {card.price}
                  </Typography>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { universe: state.cart, productDetail: state.cart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyNowHandler: (data) => dispatch({ type: "BUY_NOW", data }),
    setProductHandler: (data) => dispatch({ type: "SET_PRODUCT", data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuyCard);
