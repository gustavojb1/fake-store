import React from "react";
import useForm from "../Hooks/useForm";
import styles from "./Login.module.css";
import { UserContext } from "./UserContext";
import { ReactComponent as Shop } from "../assets/Person-Shopping-color.svg";

const Login = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmitLogin(event) {
    event.preventDefault();

    userLogin(username.value, password.value);
    console.log("teste");
  }

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmitLogin}>
          <label>
            Username:
            <br />
            <input
              type="text"
              value={username.value}
              onChange={username.onChange}
            />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              type="password"
              value={password.value}
              onChange={password.onChange}
            />
          </label>
          <br />
          {loading ? (
            <button disabled>Carregando</button>
          ) : (
            <button>Entrar</button>
          )}
          {error ? <div className={styles.error}>{error}</div> : null}
          <div>
            <br />
            Para teste: <br />
            username: "mor_2314", password: "83r5^_"
          </div>
        </form>
      </div>
      <div className={styles.createUser}>
        <Shop className={styles.shop} />
      </div>
    </div>
  );
};

export default Login;
