import React from "react";
import { PRODUCT_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import Error from "./Helper/Error";
import Loading from "./Helper/Loading";
import ProductItem from "./ProductItem";
import styles from "./ProductContainer.module.css";

const ProductContainer = ({ search }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCT_GET(100);
      await request(url, options);
    }
    fetchProducts();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={`${styles.productContainer} container`}>
        {data
          .filter((product) =>
            product.title.toLowerCase().includes(search.name.toLowerCase())
          )
          .filter((product) =>
            search.minPrice > 0 ? product.price > search.minPrice : true
          )
          .filter((product) =>
            search.maxPrice > 0 ? product.price < search.maxPrice : true
          )
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    );
};

export default ProductContainer;

// {data.map((product) => (
//   <ProductItem key={product.id} product={product} />
// ))}
