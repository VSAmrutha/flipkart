import React from "react";
import styles from "./Card.module.css";
import card from "../../Contants/colorlist.js";
import Typography from "../Typography/Typography";
import classnames from "classnames";
export default function ColorCard(props) {
  return (
    <div className={styles.crCardWrapper}>
      {card.items.map((card, index) => {
        return (
          <div className={styles.crCard} key={card.name}>
            <a href={card.link} className={styles.crLink}>
              <div
                className={classnames(
                  styles.crCardDivWrapper,
                  styles[`color${index}`]
                )}
              >
                <div className={styles.crImageWrapper}>
                  {" "}
                  <img
                    src={card.image}
                    alt="cardimage"
                    className={styles.crCardImage}
                  />
                </div>
                <div className={styles.crCardText}>
                  {card.title && (
                    <Typography component="p" className="pwhitebold">
                      {card.title}
                    </Typography>
                  )}
                  {card.subtitle && (
                    <Typography component="p" className="pcolor">
                      {card.subtitle}
                    </Typography>
                  )}
                  {card.text && (
                    <Typography component="p" className="pdarkgrey">
                      {card.text}
                    </Typography>
                  )}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
