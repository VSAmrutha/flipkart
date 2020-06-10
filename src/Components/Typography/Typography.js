import React from "react";
import styles from "./Typography.module.css"
export default function Typography(props) {
  const { children, className, component } = props;
  let Component = component || "p";

  return <Component className={styles[className]}>{children}</Component>;
}
