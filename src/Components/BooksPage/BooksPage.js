import React from "react";
import styles from "./Bookspage.module.css";
import Typography from "../Typography/Typography";
import BuyCard from "../Card/BuyCard";
import bookslist from "../Contants/bookslist.js";

export default function BooksPage() {
  return (
    <div className={styles.mainWrapper}>
      <Typography component="h3" className="h3">
        Books
      </Typography>
      <div className={styles.listWrapper}>
        <BuyCard cards={bookslist} />
      </div>
    </div>
  );
}
