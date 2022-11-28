import React from "react";
import styles from "./ConfirmPurchase.module.css";
import { UserContext } from "./UserContext";

const ConfirmPurchase = () => {
  const { cartItem } = React.useContext(UserContext);
  console.log(cartItem);

  return (
    <div className={`${styles.confirm} container`}>
      <div className={styles.title}>
        Por Favor confirme os itens para finalizar a compra
      </div>
      <div className={styles.itens}>
        {cartItem.map((element) => (
          <section className={styles.sectionItem}>
            <div className={`${styles.titleItem} ${styles.flex}`}>
              {element.title}
            </div>
            <div className={`${styles.image} ${styles.flex}`}>
              <img src={element.image} alt={element.title} />
            </div>
            <div className={`${styles.description} ${styles.flex}`}>
              {element.description}
            </div>
            <div className={`${styles.total} ${styles.flex}`}>
              <div>Qt: {element.qt}</div>
              <div>{element.price}</div>
              <div className={styles.priceTotal}>
                Total: <br />
                {(element.price * element.qt).toFixed(2)}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ConfirmPurchase;
