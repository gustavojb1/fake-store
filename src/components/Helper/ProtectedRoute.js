import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (!login) {
    alert("Favor fazer Login para confirmar o pedido");
  }

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
