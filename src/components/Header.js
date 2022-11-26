import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Cart } from "../assets/cart-shopping-solid.svg";

const Header = () => {
  return (
    <div className={`${styles.header} container`}>
      <span className={styles.title}>FAKE STORE</span>
      <div className={styles.separator}></div>

      <div className={styles.midSeparator}>
        <div>Login/Criar</div>
        <Cart className={styles.cart} />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Header;
