import React from "react";
import useForm from "../Hooks/useForm";
import styles from "./Login.module.css";
import { UserContext } from "./UserContext";

const Login = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error } = React.useContext(UserContext);

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
          <button>Login</button>
          {error ? <div className={styles.error}>{error}</div> : null}
          <div>
            <br />
            Para teste: <br />
            username: "mor_2314", password: "83r5^_"
          </div>
        </form>
      </div>
      <div className={styles.createUser}>
        <form>
          <h1 className={styles.title}>Criar Usuário</h1>
          <label>
            Username:
            <br />
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input type="password" />
          </label>
          <br />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
