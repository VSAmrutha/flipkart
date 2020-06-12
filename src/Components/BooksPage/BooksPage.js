import React from "react";
import styles from "./Bookspage.module.css";
import Typography from "../Typography/Typography";
import BuyCard from "../Card/BuyCard";

export default function BooksPage({ title, bookslist }) {
  return (
    <div className={styles.mainWrapper}>
      <Typography component="h3" className="h3">
        {title}
      </Typography>
      <div className={styles.listWrapper}>
        <BuyCard cards={bookslist} />
      </div>
    </div>
  );
}
