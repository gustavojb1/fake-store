import React, { useEffect } from "react";
import { UserContext } from "./UserContext";
import styles from "./CartItens.module.css";

const CartItens = () => {
  const { cartItem, setCartItem } = React.useContext(UserContext);

  function increase(item) {
    item.qt = item.qt + 1;
    setCartItem([...cartItem]);
  }
  function decrease(item) {
    if (item.qt > 1) {
      item.qt = item.qt - 1;
      setCartItem([...cartItem]);
    } else {
      const newCart = cartItem.filter((oldItem) => oldItem.id !== item.id);
      setCartItem([...newCart]);
    }
  }

  return (
    <div className={styles.containerItem}>
      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.details}>{item.title}</div>
            <div className={styles.button}>
              <button onClick={() => increase(item)}>+</button>
              <div>{item.qt}</div>
              <button onClick={() => decrease(item)}>-</button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.vazio}>O carrinho está vazio</div>
      )}
    </div>
  );
};

export default CartItens;
// backgroundImage:url(${item.image}
