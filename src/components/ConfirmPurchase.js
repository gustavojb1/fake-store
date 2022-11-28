import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmPurchase.module.css";
import { UserContext } from "./UserContext";

const ConfirmPurchase = () => {
  const { cartItem, setCartItem } = React.useContext(UserContext);
  const [total, setTotal] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let subTotal = 0;
    cartItem.forEach((element) => {
      subTotal += element.price * element.qt;
    });
    setTotal(subTotal.toFixed(2));
  }, [cartItem]);

  return (
    <div className={`${styles.confirm} container`}>
      <div className={styles.title}>
        Por Favor confirme os itens para finalizar a compra
      </div>
      <div className={styles.itens}>
        {cartItem.map((element) => (
          <section key={element.id} className={styles.sectionItem}>
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
      <div className={styles.totalGeral}>
        <div>Total: {total}R$</div>
        <button
          onClick={() => {
            alert("Parabens seu pedido foi efetuado");
            setCartItem([]);
            navigate("/");
          }}
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
