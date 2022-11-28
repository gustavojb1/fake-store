import React, { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Cart } from "../assets/cart-shopping-solid.svg";
import CartItens from "./CartItens";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  const [handleCart, setHandleCart] = useState(false);
  const { username, userLogout } = React.useContext(UserContext);

  function onChangeHandleCart() {
    setHandleCart(!handleCart);
  }
  return (
    <div className={`${styles.header} container`}>
      <span className={styles.title}>
        <Link to="/">FAKE STORE</Link>
      </span>
      <div className={styles.separator}></div>

      <div className={styles.midSeparator}>
        {username ? (
          <div>
            {username}
            <button className={styles.buttonLeave} onClick={userLogout}>
              Sair
            </button>
          </div>
        ) : (
          <div className={styles.login}>
            <Link to="/login">Login / Criar</Link>
          </div>
        )}
        <Cart onClick={onChangeHandleCart} className={styles.cart} />
      </div>
      <div className={styles.separator}></div>
      <div className={`${styles.cartItens} ${handleCart && styles.show}`}>
        <CartItens onChangeHandleCart={onChangeHandleCart} />
      </div>
    </div>
  );
};

export default Header;
