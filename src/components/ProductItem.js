import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { UserContext } from "./UserContext";

function ProductItem({ product }) {
  const { cartItem, setCartItem } = React.useContext(UserContext);
  const [disable, setDisable] = React.useState(false);

  useEffect(() => {
    if (cartItem.filter((e) => e.id === product.id).length > 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [cartItem, product]);

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
  }

  return (
    <div className={styles.product}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.image}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.details}>
          <div className={styles.price}>R$ {product.price}</div>
          <div className={styles.title}>{product.title}</div>
        </div>
      </Link>
      <div className={styles.comprar1}>
        {disable ? (
          <button disabled className={styles.comprado}>
            Item ja adicionado
          </button>
        ) : (
          <button onClick={handleClickAddCart} className={styles.comprar}>
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;

// category, description, id, image, price, title
