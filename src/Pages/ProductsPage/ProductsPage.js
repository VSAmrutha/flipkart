import React from "react";
import styles from "./ProductsPage.module.css";
import Typography from "../../Components/Typography/Typography";
import BuyCard from "../../Components/Card/BuyCard";

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
