import React from "react";
import { PRODUCT_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import Error from "./Helper/Error";
import Loading from "./Helper/Loading";
import ProductItem from "./ProductItem";
import styles from "./ProductContainer.module.css";

const ProductContainer = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCT_GET(20);
      const { response, json } = await request(url, options);
    }
    fetchProducts();
  }, [request]);
  console.log(data);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={`${styles.productContainer} container`}>
        {data.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    );
};

export default ProductContainer;
