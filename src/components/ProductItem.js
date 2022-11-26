import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem({ product }) {
  console.log(product);
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.details}>
        <div style={{ color: "red" }}>R$ {product.price}</div>
        <div>{product.title}</div>
        <button className={styles.comprar}>Comprar</button>
      </div>
    </div>
  );
}

export default ProductItem;

// category, description, id, image, price, title
