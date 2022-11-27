import React, { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Cart } from "../assets/cart-shopping-solid.svg";
import CartItens from "./CartItens";

const Header = () => {
  const [handleCart, setHandleCart] = useState(false);

  function onChangeHandleCart() {
    setHandleCart(!handleCart);
    console.log(handleCart);
  }
  return (
    <div className={`${styles.header} container`}>
      <span className={styles.title}>FAKE STORE</span>
      <div className={styles.separator}></div>

      <div className={styles.midSeparator}>
        <div>Login/Criar</div>
        <Cart onClick={onChangeHandleCart} className={styles.cart} />
      </div>
      <div className={styles.separator}></div>
      <div className={`${styles.cartItens} ${handleCart && styles.show}`}>
        <CartItens />
      </div>
    </div>
  );
};

export default Header;
