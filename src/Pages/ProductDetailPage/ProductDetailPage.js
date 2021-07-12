import React from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import bookslist from "../../Contants/bookslist.js";
import styles from "./ProductDetailPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles.PPWrapper}>
      <ProductDetail data={bookslist.items[0]} />
    </div>
  );
};
export default ProductPage;
