import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <UserContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </UserContext.Provider>
  );
};
