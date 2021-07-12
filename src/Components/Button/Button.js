import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ children, className, ...others }) => {
  return (
    <button className={styles[className]} {...others}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Button.defaultProps = {
  children: null,
  className: null,
};
export default Button;
