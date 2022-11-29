import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import axios from "axios";
import { UserContext } from "./UserContext";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getItem() {
      setError(null);
      setLoading(true);
      axios({
        url: `https://fakestoreapi.com/products/${id}`,
        method: "GET",
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError("Produto não encontrado");
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getItem();
  }, [id]);

  const { cartItem, setCartItem } = React.useContext(UserContext);

  function handleClickAddCart() {
    const newProduct = { ...data, qt: 1 };

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

  if (error) return <div className="container">{error}</div>;
  if (loading) return <div className="container">Carregando...</div>;
  if (data)
    return (
      <div className={`${styles.product} container`}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={styles.price}>R$ {data.price}</div>
        <div className={styles.description}>{data.description}</div>
        <button onClick={handleClickAddCart} className={styles.comprar}>
          Adicionar ao carrinho
        </button>
      </div>
    );
};

export default ProductDetails;
