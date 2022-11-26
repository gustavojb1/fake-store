import React from "react";
import ProductContainer from "./ProductContainer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.flex} container`}>
      <div className={styles.search}>Pesquisar</div>
      <ProductContainer />
    </div>
  );
};

export default Home;
