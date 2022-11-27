import React from "react";
import styles from "./ProductItem.module.css";
import { UserContext } from "./UserContext";

function ProductItem({ product }) {
  const { cartItem, setCartItem } = React.useContext(UserContext);

  function handleClickAddCart() {
    const newProduct = { ...product, qt: 1 };

    if (cartItem.filter((e) => e.id === newProduct.id).length > 0) {
      let index;

      for (let i = 0; i < cartItem.length; i++) {
        if (cartItem[i].id === newProduct.id) {
          index = i;
        }
      }

      cartItem[index].qt = cartItem[index].qt + 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, newProduct]);
    }

    console.log(cartItem);
  }

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.details}>
        <div style={{ color: "red" }}>R$ {product.price}</div>
        <div>{product.title}</div>
        <button onClick={handleClickAddCart} className={styles.comprar}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

// category, description, id, image, price, title
