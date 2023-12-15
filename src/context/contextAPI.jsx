import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataFromAPI } from "../utils/api";
import { app, auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setloading] = useState(false);
  const [categoriesResults, setcategoriesResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("now_playing");
  const [user, setUser] = useState();
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [selectCategories, user]);
  const fetchSelectedCategoryData = (query) => {
    setloading(true);
    fetchDataFromAPI(`movie/${query}?language=en-US`)
      .then(({ results }) => {
        setcategoriesResults(results);
        setloading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setloading,
        categoriesResults,
        setcategoriesResults,
        selectCategories,
        setSelectCategories,
        setUser,
        user,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
