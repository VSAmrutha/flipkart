import React from "react";
import styles from "./Card.module.css";
// import card from "../Contants/dealsoftheday.js";
import Typography from "../Typography/Typography";
import Carousel from "../Carousel/Carousel";

export default function Card(props) {
  const { title, subtitle, card } = props;
  return (
    <>
      <div className={styles.cardMainWrapper}>
        {title && (
          <Typography component="h2" className="h2">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography component="p" className="pgrey">
            {subtitle}
          </Typography>
        )}
        <div className={styles.cardWrapper}>
          <Carousel>
            {card.items.map((card, index) => {
              return (
                <div className={styles.card} key={index}>
                  <a href={card.link} className={styles.link}>
                    <div className={styles.imageWrapper}>
                      {" "}
                      <img
                        src={card.image}
                        alt="cardimage"
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.cardText}>
                      {card.title && (
                        <Typography component="p" className="pbold">
                          {card.title}
                        </Typography>
                      )}
                      {card.subtitle && (
                        <Typography component="p" className="pgreen">
                          {card.subtitle}
                        </Typography>
                      )}
                      {card.text && (
                        <Typography component="p" className="pgrey">
                          {card.text}
                        </Typography>
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
