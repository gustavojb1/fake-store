import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import styles from "./Home.module.css";

const Home = () => {
  const [name, setName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [search, setSearch] = useState({
    name: "",
    maxPrice: "",
    minPrice: "",
  });

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeMaxPrice(event) {
    setMaxPrice(event.target.value);
  }
  function onChangeMinPrice(event) {
    setMinPrice(event.target.value);
  }
  function handleClickSearch() {
    setSearch({
      name,
      maxPrice,
      minPrice,
    });
  }
  function handleClickReset() {
    setName("");
    setMaxPrice("");
    setMinPrice("");
    setSearch({
      name: "",
      maxPrice: "",
      minPrice: "",
    });
  }

  return (
    <div className={`${styles.flex} container`}>
      <div className={styles.search}>
        <span>Pesquisar</span>
        <label>
          Nome do produto:
          <br />
          <input type="text" value={name} onChange={onChangeName} />
        </label>
        <label>
          Valor Máximo:
          <br />
          <input type="number" value={maxPrice} onChange={onChangeMaxPrice} />
        </label>
        <label>
          Valor Mínimo:
          <br />
          <input type="number" value={minPrice} onChange={onChangeMinPrice} />
        </label>
        <button onClick={handleClickSearch}>Pesquisar</button>
        <button onClick={handleClickReset}>Limpar</button>
      </div>
      <div className={styles.productContainer}>
        <ProductContainer search={search} />
      </div>
    </div>
  );
};

export default Home;
