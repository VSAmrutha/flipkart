import React from "react";
import styles from "./Banner.module.css";

export default function Banner(props) {
  const { bannerImage, children } = props;
  return (
    <div className={styles.bannerWrapper}>
      <img src={bannerImage} alt="bannerimage" className={styles.bannerImage} />

      <div className={styles.bannerText}>{children}</div>
    </div>
  );
}
