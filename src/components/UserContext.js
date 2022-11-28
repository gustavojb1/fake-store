import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [username, setUsername] = React.useState(false);
  const navigate = useNavigate();

  async function userLogin(username, password) {
    setError(null);
    setLoading(true);
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error(`Error: Usuário Inválido`);
        } else {
          setUsername(username);
          navigate("/");
          setLogin(true);
        }
      })
      .catch((err) => {
        setError("Login ou Senha incorretos");
        setLogin(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const userLogout = React.useCallback(
    async function () {
      setError(null);
      setLoading(false);
      setLogin(false);
      setUsername(false);
      window.localStorage.removeItem("token");
      navigate("/");
    },
    [navigate]
  );

  return (
    <UserContext.Provider
      value={{
        cartItem,
        setCartItem,
        login,
        loading,
        error,
        username,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
