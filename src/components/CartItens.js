import React, { useEffect } from "react";
import { UserContext } from "./UserContext";
import styles from "./CartItens.module.css";
import { Link } from "react-router-dom";

const CartItens = ({ onChangeHandleCart }) => {
  const { cartItem, setCartItem } = React.useContext(UserContext);
  const [total, setTotal] = React.useState("");

  useEffect(() => {
    let subTotal = 0;
    cartItem.forEach((element) => {
      subTotal += element.price * element.qt;
    });
    setTotal(subTotal.toFixed(2));
  }, [cartItem]);

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
            <div className={styles.price}>{item.price}</div>
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
      {total > 0 ? (
        <div className={styles.total}>
          <div className={styles.total1}>Preço total:</div>
          <div className={styles.total2}>{`${total} R$`}</div>
          <Link to="/confirm">
            <button onClick={onChangeHandleCart}>Finalizar Compra</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CartItens;
// backgroundImage:url(${item.image}
