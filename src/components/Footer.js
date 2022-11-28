import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className={`${styles.footer} container`}>
      Desenvolvido por Gustavo Junqueira Barbosa -
      <a href="https://github.com/gustavojb1" target="_blank" rel="noreferrer">
        <GitHub className={styles.logo} />
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-barbosa-b2668023a/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className={styles.logo} />
      </a>
    </div>
  );
};

export default Footer;
