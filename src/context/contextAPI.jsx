import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setAloading] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);
  return (
    <Context.Provider
      value={{
        loading,
        setloading,
        setUser,
        user,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
