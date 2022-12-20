import React from "react";
import styles from "./Styles/button.module.css";
function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
